import os
import shutil

def copyRawCSV(old_name, new_name):
	if os.path.exists(old_name) and os.path.isfile(old_name):
		print(f"File exists. 		Moving to /CSV - '{old_name}' ")
		shutil.copy(old_name, new_name)
	else:
		print(f"File does not exist. 	Skipping. - '{old_name}' ")

copyRawCSV("data/Raw CSV/ATO Data - A_Tech (AA).csv", "data/CSV/argoAbilityData.csv")
copyRawCSV("data/Raw CSV/ATO Data - A_Tech (Production).csv", "data/CSV/productionFacilityData.csv")
copyRawCSV("data/Raw CSV/ATO Data - A_Tech (Structural).csv", "data/CSV/structuralData.csv")
copyRawCSV("data/Raw CSV/ATO Data - B_Exploration.csv", "data/CSV/explorationData.csv")
copyRawCSV("data/Raw CSV/ATO Data - C_Clue.csv", "data/CSV/clueData.csv")
copyRawCSV("data/Raw CSV/ATO Data - D_Story.csv", "data/CSV/storyData.csv")
copyRawCSV("data/Raw CSV/ATO Data - E_Doom.csv", "data/CSV/doomData.csv")
copyRawCSV("data/Raw CSV/ATO Data - F_Fated Mnemos.csv", "data/CSV/fatedMnemosData.csv")
copyRawCSV("data/Raw CSV/ATO Data - G_Mnemos.csv", "data/CSV/mnemosData.csv")
copyRawCSV("data/Raw CSV/ATO Data - H_Argonaut.csv", "data/CSV/argonautData.csv")
copyRawCSV("data/Raw CSV/ATO Data - I_Terrain.csv", "data/CSV/terrainData.csv")
copyRawCSV("data/Raw CSV/ATO Data - J_Gear.csv", "data/CSV/gearData.csv")
copyRawCSV("data/Raw CSV/ATO Data - K_Titan.csv", "data/CSV/titanData.csv")
copyRawCSV("data/Raw CSV/ATO Data - L_Condition.csv", "data/CSV/conditionData.csv")
copyRawCSV("data/Raw CSV/ATO Data - M_Trauma.csv", "data/CSV/traumaData.csv")
copyRawCSV("data/Raw CSV/ATO Data - Map Tiles.csv", "data/CSV/mapData.csv")
copyRawCSV("data/Raw CSV/ATO Data - N_Kratos.csv", "data/CSV/kratosData.csv")
copyRawCSV("data/Raw CSV/ATO Data - O_Moiros.csv", "data/CSV/moirosData.csv")
copyRawCSV("data/Raw CSV/ATO Data - P_Nymph.csv", "data/CSV/nymphData.csv")
copyRawCSV("data/Raw CSV/ATO Data - Q_Godform.csv", "data/CSV/godformData.csv")
copyRawCSV("data/Raw CSV/ATO Data - R_Attack.csv", "data/CSV/primordialAttackData.csv")
copyRawCSV("data/Raw CSV/ATO Data - R_Dahaka.csv", "data/CSV/dahakaData.csv")
copyRawCSV("data/Raw CSV/ATO Data - RTX_Trait.csv", "data/CSV/traitData.csv")
copyRawCSV("data/Raw CSV/ATO Data - S_BP.csv", "data/CSV/BPData.csv")
copyRawCSV("data/Raw CSV/ATO Data - Trait-like Cards.csv", "data/CSV/traitLikeData.csv")
copyRawCSV("data/Raw CSV/ATO Data - U_Primordial.csv", "data/CSV/primordialData.csv")
copyRawCSV("data/Raw CSV/ATO Data - W_Pattern.csv", "data/CSV/patternData.csv")
copyRawCSV("data/Raw CSV/ATO Data - Y_Payload.csv", "data/CSV/payloadData.csv")
copyRawCSV("data/Raw CSV/ATO Data - Z_Other.csv", "data/CSV/otherData.csv")

copyRawCSV("data/Raw CSV/ATO Data - Primordial Traits.csv", "data/CSV/primordialAbilityData.csv")
copyRawCSV("data/Raw CSV/ATO Data - Titan Abilities.csv", "data/CSV/titanAbilityData.csv")

#copyRawCSV("data/Raw CSV/ATO Data - Envelopes (SPOILERS).csv", "")