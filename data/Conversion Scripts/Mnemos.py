import csv
import json
import re

KEYWORDS = {
    "Ambrosia Limit", "Armor-Piercing", "Armor Re-roll", "Assist", "Attack Reroll", "Auto-black", "Auto-break", "Auto-inspire", 
    "Awakening Lock", "Black", "Bleeding", "Bleeding Limit", "Block", "Break", "Burden", "Burn", "Bypass", "Carving", 
    "Closing", "Clutch", "Combo-Breaker: X spaces", "Self Combo-Breaker: X spaces", "Commit (X)", "Commit", "Consume", "Crash", "Cryptex Loathing", 
    "Cumbersome", "Cursed", "Daze", "Deadly", "Death", "Defy", "Displace", "Diversion", "Dodge", "Doomed", "Double Commit", "Elation", 
    "Escalate", "Evolving", "Fire", "Float", "Frontlines", "Glaciate", "Giant Glaciate", "Greater Pass", "Hardened", 
    "Heal", "Heartseeker", "Hermes Move", "Hermes Reflex", "Advanced Hermes Reflex", "Hermes Resposition", "Hide", "Hope", 
    "Incinerated", "Inspire", "Jump", "Advanced Jump", "Knockback", "Knockdown", "Laser Resistance", "Lifeline", "Light", 
    "Lumbering", "Masterwork", "Midas", "Midas Immune", "Motivate", "Opening", "Overbreak", "Pass", "Perishable", "Precise", 
    "Provoke", "Pole Position", "Power Re-roll", "Pull", "Pursuit", "Pushback", "Quantum", "Ranged", "Reach", "Reduction", 
    "Wish Away Reduction", "Pushback Reduction", "Knockback Reduction", "Kickback Reduction", "Pull Reduction", "Reflex", 
    "Advanced Reflex", "Superior Reflex", "Reinforce", "Advanced Reinforce", "Superior Reinforce", "Reposition", "Restricted (Trait)", 
    "Rewind", "Rocksteady", "Rollout", "Rouse", "Rush", "Improved Rush", "Sacrifice", "Scale", "Second Chance", "Shaded", 
    "Solace", "Spiral", "Spotlight", "Stalwart", "Startup", "Strikeback", "Succor", "Super Smart Delivery", "Superior Chance", 
    "BP Suppress", "AI Suppress", "Temporal Reflex", "Time-Clocked", "Tireless", "Titan Possession", "Argonaut Possession", "Transform", 
    "Trauma Trick", "Wound Trick", "Fail Trick", "Tumble", "Unburden", "Unholy Alchemy", "Reverse Unholy Alchemy", "Vault", "Forced Vault", 
    "Voluntary Knockdown", "Wish Armor", "Wish Away", "Wishcursed", "Wish Dodge", "Advanced Wish Dodge", "Wishrod"
}

KEYWORDS_WITH_COST_NAME = {
    "Fate Armor"
}

COSTS = {
    "Fate", "Danger", "Exhaust", "Discard", "MidasToken", "Energy", "AmbrosiaToken", "CombatAction", "MovementAction", "FireToken"
}

TIMINGS = {
    "Reaction", "Wound", "Crit Miss", "Crit Evade Fail", "Crit Chance", "Crit Evade", "Full Evade", "Full Hit", "Full Miss", "Each Hit", "Sunstarved", "Start of Battle", "Start of your turn"
}

def parse_abilities(ability_box):
    """Parses the ability box."""
    new_ability_list = []
    gate_ability_list = []
    ability_list = re.split(r"\.\s?", ability_box)
    if ability_list[-1] == "":
        ability_list = ability_list[:-1] 
    gate_pattern = re.compile(r"(\w+) (\d\+) (.*)")
    x_pattern = re.compile(r"^([\w\s:\+,\-']+?)(?:\s+([\dX\-]+))?$")

    parsing_gate_abilities = False
    gated_ability = []
    last_gate_json = {}

    for ability in ability_list:
        if ability == "Unique" or ability == "Ascended": continue
        gate_match = gate_pattern.match(ability)
        if gate_match:
            gate_type, gate_value, ability_name = gate_match.groups()
            parsing_gate_abilities = True
        else: ability_name = ability
            
        keyword_match = x_pattern.match(ability_name)

        effect, x_value = keyword_match.groups() if (keyword_match and keyword_match.groups()[0] in KEYWORDS) else (ability_name, None)

        costs = []
        timing = ""
        timingAfter = False
        flavorName = ""
        words = effect.split()
        colon_timings = effect.split(":")
        if words[0] in TIMINGS:
            timing = words[0]
            words.remove(words[0])
        for word in words[:]:
            if word in COSTS:
                costs.append(word)
                words.remove(word)
            else: break
        colon_timings = " ".join(words).split(":")
        if words[0] in TIMINGS:
            timing = words[0]
            timingAfter = True
            words.remove(words[0])
        if len(colon_timings) > 1:
            if colon_timings[0] in TIMINGS:
                timing = colon_timings[0]
                words = ":".join(colon_timings).replace(colon_timings[0] + ": ", "").split()
            elif len(colon_timings[0]) < 20:
                flavorName = colon_timings[0]
                words = ":".join(colon_timings).replace(colon_timings[0] + ": ", "").split()

        name = " ".join(words)
                

        ability_json = {}
        ability_json["name"] = name
        if flavorName:
            ability_json["flavorName"] = flavorName
        if x_value:
            y_pattern = re.compile(r"(\d)\-(\d)")
            y_match = y_pattern.match(x_value)
            y, x = y_match.groups() if y_match else (None, x_value)
            if y_match:
                ability_json["y_value"] = int(y)
                ability_json["x_value"] = int(x)
            else:
                ability_json["x_value"] = int(x)
        if costs != []:
            ability_json["costs"] = costs
        if timing != "":
            ability_json["timing"] = timing
        if timingAfter:
            ability_json["timingAfter"] = True

        if name in KEYWORDS:
            ability_json["type"] = "keyword"
        else:
            ability_json["type"] = "unique"

        gate_json = {}
        if gate_match:
            gate_json["gate"] = gate_type
            gate_json["value"] = gate_value
        
        if parsing_gate_abilities:
            if gate_match:
                if last_gate_json:
                    last_gate_json["abilities"] = gated_ability
                    gate_ability_list.append(last_gate_json)
                    last_gate_json = {}
                    gated_ability = []  
                last_gate_json = gate_json
            gated_ability.append(ability_json)
        else: 
            new_ability_list.append(ability_json)

    if last_gate_json: 
        last_gate_json["abilities"] = gated_ability
        gate_ability_list.append(last_gate_json)

    full_ability_list = new_ability_list + gate_ability_list
    return full_ability_list

def csv_to_json(csv_file, json_file):
    """Converts CSV data to JSON."""
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file, delimiter=',', quotechar='"')
        output = []
        for row in reader:
            card_json = {
                "cardIDs": row["Card ID"].split(", "),
                "name": row["Name"],
                "cardType": row["Card Type"],
                "game": row["Game"],
                "cardSize": row["Card Size"],
                "cycle": row["Cycle"],
                "flavor": row["Flavor"],
                "traits": row["Traits"].split(", "),
                "abilities": [parse_abilities(row["Ability 1"]), parse_abilities(row["Ability 2"]), parse_abilities(row["Ability 3"])],
                "stats": row["Stat"].split(", "),
                "faq": row["FAQ"],
                "errata": row["Errata"]
            }

            output.append(card_json)
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)

csv_to_json("./data/CSV/mnemosData.csv", "./data/JSON/mnemosData.json")