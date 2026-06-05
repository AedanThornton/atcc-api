const parseSearch = (item, searchTerm) => {
    // Convert search term to lowercase for case-insensitive matching
    searchTerm = searchTerm.toLowerCase();

    // Split by OR groupings
    const groups = searchTerm.split("||").map(group => group.trim())

    return groups.some(group => {
        // Extracting prefixed search terms (e.g., "id:", "traits:")
        const terms = group.split(",");
        const filters = { any: null, has: null, id: null, traits: null, slot: null, usedfor: null, name: [] };

        terms.forEach(term => {
            term = term.trim() 
            const [key, value] = term.split(":");
            if (value && filters.hasOwnProperty(key)) {
                filters[key] = value.trim();
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

        const keywordSearch = (obj, query) => {
            if (obj && typeof obj === "object") {
                //Abilities
                let abilityMatch = false
                if (obj.abilities || obj.gatedAbilities) {
                    const inAbilities = obj.abilities?.some(ability => ability.abilityText?.some(textPart => textPart.type === "keyword" && textPart.value.toLowerCase().includes(query)))
                    const inGatedAbilities = obj.gatedAbilities?.some(gate => gate.abilities.some(ability => ability.abilityText?.some(textPart => textPart.type === "keyword" && textPart.value.toLowerCase().includes(query))))
                    abilityMatch = (inAbilities || inGatedAbilities)
                }
                //Kratos Tables
                let kratosMatch = false
                if (obj.kratosTable) {
                    kratosMatch = deepSearch(obj.kratosTable, query)
                }

                return (abilityMatch || kratosMatch)
            }
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
            (!filters.usedfor || item.usedFor?.toLowerCase().includes(filters.usedfor)) &&
            (!filters.name.length || filters.name.every(term => item.name.toLowerCase().includes(term) || item.name2?.toLowerCase().includes(term))) &&
            (!filters.has || keywordSearch(item, filters.has));
    });
}

module.exports = {
    parseSearch
};