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
                "foundIn": row["Found In"],
                "effects": row["Effects"],
                "number": int(row["Number"]) if row["Number"] else "",
                "adversaryTriggers": row["Adversary Triggers"],
                "stackType": row["Stack Type"],
                "removeEffect": row["Remove Effect"],
                "acclimation": row["Acclimation"],
                "faq": row["FAQ"],
                "errata": row["Errata"]
            }

            if not row["Number"]:
                card_json.pop("number")
            if not row["Adversary Triggers"]:
                card_json.pop("adversaryTriggers")

            output.append(card_json)
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)

csv_to_json("./data/CSV/explorationData.csv", "./data/JSON/explorationData.json")