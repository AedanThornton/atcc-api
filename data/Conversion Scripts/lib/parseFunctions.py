import re
from lib.staticVars import *

def parse_power(power_str):
    powers = []
    for part in power_str.split(". "):
        gate_match = re.match(r"(\w+ \d+\+)\s*(\+?)(\d+\s*\w+(?:,\s*\d+\s*\w+)*)", part)
        hits_match = re.match(r"(\d+\+) Hits\s*(\+?)(\d+\s*\w+(?:,\s*\d+\s*\w+)*)", part)
        match = re.match(r"(\+?)(\d+\s*\w+(?:,\s*\d+\s*\w+)*)", part)

        gate_type, plus, hits, dice_string = "", False, "", ""
        if gate_match:
            gate_type, plus, dice_string = gate_match.groups()
        elif hits_match:
            hits, plus, dice_string = hits_match.groups()
        elif match:
            plus, dice_string = match.groups()

        dice_list = []
        if dice_string:
            for dice in dice_string.split(", "):
                count, die_type = dice.split(" ")
                for x in range(0,int(count)):
                    dice_list.append(die_type)

        power = {"type": dice_list}
        if (gate_match or hits_match): 
            if (hits):
                power["gate"] = {"type": "Hits", "value": hits}
            else:
                power["gate"] = {"type": gate_type.split()[0], "value": gate_type.split()[1]}
        if (plus):
            power["plus"] = True

        powers.append(power)

    return powers

def parse_armor(armor_str):
    armor = []
    for part in armor_str.split(". "):
        match = re.match(r"(\d+)\s*(\w+)", part)
        if match:
            amount, die_type = match.groups()
            armor.append({
                "amount": int(amount),
                "type": die_type
            })
    return armor

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
    return new_ability_list, gate_ability_list

def parse_abilities_block(raw_abilities):
    abilities = raw_abilities.split("$")
    if len(abilities) < 2:
        abilities = raw_abilities.split("; ")
    ability_json = []

    for ability in abilities:
        name = ability.split(":")[0]
        ability_def = ": ".join(ability.split(": ")[1:])

        attack_ability_match = re.match(r'{([^\}]+)}\s*(.*)', ability_def)
        dice, precision, power_dice = "", "", ""
        if attack_ability_match:
            attack, ability_def = attack_ability_match.groups()
            attack_spread = attack.split(", ")
            if len(attack_spread) == 3:
                dice, precision, power = attack_spread
                power_spread = power.split(" ")
                if len(power_spread) == 2:
                    power_dice = int(power_spread[0]) * [power_spread[1]]
                else: 
                    power_dice = [power_spread]

        ability_type = ability_def.split(". ")[0]
        if ability_type in STRUCTURAL_TYPES:
            effects = ability_def.split(". ")[1:]
        else:
            ability_type = ""
            effects = ability_def

        new_json = {
            "name": name,
            "type": ability_type,
            "effects": effects
        }

        if not new_json["type"]: new_json.pop("type")
        if dice:
            new_json["attack"] = {
                "attackDice": dice,
                "precision": precision,
                "power": [{"type": power_dice}]
            }
        
        ability_json.append(new_json)

    return ability_json

def parse_recipes(recipes_string):
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

def parse_argo_abilities(raw_abilities):
    abilities = raw_abilities.split("; ")
    ability_json = []

    for ability in abilities:
        name_split = ability.split(":: ")
        ability_obj = {}

        if len(name_split) > 1:
            ability_obj["name"] = name_split[0]
            ability_obj["effects"] = name_split[1].split("\\n")
        else:
            ability_obj["effects"] = name_split[0].split("\\n")

        ability_json.append(ability_obj)

    return ability_json

def parse_resources(resources_string):
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

def parse_responses(responses_string):
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

def parse_kratos(table):
    if not table:
        return []

    parsed_table = []
    x_pattern = re.compile(r"^([\w\s:\+,\-']+?)(?:\s+([\dX\-]+))?$")

    rage_tiers = re.split(r"\. ", table)
    for tier in rage_tiers:
        options = re.split(r" or ", re.sub(r"\.", "", tier[2:]))
        parsed_tier = []
        for option in options:
            keywords = re.split(r" and ", option)
            parsed_option = []
            for keyword in keywords:
                x_match = re.match(x_pattern, keyword)
                parsed_keywords = {}
                name, x_value = x_match.groups()
                parsed_keywords["name"] = name
                if x_value:
                    parsed_keywords["x_value"] = x_value
                parsed_option.append(parsed_keywords) 
            parsed_tier.append(parsed_option) 
        parsed_table.append(parsed_tier)                
                

    return parsed_table

def parse_trauma(table):
    if not table:
        return []

    parsed_table = []
    range_pattern = re.compile(r"(\d+)\-(\d+)")

    trauma_tiers = re.split(r"\, ", table)
    for tier in trauma_tiers:
        parsed_tier = {}
        if tier[:2] == "Mi":
            parsed_tier["type"] = "Minor"
        if tier[:2] == "Ma":
            parsed_tier["type"] = "Major"
        if tier[0] == "G":
            parsed_tier["type"] = "Grave"
        if tier[0] == "O":
            parsed_tier["type"] = "Obol"

        parsed_tier["range"] = re.split(r" ", tier)[1]
        parsed_table.append(parsed_tier)
                

    return parsed_table

def parse_consequences(consequences):
    """Parses the Attack Consequences."""
    consequences_list = re.split(r"\.\s?", consequences)
    if len(consequences_list) > 1:
        consequences_list = consequences_list[:-1]
    new_json = []
    gate_pattern = re.compile(r"(\w+) (\d\+) (.*)")

    for consequence in consequences_list:
        if consequence == "": continue
        consequence_json = {}
        if consequence[:3] == "WoO":
            consequence_json["WoO"] = True
            consequence = consequence[3:]

        gate_match = gate_pattern.match(consequence)
        if gate_match:
            gate_type, gate_value, effect = gate_match.groups()
            if not gate_type == "If":
                consequence_json["gate"] = {"gateType": gate_type, "gateValue": gate_value}
            else:
                effect = consequence
        else:
            effect = consequence
        consequence_json["effect"] = effect
        new_json.append(consequence_json)

    return new_json

def parse_targeting(targeting):
    """Parses the Attack Consequences."""
    targeting_lines = re.split(r"\.\s?", targeting)[:-1]
    new_json = []
    
    for line in targeting_lines:
        line_json = {}
        line_type = line.split(": ")
        if len(line_type) > 1:
            line_json["type"] = line_type[0] + ":"
            line_json["target"] = line_type[1]
        else:
            line_json["type"] = "Target:"
            line_json["target"] = line
        new_json.append(line_json)

    return new_json


