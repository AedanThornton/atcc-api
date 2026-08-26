const { sign } = require('crypto');
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

function getType(card, side = "") {
  return card["slot" + side].includes("Hand") ? "Weapon" : card["slot" + side]
}

function getDStats(card, side = "") {
  return card["defensiveStatistics" + side].map((stat) => `* ${stat.type} ${stat.amount}`).join("\n")
}

function getAbilities(card, side = "") {
  return card["abilities" + side].map(
    (sentence) => {
      let output = "* "
      output = output + (sentence.costs ? sentence.costs.join(" ") + " " : "")
      output = output + sentence.abilityText.map((ability) => ability.value).join("")
      return output
    }).join("\n")
}

function getGatedAbilities(card, side = "") {
  return card["gatedAbilities" + side].map(
    (gatedAbility) => {
      let output = "* <" + gatedAbility.gate + " / " + gatedAbility.value + "> "
      output = output + gatedAbility.abilities.map((sentence) => {
        let output = ""
        output = output + (sentence.costs ? sentence.costs.join(" ") + " " : "")
        output = output + sentence.abilityText.map((ability) => ability.value).join("")
        return output
      }).join(". ")
      return output
    }).join("\n")
}

function getTraumaTable(card) {
  return card.traumaTable.map((row) => {
    return `${row.type} ${row.range}`
  }).join(", ")
}

function getKratosTable(card) {
  return card.kratosTable.map((row, i) => {
    return i + ". " + row.map((group) => {
      return group.map((ability) => {
        return `${ability.name}${ability.x_value ? ` ${ability.x_value}` : ""}`
      }).join(" + ")
    }).join(" OR ") + "\n"
  }).join("")
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
    const isTransforming = !!todaysCard.transformsInto

    console.log(`
Day ${day} 

>>> __**${todaysCard.name}**__
**Acquired From**: ${todaysCard.acquisition}
**Power Level**: ${cycleToNumber(todaysCard.cycle)}
**Power Tier**: -

**Gear type**: ${getType(todaysCard)}
**Slots used**: ${todaysCard.slot}
__Offensive Statistics__:
${Object.keys(todaysCard.offensiveStatistics).length > 0 ?
        `* **Attack Dice**: ${todaysCard.offensiveStatistics.attackDice}
* **To-Hit bonus**: ${todaysCard.offensiveStatistics.precision}
* **Power dice**: ${JSON.stringify(todaysCard.offensiveStatistics.power)}` :
        "* None"
      }

__Defensive Statistics__:
${getDStats(todaysCard) || "* None"}

__Abilities__:
${getAbilities(todaysCard) || "* None"}${"\n" + getGatedAbilities(todaysCard) || ""}

${!isTransforming ? `**Flavor Text**: *${todaysCard.flavor}*`: ""}
**Traits**: ${todaysCard.traits.join(", ")}

${isTransforming ? `
__**${todaysCard.name2}**__
**Gear type**: ${getType(todaysCard, "2")}
**Slots used**: ${todaysCard.slot2}
__Offensive Statistics__:
${Object.keys(todaysCard.offensiveStatistics).length > 0 ?
        `* **Attack Dice**: ${todaysCard.offensiveStatistics2.attackDice}
* **To-Hit bonus**: ${todaysCard.offensiveStatistics2.precision}
* **Power dice**: ${JSON.stringify(todaysCard.offensiveStatistics2.power)}` :
        "* None"
      }

__Defensive Statistics__:
${getDStats(todaysCard, "2") || "* None"}

__Abilities__:
${getAbilities(todaysCard, "2") || "* None"}${"\n" + getGatedAbilities(todaysCard, "2") || ""}

**Traits**: ${todaysCard.traits2.join(", ")}
  
  `: ""}
`)
  });
}

function createTitanPost({ day }) {
  fs.readFile('./data/JSON/titanData.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const titanCards = JSON.parse(data);
    const sortedTitanCards = [...titanCards].sort((a, b) =>
      parseInt(a.cardIDs[0].slice(2), 10) - parseInt(b.cardIDs[0].slice(2), 10)
    );
    const todaysCard = sortedTitanCards[day - 1]

    console.log(`
Bonus Analysis ${day} 

>>> __**${todaysCard.name}**__
**Acquired From**: Crafting, Hub Reward
**Power Level**: ${cycleToNumber(todaysCard.cycle)}

__Trauma Table__:
${getTraumaTable(todaysCard)}

__Kratos Table__:
${getKratosTable(todaysCard)}

__Power Die__: ${todaysCard.titanPower}

__Abilities__:
${getAbilities(todaysCard) || "* None"}
  
`)
  });
}

const args = process.argv.slice(2);
console.log(args); // ['hello', 'world']

if (args[0] === "titan") {
  createTitanPost({ day: args[1] })
} else if (args[0] === "gear") {
  createPost({ day: args[1] })
} else {
  console.log("Invalid type: \"", args[0], "\"")
  return
}