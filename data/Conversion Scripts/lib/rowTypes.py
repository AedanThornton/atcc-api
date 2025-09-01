from lib.parseFunctions import *

def argonaut_row(row):
    return {
        "flavor": row["Flavor"],
        "stat": row["Stat"]
    }

def argoAbility_row(row):
    card_json = {
        "techType": row["Tech Type"],
        "techSubType": row["Tech Sub-Type"],
        "locked": row["Cycle-locked?"],
        "flavorProject": row["Flavor (Project)"],
        "requirements": row["Requirements"].split(", ") or [],
        "leadsTo": row["Leads To"].split(", ") or [],
        "flavorTech": row["Flavor (Tech)"],
        "abilities": parse_argo_abilities(row["Abilities"]),
        "charges": row["Charges"],
        "trireme": row["Trireme"],
    }

    return card_json

def BP_row(row):
    card_json = {
        "usedFor": row["Used For"],
        "level": row["BP Level"],
        "type": row["AT/GT?"],
        "value": row["AT/GT"],
        "resources": parse_resources(row["Resources"]),
        "nonResponseText": row["Non-Response Text"],
        "responses": parse_responses(row["Responses"]),
        "critFlavor": row["Crit Lore"],
        "critResponse": row["Crit Response"],
    }
    
    return card_json

def clue_row(row):
    card_json = {
        "flavor": row["Flavor"],
        "subtitle": row["Subtitle"],
        "type": row["Clue Type"],
        "storyCard": row["Story Card"],
        "subdeck": row["Subdeck"],
        "text": row["Card Text"],
    }

    return card_json

def condition_row(row):
    card_json = {
        "subtitle": row["Subtitle"],
        "name2": row["Reverse Name"],
        "subtitle2": row["Reverse Subtitle"],
        "side": {
            "effect": row["Primary Effect A"],
            "resolution": row["Resolution Effect A"],
        },
        "side2": {
            "effect": row["Primary Effect B"],
            "resolution": row["Resolution Effect B"],
        },
    }

    if not card_json["subtitle"]: card_json.pop("subtitle")
    if not card_json["subtitle2"]: card_json.pop("subtitle2")

    if row["End of Battle Effect A"]:
        card_json["side"]["endOfBattle"] = row["End of Battle Effect A"]
    if row["End of Battle Effect B"]:
        card_json["side2"]["endOfBattle"] = row["End of Battle Effect B"]

    return card_json

def doom_row(row):
    card_json = {
        "name2": row["Side B"] or row["Name"],
        "cardNumber": row["Doom Card"],
        "flavor": row["Flavor A"].split("\\n"),
        "rules": row["Rules A"].split("\\n"),
        "flavor2": row["Flavor B"].split("\\n"),
        "rules2": row["Rules B"].split("\\n")
    }

    return card_json

def exploration_row(row):
    card_json = {
        "effects": row["Effects"],
        "number": int(row["Number"]) if row["Number"] else "",
        "adversaryTriggers": row["Adversary Triggers"],
        "stackType": row["Stack Type"],
        "removeEffect": row["Remove Effect"],
        "acclimation": row["Acclimation"],
    }

    if not row["Number"]:
        card_json.pop("number")
    if not row["Adversary Triggers"]:
        card_json.pop("adversaryTriggers")

    return card_json

def fatedMnemos_row(row):
    card_json = {
        "flavor": row["Flavor"],
        "traits": row["Traits"].split(", "),
        "effect": row["Effect"],
        "growthName": row["Growth Name"],
        "growthAbility": row["Growth Ability"],
        "stats": row["Stat"].split(", "),
    }
    
    return card_json

def gear_row(row):
    offensive_statistics = {}
    if row["Attack Dice"]:
        offensive_statistics = {
            "attackDice": row["Attack Dice"],
            "precision": row["Precision"],
            "power": parse_power(row["Power"])
        }
    defensive_statistics = {}
    if row["Evasion Rerolls"]: defensive_statistics["evasionRerolls"] = row["Evasion Rerolls"]
    if row["Evasion Bonus"]: defensive_statistics["evasionBonus"] = row["Evasion Bonus"]
    if row["Armor Dice"]: defensive_statistics["armorDice"] = parse_armor(row["Armor Dice"])
    if row["Resistances"]: defensive_statistics["resistances"] = map(parse_armor, row["Resistances"].split(". "))

    abilities, gated_abilities = parse_abilities(row["Ability Box"])
    
    card_json = {
        "name": row["Name"].replace(" (Wished)", ""),
        "acquisition": row["Acquisition"],
        "flavor": row["Flavor"],
        "slot": row["Slot"],
        "transformsInto": row["Transforms Into"] or None,
        "traits": row["Traits"].split(", ") if row["Traits"] else [],
        "offensiveStatistics": offensive_statistics,
        "defensiveStatistics": defensive_statistics,
        "asteriskEffect": row["Asterisk Effect"] or None,
        "wished": "(Wished)" in row["Name"],
        "unique": "Unique. " in row["Ability Box"],
        "ascended": "Ascended. " in row["Ability Box"],
        "abilities": abilities,
        "gatedAbilities": gated_abilities,
    }

    return card_json

def godform_row(row):
    card_json = {
        "power": row["God Power"],
        "speed": row["Speed Bonus"],
        "stats": row["Stats"],
        "keywords": row["Keywords"],
        "abilities": parse_abilities_block(row["Abilities"]),
    }

    return card_json

def kratos_row(row):
    card_json = {
        "flavor": row["Flavor"],
        "effects": row["Effects"],
        "rally": row["Rally"],
    }

    return card_json

def map_row(row):
    card_json = {
        "factions": row["Faction"].split(", "),
        "symbols": row["Symbols"].split(", "),
        "movementArrows": parse_map_movement(row["Movement"]),
        "otherFeatures": row["Other Features"].split(". "),
        "secrets": row["Secrets"]
    }

    return card_json

def mnemos_row(row):
    ability1_a, ability1_b = parse_abilities(row["Ability 1"])
    ability1 = ability1_a + ability1_b
    ability2_a, ability2_b = parse_abilities(row["Ability 2"])
    ability2 = ability2_a + ability2_b
    ability3_a, ability3_b = parse_abilities(row["Ability 3"])
    ability3 = ability3_a + ability3_b

    card_json = {
        "flavor": row["Flavor"],
        "traits": row["Traits"].split(", "),
        "abilities": [ability1, ability2, ability3],
        "stats": row["Stat"].split(", "),
    }

    return card_json

def moiros_row(row):
    card_json = {
        "effects": row["Effects"],
    }

    return card_json

def nymph_row(row):
    card_json = {
        "title": row["Title"],
        "requirements": row["Requirements"],
        "effects": row["Effects"],
    }

    return card_json

def pattern_row(row):
    kratos_table = parse_kratos(row["Kratos Table"])
    trauma_table = parse_trauma(row["Trauma Table"])

    if kratos_table: table_type = "Kratos"
    elif trauma_table: table_type = "Trauma"

    abilites, gated_abilities = parse_abilities(row["Ability"])
    
    card_json = {
        "patternType": table_type,
        "patternTrait": row["Trait"],
        "kratosTable": kratos_table,
        "traumaTable": trauma_table,
        "abilities": abilites,
        "gatedAbilities": gated_abilities
    }

    return card_json

def primordial_row(row):
    diagram = row["Diagram"].split(", ")

    card_json = {
        "figure_size": diagram[0],
        "diagramEffects": diagram[1:],
    }

    if not row["# of VPs"] == "0":
        card_json["vp"] = {
            "vpCount": row["# of VPs"],
            "climbTest": {
                "stat": row["VP Climb Test"].split(" ")[0],
                "difficulty": row["VP Climb Test"].split(" ")[1][0]
            },
            "holdOn": {
                "test": row["VP Hold On"],
                "fail": row["VP Hold On Fail"]
            },
            "effects": row["VP Effects"]
        }

    levels_json = []
    traits_list = []
    for i in range(0, 10):
        if row["Level " + str(i)]:
            details = row["Level " + str(i)].split(". ")

            attr_json = []
            if details[3]:
                for attribute in details[3].split(", "):
                    count = attribute.split(" ")[0]
                    name = " ".join(attribute.split(" ")[1:])
                    attr_json.append({
                        "count": count,
                        "name": name
                    })

            traits = details[4].split(", ")
            for trait in traits:
                if trait[0] == "-":
                    traits_list.remove(trait[1:])
                else:
                    traits_list.append(trait)

            levels_json.append({
                "level": str(i),
                "toHit": details[0],
                "speed": details[1],
                "wounds": details[2],
                "attributes": attr_json,
                "traitsChanges": traits,
                "traitsFullList": traits_list.copy()
            })

    card_json["levels"] = levels_json


    return card_json

def primordialAttack_row(row):
    card_json = {
        "subtype": row["Subtype"],
        "usedFor": row["Used For"],
        "flavor": row["Flavor"],
        "level": row["Level"],
        "uber": "TRUE" in row["Uber?"],
        "targeting": parse_targeting(row["Targeting"]),
        "preAction": row["Pre-Action Effects"],
        "preActionWoO": "TRUE" in row["Pre-Action WoO?"],
        "moveType": row["Move Type"],
        "preAttack": row["Pre-Attack Effect"],
        "attackType": row["Attack Type"],
        "attackBanners": parse_consequences(row["Attack Banners"]),
        "dice": row["Dice"],
        "difficulty": row["Difficulty"],
        "consequences": parse_consequences(row["Attack Consequences"]),
    }

    after_attack_effects = parse_consequences(row["After Attack Effects"])
    if after_attack_effects:
        card_json["preAfterAttackWoO"] = "TRUE" in row["Pre-After Attack WoO?"]
        card_json["afterFinal"] = "TRUE" in row["After Final?"]
        card_json["afterAttackEffects"] = after_attack_effects

    if not card_json["preAction"]:
        card_json.pop("preAction")
    if not card_json["preAttack"]:
        card_json.pop("preAttack")
    if not card_json["uber"]:
        card_json.pop("uber")

    return card_json

def productionFacilities_row(row):
    card_json = {
        "techType": row["Tech Type"],
        "techSubType": row["Tech Sub-Type"],
        "flavorProject": row["Flavor (Project)"],
        "requirements": row["Requirements"].split(", ") or [],
        "leadsTo": row["Leads To"].split(", ") or [],
        "flavorTech": row["Flavor (Tech)"],
        "facilityName": row["Facility Name"],
        "recipes": parse_recipes(row["Recipes"]),
    }

    return card_json

def story_row(row):
    card_json = {
        "name2": row["Reverse Side"] or row["Name"],
        "cardNumber": row["Story Card"],
        "flavor": row["Flavor A"].split("\\n"),
        "rulesTitle": row["Summary A"],
        "rules": row["Rules A"].split("\\n"),
        "flavor2": row["Flavor B"].split("\\n"),
        "rulesTitle2": row["Summary B"],
        "rules2": row["Rules B"].split("\\n")
    }

    return card_json

def structural_row(row):
    card_json = {
        "name2": row["Alternate Name"],
        "techType": row["Tech Type"],
        "techSubType": row["Tech Sub-Type"],
        "locked": row["Cycle-locked?"],
        "flavorProject": row["Flavor (Project)"],
        "requirements": row["Requirements"].split(", ") or [],
        "leadsTo": row["Leads To"].split(", ") or [],
        "flavorTech": row["Flavor (Tech)"],
        "abilities": parse_abilities_block(row["Abilities"]),
    }

    return card_json

def terrain_row(row):
    card_json = {
        "tiles": parse_tiles(row["Tiles"]),
        "keywords": row["Keywords"].split(". "),
        "abilities": row["Abilities"].split(". "),
    }

    if row["Reverse Side"]:
        card_json["name2"] = row["Reverse Side"]
    if row["Flipped Keywords"]:
        card_json["keywords2"] = row["Flipped Keywords"]
    if row["Flipped Abilities"]:
        card_json["abilities2"] = row["Flipped Abilities"]

    return card_json

def titan_row(row):
    kratos_table = parse_kratos(row["Kratos Table"])
    trauma_table = parse_trauma(row["Trauma Table"])

    abilites, gated_abilities = parse_abilities(row["Abilities"])
    
    card_json = {
        "subtitle": row["Subtitle"] or None,
        "titanPower": row["Titan Power"],
        "speed": row["Speed"],
        "kratosTable": kratos_table,
        "traumaTable": trauma_table,
        "abilities": abilites,
        "gatedAbilities": gated_abilities
    }

    return card_json

def trait_row(row):
    card_json = {
        "name2": row["Reverse Side"],
        "effects": row["Effects"]
    }

    if not card_json["name2"]: card_json.pop("name2")

    return card_json

def trauma_row(row):
    card_json = {
        "flavor": row["Flavor"],
        "subtype": row["Sub-Type"],
        "effects": row["Effects"],
        "isCondition": row["Condition?"],
        "arrow": row["Minor Direction"],
        "number": row["Major Number"],
        "sign": row["Sign"]
    }

    return card_json