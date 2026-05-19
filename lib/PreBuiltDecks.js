const buildDeckFilters = ({ deckType, deckName, deckVariant }) => {
  //Primordial, Primordial name, AI/BP, AI/BP lvl
  if (deckType === "primordial") {
    if (deckName === "dahaka") {
      return {
        "categoryFilter": card => card.usedFor?.toLowerCase() !== deckName ? false : true,
        "deckFilter": card => card.Attack?.level !== "I" ? false : true,
        "cardPoolFilters": [
          {
            "name": "Level 2",
            "poolFilter": card => card.Attack?.level !== "II" ? false : true
          },
          {
            "name": "Level 3",
            "poolFilter": card => card.Attack?.level !== "III" ? false : true
          },
          {
            "name": "Other",
            "poolFilter": (
              card => {
                if (card.cardType !== "AI" && card.cardType !== "BP") return true
                if (card.level !== "I" && card.level !== "II" && card.level !== "III") return true
                return false})
          }
        ]
      }
    }
    return {
      "categoryFilter": (
        card => {
          if (card.usedFor?.toLowerCase() !== deckName) return false;
          if (card.cardType?.toLowerCase() !== deckVariant) return false;
          return true}),
      "deckFilter": card => card.level !== "I" ? false : true,
      "cardPoolFilters": [
        {
          "name": "Level 2",
          "poolFilter": card => card.level !== "II" ? false : true
        },
        {
          "name": "Level 3",
          "poolFilter": card => card.level !== "III" ? false : true
        },
        {
          "name": "Other",
          "poolFilter": (
            card => {
              if (card.level !== "I" && card.level !== "II" && card.level !== "III") return true
              return false})
        }
      ]
    }
  }

  //Exploration, Cycle, Include extras, Acclimation
  if (deckType === "exploration") {
    return {
      "categoryFilter": card => {
        if (card.cardType?.toLowerCase() !== "exploration") return false
        if (card.cycle?.toLowerCase() !== deckName) return false
        return true},
      "deckFilter": card => {
        if (card.acclimation?.toLowerCase() === "all") return true
        if (!card.acclimation?.toLowerCase().includes(deckVariant)) return false
        return true},
      "cardPoolFilters": [
        {
          "name": "Extras",
          "poolFilter": (
            card => {
              if (card.acclimation?.toLowerCase() === "other") return true
              return false})
        }
      ]
    }
  }

  return null
}

// Export the function to make it available elsewhere
module.exports = {
  buildDeckFilters
};