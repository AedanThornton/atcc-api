const buildDeckFilters = ({ deckType, deckName, deckVariant, deckLevel }) => {
  //Primordial, Primordial name, AI/BP, AI/BP lvl
  if (deckType === "primordial") {
    if (deckName === "dahaka") {
      return (card => {
        if (card.usedFor.toLowerCase() !== deckName) return false
        //skip AI/BP classification because they're the same
        if (deckVariant === "ai" && card.Attack?.level.toLowerCase() !== deckLevel) return false
        if (deckVariant === "bp" && card.BP?.level.toLowerCase() !== deckLevel) return false

        return true
      })
    }
    return (card => {
      if (card.cardType?.toLowerCase() !== deckVariant) return false
      if (card.usedFor?.toLowerCase() !== deckName) return false
      if (card.level?.toLowerCase() !== deckLevel) return false

      return true
    })
  }

  //Exploration, Cycle, Include extras, Acclimation
  if (deckType === "exploration") {
    return (card => {
      if (card.cardType?.toLowerCase() !== "exploration") return false
      if (card.cycle?.toLowerCase() !== deckName) return false

      if (card.acclimation?.toLowerCase() === "all") return true
      if (deckVariant && card.acclimation?.toLowerCase() === "other") return true
      if (card.acclimation?.toLowerCase().includes(deckLevel)) return false
      
      return true
    })
  }

  return null
}

// Export the function to make it available elsewhere
module.exports = {
  buildDeckFilters
};