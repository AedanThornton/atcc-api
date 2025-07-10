import csv
import json
import re

ability_types = [
    "Permanent", "Save", "City Negotiation", "Reference", "Immediate"
]

def parse_abilities(raw_abilities):
    abilities = raw_abilities.split("$")
    ability_json = []

    for ability in abilities:
        name = ability.split(":")[0]
        ability_def = ": ".join(ability.split(": ")[1:])
        ability_type = ability_def.split(". ")[0]
        if ability_type in ability_types:
            effects = ability_def.split(". ")[1:]
        else:
            ability_type = ""
            effects = ability_def

        ability_json.append({
            "name": name,
            "type": ability_type,
            "effects": effects
        })

    return ability_json

def csv_to_json(csv_file, json_file):
    """Converts CSV data to JSON."""
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file, delimiter=',', quotechar='"')
        output = []
        for row in reader:
            card_json = {
                "cardIDs": row["Card ID"].split(", "),
                "name": row["Name"],
                "altname": row["Alternate Name"],
                "cardType": row["Card Type"],
                "game": row["Game"],
                "cycle": row["Cycle"],
                "cardSize": row["Card Size"],
                "foundIn": row["Found In"],
                "techType": row["Tech Type"],
                "techSubType": row["Tech Sub-Type"],
                "locked": row["Cycle-locked?"],
                "flavorProject": row["Flavor (Project)"],
                "requirements": row["Requirements"].split(", ") or [],
                "leadsTo": row["Leads To"].split(", ") or [],
                "flavorTech": row["Flavor (Tech)"],
                "abilities": parse_abilities(row["Abilities"]),
                "faq": row["FAQ"],
                "errata": row["Errata"]
            }

            if not row["Found In"]:
                card_json.pop("foundIn")

            output.append(card_json)
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)

csv_to_json("./data/CSV/structural.csv", "./data/JSON/structural.json")