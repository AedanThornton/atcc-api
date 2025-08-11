from lib.parseFunctions import *

def argonaut_row(row):
    return {
        "flavor": row["Flavor"],
        "stat": row["Stat"]
    }

def argoAbility_row(row):
    card_json = {
        "altname": row["Alternate Name"],
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
        "name2": row["Reverse Name"],
        "sideA": {
            "effect": row["Primary Effect A"],
            "resolution": row["Resolution Effect A"],
        },
        "sideB": {
            "effect": row["Primary Effect B"],
            "resolution": row["Resolution Effect B"],
        },
    }

    if row["End of Battle Effect A"]:
        card_json["sideA"]["endOfBattle"] = row["End of Battle Effect A"]
    if row["End of Battle Effect B"]:
        card_json["sideB"]["endOfBattle"] = row["End of Battle Effect B"]

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
        "cardIDs": row["Card ID"].split(", "),
        "name": row["Name"],
        "cardType": row["Card Type"],
        "game": row["Game"],
        "cardSize": row["Card Size"],
        "cycle": row["Cycle"],
        "foundIn": row["Found In"],

        "power": row["God Power"],
        "speed": row["Speed Bonus"],
        "stats": row["Stats"],
        "keywords": row["Keywords"],
        "abilities": parse_abilities(row["Abilities"]),
        
        "faq": row["FAQ"],
        "errata": row["Errata"]
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

def structural_row(row):
    card_json = {
        "altname": row["Alternate Name"],
        "techType": row["Tech Type"],
        "techSubType": row["Tech Sub-Type"],
        "locked": row["Cycle-locked?"],
        "flavorProject": row["Flavor (Project)"],
        "requirements": row["Requirements"].split(", ") or [],
        "leadsTo": row["Leads To"].split(", ") or [],
        "flavorTech": row["Flavor (Tech)"],
        "abilities": parse_tech_abilities(row["Abilities"]),
    }

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


