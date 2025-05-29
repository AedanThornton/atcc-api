const sortCards = (unsorted, sortTerms) => {
    const sortCriteria = sortTerms.split(',').map(criterion => {
        const splitTerm = criterion.split(':');
        let field = splitTerm[0];
        let direction = splitTerm[1] || "asc";
        if (field === "id") field = "cardIDs";
        
        return { field, direction: direction.toLowerCase() };
    });

    if (sortCriteria.length > 0) {
        return unsorted.sort((a, b) => {
            for (const { field, direction } of sortCriteria) {
                // Handle potential undefined values in card fields for sorting
                const valA = a[field] === undefined || a[field] === null ? '' : String(a[field]).toLowerCase();
                const valB = b[field] === undefined || b[field] === null ? '' : String(b[field]).toLowerCase();
                const numA = parseFloat(a[field]); // For numeric sort attempt
                const numB = parseFloat(b[field]);

                let comparison = 0;

                // Attempt numeric comparison if both are numbers
                if (!isNaN(numA) && !isNaN(numB)) {
                    comparison = numA - numB;
                } else { // Otherwise, string locale comparison
                    comparison = valA.localeCompare(valB);
                }

                if (comparison !== 0) {
                    return direction === 'desc' ? comparison * -1 : comparison;
                }
            }
            return 0; // Equal if all criteria match
        });
    }
}

// Export the function to make it available elsewhere
module.exports = {
    sortCards
};