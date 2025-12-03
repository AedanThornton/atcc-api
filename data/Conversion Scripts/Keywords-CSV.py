import json
import csv
from lib.parseFunctions import parse_abilities

def csv_to_json(csv_file, json_file):
    """Converts CSV data to JSON."""
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file, delimiter=',', quotechar='"')
        output = {}
        for row in reader:
            output[row["Name"]] = parse_abilities(row["Effects"])[0]
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)

#csv_to_json("./data/CSV/titanAbilityData.csv", "./data/JSON/titanAbilityData.json")
csv_to_json("./data/CSV/primordialAbilityData.csv", "./data/JSON/primordialAbilityData.json")