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
        "critResponse": parse_abilities(row["Crit Response"])[0],
    }
    
    return card_json

def clue_row(row):
    card_json = {
        "flavor": row["Flavor"],
        "subtitle": row["Subtitle"],
        "type": row["Clue Type"],
        "storyCard": row["Story Card"],
        "subdeck": row["Subdeck"],
        "text": parse_abilities(row["Card Text"]),
    }

    return card_json

def condition_row(row):
    card_json = {
        "subtitle": row["Subtitle"],
        "name2": row["Reverse Name"],
        "subtitle2": row["Reverse Subtitle"],
        "side": {
            "effect": parse_abilities(row["Primary Effect A"])[0]
        },
        "side2": {
            "effect": parse_abilities(row["Primary Effect B"])[0]
        },
    }

    if row["Abilities A"]: 
        card_json["side"]["abilities"] = {
            "title": row["Abilities A"].split(": ")[0],
            "effects": parse_abilities(row["Abilities A"].split(": ")[1])[0]
        }

    if row["Abilities B"]: 
        card_json["side2"]["abilities"] = {
            "title": row["Abilities B"].split(": ")[0],
            "effects": parse_abilities(row["Abilities B"].split(": ")[1])[0]
        }

    if not card_json["subtitle"]: card_json.pop("subtitle")
    if not card_json["subtitle2"]: card_json.pop("subtitle2")

    if row["End of Battle Effect A"]:
        card_json["side"]["endOfBattle"] = row["End of Battle Effect A"]
    if row["End of Battle Effect B"]:
        card_json["side2"]["endOfBattle"] = row["End of Battle Effect B"]

    return card_json

def dahaka_row(row):
    AI_name, BP_name = row["Name"].split(" | ")

    card_json = {
        "ai_name": AI_name,
        "bp_name": BP_name,
        "usedFor": row["Used For"],
        "uber": "TRUE" in row["Uber?"],
        
        ## AI
        "AIlevel": row["Atk Level"],
        "AItargeting": parse_targeting(row["Targeting"]),
        "AIpreAction": row["Pre-Action Effects"],
        "AIpreActionWoO": "TRUE" in row["Pre-Action WoO?"],
        "AImoveType": row["Move Type"],
        "AIpreAttack": row["Pre-Attack Effect"],
        "AIattackType": row["Attack Type"].split(", "),
        "AIattackBanners": parse_consequences(row["Attack Banners"]),
        "AIdice": row["Dice"],
        "AIdifficulty": row["Difficulty"],
        "AIconsequences": parse_consequences(row["Attack Consequences"]),

        ## Interrupt
        "interruptEffect": row["Interrupt Effect"],

        ## BP
        "BPlevel": row["BP Level"],
        "BPtype": row["AT/GT?"],
        "BPvalue": row["AT/GT"],
        "BPresources": parse_resources(row["Resources"]),
        "BPnonResponseText": row["Non-Response Text"],
        "BPresponses": parse_responses(row["Responses"]),
        "BPcritFlavor": row["Crit Lore"],
        "BPcritResponse": parse_abilities(row["Crit Response"])[0],
    }

    after_attack_effects = parse_consequences(row["After Attack Effects"])
    if after_attack_effects:
        card_json["AIpreAfterAttackWoO"] = "TRUE" in row["Pre-After Attack WoO?"]
        card_json["AIafterFinal"] = "TRUE" in row["After Final?"]
        card_json["AIafterAttackEffects"] = after_attack_effects

    if not card_json["AIpreAction"]:
        card_json.pop("AIpreAction")
    if not card_json["AIpreAttack"]:
        card_json.pop("AIpreAttack")
    if not card_json["uber"]:
        card_json.pop("uber")
    
    return card_json

def doom_row(row):
    card_json = {
        "name2": row["Side B"] or row["Name"],
        "cardNumber": row["Doom Card"],
        "flavor": row["Flavor A"].split("<<NL>>"),
        "rules": [parse_abilities(rule)[0] for rule in row["Rules A"].split("\\n")],
        "flavor2": row["Flavor B"].split("<<NL>>"),
        "rules2": [parse_abilities(rule)[0] for rule in row["Rules B"].split("\\n")]
    }

    return card_json

def exploration_row(row):
    card_json = {
        "effects": parse_abilities(row["Effects"]),
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
        "effect": parse_formatted_sentence(row["Effect"])[0],
        "growthName": row["Growth Name"],
        "growthAbility": parse_formatted_sentence(row["Growth Ability"])[0],
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

    abilities, gated_abilities = parse_abilities(row["AB for Parsing"])    
    
    card_json = {
        "name": row["Name"].replace(" (Wished)", ""),
        "acquisition": row["Acquisition"],
        "flavor": row["Flavor"],
        "slot": row["Slot"],
        "transformsInto": row["Transforms Into"] or None,
        "traits": row["Traits"].split(", ") if row["Traits"] else [],
        "offensiveStatistics": offensive_statistics,
        "defensiveStatistics": [parse_armor(line) for line in row["Defensive Statistics"].split(". ")] if row["Defensive Statistics"] else [],
        "asteriskEffect": parse_formatted_sentence(row["Asterisk Effect"])[0],
        "wished": "(Wished)" in row["Name"],
        "unique": "Unique. " in row["AB for Parsing"],
        "ascended": "Ascended. " in row["AB for Parsing"],
        "abilities": abilities,
        "gatedAbilities": gated_abilities,
    }

    return card_json

def godform_row(row):    
    card_json = {
        "power": row["God Power"],
        "speed": row["Speed Bonus"],
        "stats": row["Stats"],
        "keywords": parse_abilities(row["Keywords"]),
        "abilities": parse_abilities_block(row["Abilities"]),
    }

    return card_json

def kratos_row(row):
    card_json = {
        "flavor": row["Flavor"],
        "effects": parse_abilities(row["Effects"])[0],
        "rally": parse_formatted_sentence(row["Rally"])[0],
    }

    return card_json

def map_row(row):
    card_json = {
        "factions": row["Faction"].split(", "),
        "progDoom": row["Prog/Doom"].split(", "),
        "symbols": row["Symbols"].split(", "),
        "movementArrows": parse_map_movement(row["Movement"]),
        "otherFeatures": row["Other Features"].split(". "),
        "secrets": row["Secrets"].split(" ")
    }

    if card_json["progDoom"] == [""]: card_json["progDoom"] = []
    if card_json["symbols"] == [""]: card_json["symbols"] = []
    if card_json["otherFeatures"] == [""]: card_json["otherFeatures"] = []
    if card_json["secrets"] == [""]: card_json["secrets"] = []

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
        "effects": parse_abilities(row["Effects"])[0],
    }

    return card_json

def nymph_row(row):
    card_json = {
        "title": row["Title"],
        "requirements": parse_abilities(row["Requirements"])[0],
        "effects": parse_abilities(row["Effects"])[0],
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

def payload_row(row):
    abilities = []

    if row["Ability 1"]: 
        ability = {
            "name": row["Ability 1 Name"],
            "effects": parse_abilities(row["Ability 1"])[0]
        }

        if row["Ability 1 Cost"]:
            ability["cost"] = row["Ability 1 Cost"]

        abilities.append(ability)

    if row["Ability 2"]: 
        ability = {
            "name": row["Ability 2 Name"],
            "effects": parse_abilities(row["Ability 2"])[0]
        }

        if row["Ability 2 Cost"]:
            ability["cost"] = row["Ability 2 Cost"]

        abilities.append(ability)

    if row["Ability 3"]: 
        ability = {
            "name": row["Ability 3 Name"],
            "effects": parse_abilities(row["Ability 3"])[0]
        }

        if row["Ability 3 Cost"]:
            ability["cost"] = row["Ability 3 Cost"]

        abilities.append(ability)

    card_json = {
        "kintsukuroi": row["Kintsukuroi"] == "TRUE",
        "abilities": abilities
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
            } if row["VP Climb Test"] else {},
            "holdOn": {
                "test": row["VP Hold On"],
                "fail": row["VP Hold On Fail"]
            },
            "effects": parse_abilities(row["VP Effects"])[0]
        }

    if row["VP Name+"]:
        card_json["vp+"] = {
            "vpCount": row["# of VPs"],
            "climbTest": {
                "stat": row["VP Climb Test+"].split(" ")[0],
                "difficulty": row["VP Climb Test+"].split(" ")[1][0]
            } if row["VP Climb Test+"] else {},
            "holdOn": {
                "test": row["VP Hold On+"],
                "fail": row["VP Hold On Fail+"]
            },
            "effects": parse_abilities(row["VP Effects+"])[0]
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
            if traits[0] != '':
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
                "traitsChanges": traits if traits != [''] else [],
                "traitsFullList": traits_list.copy()
            })

    card_json["levels"] = levels_json

    return card_json

def primordialAttack_row(row):
    card_json = {
        "cardType": row["Card Type"],
        "usedFor": row["Used For"],
        "flavor": parse_abilities(row["Flavor"])[0],
        "level": row["Level"],
        "uber": "TRUE" in row["Uber?"],
        "preTarget": parse_consequences(row["Pre-Target Effects"]),
        "targeting": parse_targeting(row["Targeting"]),
        "preAction": parse_consequences(row["Pre-Action Effects"]),
        "preActionWoO": "TRUE" in row["Pre-Action WoO?"],
        "moveType": row["Move Type"],
        "moveLocation": row["Move-to Location"] or None,
        "preAttack": row["Pre-Attack Effect"],
        "attackType": row["Attack Type"].split(", "),
        "rangeSize": row["Range Size"] or None,
        "attackBanners": parse_consequences(row["Attack Banners"]),
        "attackDiagram": parse_attack_diagram(row["Attack Diagram"]) or None,
        "laserCount": row["Laser Count"] or None,
        "dice": row["Dice"],
        "difficulty": row["Difficulty"],
        "consequences": parse_consequences(row["Attack Consequences"]),
    }

    after_attack_effects = parse_consequences(row["After Attack Effects"])
    if after_attack_effects:
        card_json["preAfterAttackWoO"] = "TRUE" in row["Pre-After Attack WoO?"]
        card_json["afterFinal"] = "TRUE" in row["After Final?"]
        card_json["afterAttackEffects"] = after_attack_effects

    if not card_json["preTarget"]:
        card_json.pop("preTarget")    
    if not card_json["preAction"]:
        card_json.pop("preAction")
    if not card_json["preAttack"]:
        card_json.pop("preAttack")
    if not card_json["attackBanners"]:
        card_json.pop("attackBanners")    
    if not card_json["uber"]:
        card_json.pop("uber")
    if not card_json["rangeSize"]:
        card_json.pop("rangeSize")
    if not card_json["attackDiagram"]:
        card_json.pop("attackDiagram")
    if not card_json["laserCount"]:
        card_json.pop("laserCount")

    return card_json

def productionFacility_row(row):
    card_json = {
        "techType": row["Tech Type"],
        "techSubType": row["Tech Sub-Type"],
        "flavorProject": row["Flavor (Project)"],
        "requirements": row["Requirements"].split(", ") or [],
        "leadsTo": row["Leads To"].split(", ") or [],
        "facilityName": row["Facility Name"],
        "recipes": parse_recipes(row["Recipes"]),
    }

    return card_json

def story_row(row):
    card_json = {
        "name2": row["Reverse Side"] or row["Name"],
        "cardNumber": row["Story Card"],
        "flavor": row["Flavor A"].split("<<NL>>"),
        "rulesTitle": row["Summary A"],
        "rules": [parse_abilities(rule)[0] for rule in row["Rules A"].split("\\n")],
        "flavor2": row["Flavor B"].split("<<NL>>"),
        "rulesTitle2": row["Summary B"],
        "rules2": [parse_abilities(rule)[0] for rule in row["Rules B"].split("\\n")]
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
        "abilities": parse_abilities(row["Abilities"]),
    }

    if row["Reverse Side"]:
        card_json["name2"] = row["Reverse Side"]
    if row["Flipped Keywords"]:
        card_json["keywords2"] = row["Flipped Keywords"].split(". ")
    if row["Flipped Abilities"]:
        card_json["abilities2"] = parse_abilities(row["Flipped Abilities"])

    return card_json

def titan_row(row):
    kratos_table = parse_kratos(row["Kratos Table"])
    trauma_table = parse_trauma(row["Trauma Table"])

    reformatted = ""
    for keyword in row["Abilities"].split(". "):
        reformatted += "{" + keyword + "}" + ". "
    
    abilities, gated_abilities = parse_abilities(reformatted[:-2])
    
    card_json = {
        "subtitle": row["Subtitle"] or None,
        "titanPower": row["Titan Power"],
        "speed": row["Speed"],
        "kratosTable": kratos_table,
        "traumaTable": trauma_table,
        "abilities": abilities,
        "gatedAbilities": gated_abilities
    }

    return card_json

def trait_row(row):
    card_json = {
        "effects": parse_abilities(row["Effects"]),
    }

    if row["Used For"]: card_json["usedFor"] = row["Used For"]

    return card_json

def traitLike_row(row):
    card_json = {}

    if row["Reverse Name"]: card_json["name2"] = row["Reverse Name"]
    if row["Flavor"]: card_json["flavor"] = row["Flavor"]
    card_json["effects"] = parse_abilities(row["Effect Text"])[0]
    card_json["usedFor"] = row["Used For"]
    if row["Card Level"]: card_json["level"] = row["Card Level"]

    return card_json

def trauma_row(row):
    card_json = {
        "flavor": row["Flavor"],
        "subtype": row["Sub-Type"],
        "effects": parse_abilities(row["Effects"])[0],
        "isCondition": row["Condition?"],
        "arrow": row["Minor Direction"],
        "number": row["Major Number"],
        "sign": row["Sign"]
    }

    return card_json