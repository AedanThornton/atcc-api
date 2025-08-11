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
        "cardType": row["Card Type"],
        "game": row["Game"],
        "cycle": row["Cycle"],
        "cardSize": row["Card Size"],
        "foundIn": row["Found In"] if "Found In" in row else "",
        "faq": row["FAQ"],
        "errata": row["Errata"]
    }

    if card_json["foundIn"] == "":
        card_json.pop("foundIn")

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
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)


filenames = [f.split('.')[0] for f in os.listdir("./data/CSV")]
for file in filenames:
    if not "{}_row".format(file.split("Data")[0]) in func_names: continue 

    print(file)
    csv_to_json("./data/CSV/{}.csv".format(file), "./data/JSON/{}.json".format(file), file.split("Data")[0])