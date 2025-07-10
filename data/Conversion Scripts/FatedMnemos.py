import csv
import json
import re

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
                "effect": row["Effect"],
                "growthName": row["Growth Name"],
                "growthAbility": row["Growth Ability"],
                "stats": row["Stat"].split(", "),
                "faq": row["FAQ"],
                "errata": row["Errata"]
            }

            output.append(card_json)
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)

csv_to_json("./data/CSV/fatedMnemosData.csv", "./data/JSON/fatedMnemosData.json")