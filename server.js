const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { parseSearch } = require("./lib/SearchParser");

const app = express();
const PORT = process.env.PORT || 3001;

// Load Card Data from JSON files
let allCards = [];
const dataDirectory = path.join(__dirname, 'data');

try {
    console.log(`Reading card data from directory: ${dataDirectory}`);
    // Get list of all files in the data directory
    const filenames = fs.readdirSync(dataDirectory);

    // Filter for JSON files and load each one
    filenames
        .filter(filename => filename.toLowerCase().endsWith('.json')) // Process only .json files
        .forEach(filename => {
            const filePath = path.join(dataDirectory, filename);
            try {
                console.log(` -> Loading file: ${filename}`);
                const jsonData = fs.readFileSync(filePath, 'utf8');
                const cardsFromFile = JSON.parse(jsonData);

                // IMPORTANT: Ensure the file contained an array
                if (Array.isArray(cardsFromFile)) {
                    // Add the cards from this file to the main array
                    allCards = allCards.concat(cardsFromFile);
                    console.log(`    Loaded ${cardsFromFile.length} cards from ${filename}. Total cards now: ${allCards.length}`);
                } else {
                    console.warn(`!!! Warning: File ${filename} does not contain a valid JSON array. Skipping.`);
                }
            } catch (fileError) {
                console.error(`!!! Error processing file ${filename}:`, fileError);
                // Decide if you want to stop the server or just skip the file
            }
        });

    console.log(`Finished loading. Total cards in memory: ${allCards.length}`);

} catch (err) {
    console.error("!!! Error reading data directory or initial setup:", err);
    // Exit or handle appropriately if the data directory itself can't be read
    process.exit(1); // Exit if we can't even read the directory
}


// Middleware Setup (Remains the same)
app.use(cors());
app.use(express.json());

// Define API Routes (Endpoints)

// Simple test route (Remains the same)
app.get('/', (req, res) => {
    res.send('Hello from the ATO Card API!');
});

// --- THE MAIN CARD ENDPOINT ---
app.get('/api/cards', (req, res) => {
    console.log('Received request to /api/cards');
    console.log('Query parameters:', req.query);

    let filteredCards = [...allCards]; // Start with a copy of ALL combined cards
    let filters = {
      cardType: [],
      cycle: [],
      cardSize: [],
      usedFor: [],
    }
    let searchInput = ""

    // --- Update Filters based on request ---
    if (req.query.cardType) filters.cardType = req.query.cardType.split(",")
    if (req.query.cycle)    filters.cycle = req.query.cycle.split(",")
    if (req.query.cardSize) filters.cardSize = req.query.cardSize.split(",")
    if (req.query.q)        searchInput = req.query.q    

    // --- Apply Filters ---
    filteredCards = filteredCards.filter((card) => {
      if (req.query.cardType === "" || req.query.cycle === "" || req.query.cardSize === "") return false      

      // Search Bar
      if (searchInput && !parseSearch(card, searchInput)) return false;
      
      if (filters.cardType.length > 0 && !filters.cardType.includes(card.cardType)) return false;
      if (filters.cycle.length > 0 && !filters.cycle.includes(card.cycle)) return false;
      if (filters.cardSize.length > 0 && !filters.cardSize.includes(card.cardSize)) return false;
      //if (!filters.usedFor.includes(card.usedFor)) return false;    

      return true
    });

    // --- Send the results back (Same logic as before) ---
    console.log(`Sending back ${filteredCards.length} cards.`);
    res.json(filteredCards);
});

// --- Get unique filter options ---
app.get('/api/filter-options', (req, res) => {
  try {
      // Calculate unique values from the already loaded allCards array
      const cardTypes = [...new Set(allCards.map(card => card.cardType).filter(Boolean))].sort();
      const cycles = [...new Set(allCards.map(card => card.cycle).filter(Boolean))].sort();
      const cardSizes = [...new Set(allCards.map(card => card.cardSize).filter(Boolean))].sort();
      const usedFors = [...new Set(allCards.map(card => card.usedFor).filter((usedFor) => typeof usedFor === "string" && (usedFor.includes("Secret Deck") || usedFor.includes("Envelope"))))];          

      res.json({
          cardTypes,
          cycles,
          cardSizes,
          usedFors,
      });

  } catch (error) {
      console.error("Error fetching filter options:", error);
      res.status(500).json({ message: "Error calculating filter options" });
  }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});