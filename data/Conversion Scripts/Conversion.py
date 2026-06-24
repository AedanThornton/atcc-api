import csv
import json
import os
import ast
from lib.rowTypes import *

with open("./data/Conversion Scripts/lib/rowTypes.py") as f:
    tree = ast.parse(f.read())

func_names = [node.name for node in tree.body if isinstance(node, ast.FunctionDef)]
card_types = {name.split("_row")[0]: globals()[name] for name in func_names if name in globals()}

def default_row(row):
    card_json = {
        "cardIDs": row["Card ID"].split(", "),
        "name": row["Name"],
        "renderType": row["Render Type"],
        "cardType": row["Card Type"] if "Card Type" in row else row["Render Type"],
        "game": row["Game"],
        "cycle": row["Cycle"],
        "cardSize": row["Card Size"],
        "foundIn": row["Found In"] if "Found In" in row else "",
        "faq": [],
        "errata": {}
    }

    for faq in row["FAQ"].split("; "):
        card_json["faq"] = card_json["faq"] + parse_abilities(faq)

    if "V 1.1 Updates" in row and row["V 1.1 Updates"] != "":
        card_json["errata"]["v1.1"] = parse_abilities(row["V 1.1 Updates"])
    if "V 1.2 Updates" in row and row["V 1.2 Updates"] != "":
        card_json["errata"]["v1.2"] = parse_abilities(row["V 1.2 Updates"])

    if card_json["foundIn"] == "":
        card_json.pop("foundIn")
    elif card_json["foundIn"].startswith("Secret Deck"):
        card_json["secretCardNumber"] = row["Secret Card#"]

    return card_json

def csv_to_json(csv_file, json_file, row_type):
    """Converts CSV data to JSON."""
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file, delimiter=',', quotechar='"')
        output = []
        for row in reader:
            default_json = default_row(row)
            type_json = card_types[row_type](row)
            output.append(default_json | type_json)
        
        #adjust for double-sided cards
        new_output = []
        processed = set()

        for card in output:
            if id(card) in processed:
                continue

            card_ids = card.get("cardIDs")

            if card_ids is not None:
                flipside = next(
                    (
                        item
                        for item in output
                        if item is not card
                        and item.get("cardIDs") == card_ids
                    ),
                    None,
                )

                if flipside:
                    card_copy = card.copy()

                    for key, value in flipside.items():
                        card_copy[f"{key}2"] = value

                    new_output.append(card_copy)

                    processed.add(id(card))
                    processed.add(id(flipside))
                    continue

            new_output.append(card)
            processed.add(id(card))

        output = new_output


    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)


filenames = [f.split('.')[0] for f in os.listdir("./data/CSV")]
for file in filenames:
    if not "{}_row".format(file.split("Data")[0]) in func_names: continue 

    print(file)
    csv_to_json("./data/CSV/{}.csv".format(file), "./data/JSON/{}.json".format(file), file.split("Data")[0])