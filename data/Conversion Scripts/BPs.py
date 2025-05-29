import csv
import json
import re

def parseResources(resources_string):
    parsed_resources = []
    resource_list = resources_string.split(".")
    resource_pattern = re.compile(r'\s*(\d)\s*([\w\s]+)')

    for resource in resource_list:
        resource_match = re.match(resource_pattern, resource)

        if resource_match:
            count, name = resource_match.groups()

            resource_json = {
                "count": count,
                "name": name
            }

            parsed_resources.append(resource_json)

    return parsed_resources

def parseResponses(responses_string):
    parse_responses = []
    responses_list = responses_string.split(":")

    for response in responses_list:
        response_type, response_effects_list = response.split(" ", 1)
        response_effects = []

        for effect in response_effects_list.split(". "):
            effect = re.sub("\.", "", effect) #remove hanging periods
            
            if effect.startswith("WoO"):
                response_effects.append({
                    "effect": " ".join(effect.split(" ")[1:]),
                    "WoO": True
                })
            else:
              response_effects.append({
                    "effect": effect
                })
              
        parse_responses.append({
            "type": response_type,
            "effects": response_effects
        })

    return parse_responses

def csv_to_json(csv_file, json_file):
    """Converts CSV data to JSON."""
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file, delimiter=',', quotechar='"')
        output = []
        for row in reader:
            resources = parseResources(row["Resources"])
            responses = parseResponses(row["Responses"])

            card_json = {
                "cardIDs": row["Card ID"].split(", "),
                "name": row["Name"],
                "cardType": row["Card Type"],
                "game": row["Game"],
                "cycle": row["Cycle"],
                "cardSize": row["Card Size"],
                "foundIn": row["Found In"],
                "usedFor": row["Used For"],
                "level": row["BP Level"],
                "type": row["AT/GT?"],
                "value": row["AT/GT"],
                "resources": resources,
                "nonResponseText": row["Non-Response Text"],
                "responses": responses,
                "critFlavor": row["Crit Lore"],
                "critResponse": row["Crit Response"],
                "faq": row["FAQ"],
                "errata": row["Errata"]
            }

            if not row["Found In"]:
                card_json.pop("foundIn")

            output.append(card_json)
    
    with open(json_file, "w", encoding="utf-8") as outfile:
        json.dump(output, outfile, indent=2)

csv_to_json("./data/CSV/BPData.csv", "./data/JSON/BPData.json")