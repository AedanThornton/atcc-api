import re
from lib.staticVars import *
import math


def parse_formatted_sentence(raw_sentence):
    if not raw_sentence: return None, None

    token_regex = re.compile(
        r"(<<NL>>)"                 # Newline
        r"|{([^}]+)}"               # {keyword}
        r"|<([^>]+)>"               # <timing>
        r"|\[([^\]]+)\]"            # [cardRef]
        r"|%([^%]+)%"               # %gate%
        r"|\*([^\*]+)\*"            # *bold*
        r"|_([^_]+)_"               # _italics_
        r"|@(\w+)"                  # @icon
        r"|\$(\w+)"                 # $cost
        r"|([^{}<>%@$_\*\[\]]+)"    # plain text
    )

    ability = {}
    tokens = []
    costs = []
    for match in token_regex.finditer(raw_sentence):
        newline, keyword, timing, cardRef, gate, bold, italics, icon, cost, text = match.groups()

        if newline:
            tokens.append({"type": "newline"})
        elif keyword:
            tokens.append({"type": "keyword", "value": keyword})
        elif timing:
            tokens.append({"type": "timing", "value": timing})
        elif cardRef:
            cardRef = cardRef.split("|")
            display = cardRef[0]
            refID = ""
            if len(cardRef) > 1:
                refID = cardRef[1]
            tokens.append({"type": "cardRef", "value": display, "refID": refID})
        elif bold:
            tokens.append({"type": "bold", "value": bold})
        elif italics:
            tokens.append({"type": "italics", "value": italics})
        elif icon:
            tokens.append({"type": "icon", "value": icon})
        elif text and text.strip():
            tokens.append({"type": "plainText", "value": text.strip()})

        elif gate:
            pattern = re.compile(r'(\w+)\s(\d\+?)')
            gate_match = re.match(pattern, gate)

            if gate_match:
                gateType, gateValue = gate_match.groups()
                ability["gate"] = gateType
                ability["value"] = gateValue
            else:
                ability["gate"] = gate
        elif cost:
            costs.append(cost)


    ability["abilityText"] = tokens

    if costs:
        ability["costs"] = costs

    if "gate" in ability:
        return None, ability
    else:
        return ability, None



def parse_power(power_str):
    base_pattern = r"([\+\-]?)(\w+\s*\w+(?:,\s*\w+\s*\w+)*)"
    powers = []
    for part in power_str.split(". "):
        gate_match = re.match(r"([\w\&]+ \d+[\+\-]\d?)\s*" + base_pattern, part)
        hits_match = re.match(r"(\d?[\+\-]?\d?)\s*(?:Full\s?)?Hit[s]?\s*" + base_pattern, part)
        match = re.match(base_pattern, part)

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
                if "X" in count:
                    dice_list.append("X")
                    dice_list.append(die_type)
                else:
                    for x in range(0,int(count)):
                        dice_list.append(die_type)

        power = {"type": dice_list}
        if (gate_match):
            power["gate"] = {"type": gate_type.split()[0], "value": gate_type.split()[1]}
        if (hits_match): 
            if (hits):
                power["gate"] = {"type": "Hits", "value": hits}
            else:
                power["gate"] = {"type": "Full Hit"}
        if (plus):
            if (plus == "+"):
                power["plus"] = True
            elif plus == '-':
                power["minus"] = True

        powers.append(power)

    return powers

def parse_armor(armor_str):
    base_pattern = r"(\+?\w)\s*(.+)"
    die_types = ["Red", "Black", "White", "Mortal"]

    armor_dice = []
    if len(armor_str.split(", ")) > 1: armor_dice = armor_str.split(", ")
    elif len(armor_str.split(" ")) > 1 and armor_str.split(" ")[1] in die_types: armor_dice = [armor_str]
    if armor_dice:
        dice_list = []
        for die in armor_dice:
            match = re.match(base_pattern, die)

            if match:
                count, die_type = match.groups()
                if "X" in count:
                    dice_list.append("X")
                    dice_list.append(die_type)
                else:
                    for x in range(0,int(count)):
                        dice_list.append(die_type)
        
        return {
            "type": "Armor",
            "armorDice": dice_list
        }


    gate_match = re.match(r"([\w\&]+ \d+[\+\-]\d?)\s*" + base_pattern, armor_str)
    match = re.match(base_pattern, armor_str)

    gate_type, amount, armor_type = "", "", ""
    if gate_match:
        gate_type, amount, armor_type = gate_match.groups()
    elif match:
        amount, armor_type = match.groups()

    if (gate_match):
        return {
            "gate": {"type": gate_type.split()[0], "value": gate_type.split()[1]},
            "amount": amount,
            "type": armor_type
        }
    if match:
        return {
            "amount": amount,
            "type": armor_type
        }
    else:
        return {
            "type": armor_str
        }

def parse_abilities(raw_data):
    sentences = [s.strip() for s in re.split(r"\.\s*", raw_data) if s.strip()]
    parsed_abilities = []
    parsed_gated_abilities = []

    for sentence in sentences:
        ability, gated_ability = parse_formatted_sentence(sentence)

        if ability:
            parsed_abilities.append(ability)
        if gated_ability:
            parsed_gated_abilities.append(gated_ability)

    return parsed_abilities, parsed_gated_abilities

def parse_abilities_block(raw_abilities):
    abilities = raw_abilities.split("; ")
    ability_json = []

    for ability in abilities:
        name = ability.split(":")[0]
        ability_def = ": ".join(ability.split(": ")[1:])

        attack_ability_match = re.match(r'{(\w),\s?(\+\d),\s?([^\}]+)}\s*(.*)', ability_def)
        dice, precision, power_dice = "", "", ""
        if attack_ability_match:
            dice, precision, power, ability_def = attack_ability_match.groups()
            power_spread = power.split(" ")
            if len(power_spread) == 2:
                power_dice = int(power_spread[0]) * [power_spread[1]]
            else: 
                power_dice = [power_spread]

        ability_type = ability_def.split(". ")[0]
        if ability_type in STRUCTURAL_TYPES:
            effects = ". ".join(ability_def.split(". ")[1:])
        else:
            ability_type = ""
            effects = ability_def      

        new_json = {
            "name": name,
            "type": ability_type,
            "effects": parse_abilities(effects)
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
            card_info = name.split("#")
            parsed_recipes[int(number) - 1]["name"] = card_info[0]
            if len(card_info) > 1:
                parsed_recipes[int(number) - 1]["refID"] = card_info[1]
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
                        card_info = unique_match.groups()[0].split("#")
                        new_ingredient["name"] = card_info[0]
                        new_ingredient["type"] = "gear"
                        if len(card_info) > 1:
                            new_ingredient["refID"] = card_info[1]
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
            ability_obj["effects"] = parse_abilities(name_split[1])[0]
        else:
            ability_obj["effects"] = parse_abilities(name_split[0])[0]

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
        if response_type == "Interrupt":
            response_type2, response_effects_list = response_effects_list.split(" ", 1)
            response_type = response_type + " " + response_type2

        response_effects = []

        for effect in response_effects_list.split(". "):
            if not effect: continue
            effect = re.sub("\.", "", effect) #remove hanging periods
            
            if effect.startswith("WoO"):
                response_effects.append({
                    "effect": parse_abilities(" ".join(effect.split(" ")[1:]))[0],
                    "WoO": True
                })
            else:
              response_effects.append({
                    "effect": parse_abilities(effect)[0]
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
                if x_match:
                    name, x_value = x_match.groups()
                else:
                    name = keyword

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
    banner_regex = re.compile(r"%%([^%]+)%%")

    results = []
    segments = re.split(r"(WoO)", consequences)
    next_is_WoO = False

    for seg in segments:
        if seg == "WoO":
            next_is_WoO = True
            continue

        last_end = 0
        for match in banner_regex.finditer(seg):
            # Text before the banner
            text_part = seg[last_end:match.start()].strip()
            if text_part:
                abilities = parse_abilities(text_part)
                if abilities:
                    results.append({
                        "banner": False,
                        "WoO": next_is_WoO,
                        "effect": abilities[0]
                    })
                    next_is_WoO = False

            # Banner itself
            banner_text = match.group(1).strip()
            if banner_text:
                abilities = parse_abilities(banner_text)
                if abilities:
                    results.append({
                        "banner": True,
                        "WoO": next_is_WoO,
                        "effect": abilities[0]
                    })
                    next_is_WoO = False

            last_end = match.end()

        # Any remaining text after last banner
        remaining_text = seg[last_end:].strip()
        if remaining_text:
            abilities = parse_abilities(remaining_text)
            if abilities:
                results.append({
                    "banner": False,
                    "WoO": next_is_WoO,
                    "effect": abilities[0]
                })
                next_is_WoO = False

    return results

def parse_targeting(targeting):
    """Parses the Attack Consequences."""
    targeting_lines = re.split(r"\.\s?", targeting)
    new_json = []
    
    for line in targeting_lines:
        if not line: continue
        line_json = {}
        line_type = line.split(": ")
        if len(line_type) > 1:
            line_json["type"] = line_type[0] + ":"
            line_json["target"] = [parse_formatted_sentence(line_type[1])[0]]
        else:
            line_json["type"] = "Target:"
            line_json["target"] = [parse_formatted_sentence(line)[0]]
        new_json.append(line_json)

    return new_json

def parse_map_movement(map_movement):
    movement_json = {}
    north_json = []
    west_json = []
    south_json = []
    east_json = []

    for arrow in map_movement.split(", "):
        arrow_json = {}

        match arrow[:1]:
            case "N":
                direction = north_json
            case "W":
                direction = west_json
            case "S":
                direction = south_json
            case "E":
                direction = east_json
        arrow = arrow[1:]

        if arrow[:1] == 'a' or arrow[:1] == 'b':
            arrow_json["split"] = arrow[:1]
            arrow = arrow[1:]

        if arrow[:1] == "L":
            arrow_json["lock"] = arrow.split(")")[0][2:]
            arrow = arrow.split(")")[1]

        arrow_json["nextTile"] = arrow.strip()
   
        direction.append(arrow_json)

    if north_json: movement_json["north"] = north_json
    if west_json: movement_json["west"] = west_json
    if south_json: movement_json["south"] = south_json
    if east_json: movement_json["east"] = east_json

    return movement_json

def parse_tiles(raw_tiles):
    tiles = raw_tiles.split(", ")
    tile_list = []

    for tile in tiles:
        count, kind = tile.split(" ")
        tile_json = {
            "count": count,
            "type": kind
        }

        tile_list.append(tile_json)

    return tile_list

def parse_attack_diagram(raw_data):
    new_rows = []
    rows = raw_data.split(";")

    for row in rows:
        front = "W" * math.ceil((25 - len(row)) / 2)
        back = "W" * math.floor((25 - len(row)) / 2)

        full_row = front + row + back
        new_rows.append(full_row)

    return new_rows if len(new_rows) > 1 else None