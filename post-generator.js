const fs = require('fs');

function cycleToNumber(cycleStr) {
  const convert = {
    "Cycle I": 1,
    "Cycle II": 2,
    "Cycle III": 3,
    "Cycle IV": 4,
    "Cycle V": 5,
    "Mnestis Theatre": "Unknown - Theatre",
  }

  return convert[cycleStr] || "N/A"
}

function createPost({ day }) {
  fs.readFile('./data/JSON/gearData.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const gearCards = JSON.parse(data);
    const sortedGearCards = [...gearCards].sort((a, b) =>
      parseInt(a.cardIDs[0].slice(2), 10) - parseInt(b.cardIDs[0].slice(2), 10)
    );
    const todaysCard = sortedGearCards[day - 1]

    const gearType = todaysCard.slot.includes("Hand") ? "Weapon" : todaysCard.slot
    const defStats = todaysCard.defensiveStatistics.map((stat) => `* ${stat.type} ${stat.amount}`).join("\n")
    const abilities = todaysCard.abilities.map(
      (sentence) => {
        let output = "* "
        output = output + (sentence.costs ? sentence.costs.join(" ") + " " : "")
        output = output + sentence.abilityText.map((ability) => ability.value).join("")
        return output
      }).join("\n")

    console.log(`
Day ${day} 

>>> __**${todaysCard.name}**__
**Power Level**: ${cycleToNumber(todaysCard.cycle)}
**Power Tier**: -

**Gear type**: ${gearType}
**Slots used**: ${todaysCard.slot}
__Offensive Statistics__:
${Object.keys(todaysCard.offensiveStatistics).length > 0 ?
        `* **Attack Dice**: ${todaysCard.offensiveStatistics.attackDice}
* **To-Hit bonus**: ${todaysCard.offensiveStatistics.precision}
* **Power dice**: ${JSON.stringify(todaysCard.offensiveStatistics.power)}` :
        "* None"
      }

__Defensive Statistics__:
${defStats || "* None"}

__Abilities__:
${abilities || "* None"}

**Flavor Text**: *${todaysCard.flavor}*
**Traits**: ${todaysCard.traits.join(", ")}

`)
  });
}

createPost({ day: 78 })
