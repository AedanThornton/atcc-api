import csv
import json
import re

def parseRecipes(recipes_string):
    recipes_components = recipes_string.split("|")

    parsed_recipes = []
    for item in range(0, len(recipes_components), 2):
        parsed_recipes.append({})

    for component in recipes_components:
        gear_match = re.compile(r'gear(\d)\=(.*)').match(component)
        ingredients_match = re.compile(r'ingredients(\d)\=(.*)').match(component)

        if gear_match:
            number, name = gear_match.groups()
            parsed_recipes[int(number) - 1]["name"] = name
        elif ingredients_match:
            number, ingredients = ingredients_match.groups()

            ingredient_list = []
            for ingredient in ingredients.split(','):
                new_ingredient = {}
                ingredient_match = re.compile(r'(\d+)x\s?(.*)').match(ingredient)

                if ingredient_match:
                    count, name = ingredient_match.groups()
                    new_ingredient = {"count": int(count), "name": name}

                    unique_match = re.compile(r'\[\[(.*)\]\]').match(name)
                    if unique_match:
                        new_ingredient["name"] = unique_match.groups()[0]
                        new_ingredient["type"] = "gear"
                    else:
                        new_ingredient["type"] = "resource"

                    ingredient_list.append(new_ingredient)

            parsed_recipes[int(number) - 1]["ingredients"] = ingredient_list

    return parsed_recipes

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
                "cycle": row["Cycle"],
                "cardSize": row["Card Size"],
                "foundIn": row["Found In"],
                "techType": row["Tech Type"],
                "techSubType": row["Tech Sub-Type"],
                "flavorProject": row["Flavor (Project)"],
                "requirements": row["Requirements"].split(", ") or [],
                "leadsTo": row["Leads To"].split(", ") or [],
                "flavorTech": row["Flavor (Tech)"],
                "facilityName": row["Facility Name"],
                "recipes": parseRecipes(row["Recipes"]),
                "faq": row["FAQ"],
                "errata": row["Errata"]
            }
            output.append(card_json)
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)

csv_to_json("./data/CSV/productionFacilityData.csv", "./data/JSON/productionFacilityData.json")