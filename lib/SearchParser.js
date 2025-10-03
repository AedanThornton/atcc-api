const parseSearch = (item, searchTerm) => {
    // Convert search term to lowercase for case-insensitive matching
    searchTerm = searchTerm.toLowerCase();

    // Split by OR groupings
    const groups = searchTerm.split("||").map(group => group.trim())

    return groups.some(group => {
        // Extracting prefixed search terms (e.g., "id:", "traits:")
        const terms = group.split(",");
        const filters = { any: null, id: null, traits: null, slot: null, name: [] };

        terms.forEach(term => {
            term = term.trim() 
            const [key, value] = term.split(":");
            if (filters.hasOwnProperty(key)) {
                filters[key] = value;
            } else {
                filters.name.push(term); // Non-prefixed terms are treated as name search
            }
        });

        // Deep search helper function
        const deepSearch = (obj, query) => {
            if (typeof obj === "string") return obj.toLowerCase().includes(query);
            if (Array.isArray(obj)) return obj.some(item => deepSearch(item, query));
            if (obj && typeof obj === "object") return Object.values(obj).some(value => deepSearch(value, query));
            return false;
        };

        // -- Apply filters --
        // Returns 'true' if a card meets all requirements
        // (true if no content || doesn't run)
        // (false if content || true if content matches card)
        return (!filters.any || deepSearch(item, filters.any)) &&
            (!filters.id || item.cardIDs.some(cardID => cardID.toLowerCase().includes(filters.id))) &&
            (!filters.traits || item.traits?.some(trait => trait.toLowerCase().includes(filters.traits))) &&
            (!filters.slot || item.slot?.toLowerCase().includes(filters.slot)) &&
            (!filters.name.length || filters.name.every(term => item.name.toLowerCase().includes(term) || item.name2?.toLowerCase().includes(term)));
    });
}

// Export the function to make it available elsewhere
module.exports = {
    parseSearch
};