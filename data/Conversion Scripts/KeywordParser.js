const RAWROWS1 = [
"This item can be used as a @OneHanded Weapon, with the following modifiers: -1 @d10",
"+1 Courage. $Fate $Discard {Second Chance}",
"<Crit Evade> Place 2 {Opening} tokens in the Kratos Pool",
"$Fate {Reinforce 1}",
"$Fate $Fate $Exhaust {Block 1}. $Discard {Block 1}",
"{Opening 1}. {Reposition 2}",
"{Break 1}",
"{Reposition 1}",
"{Carving 1}. {Sacrifice}",
"{Reposition 2}. <Each Hit> {Opening 1}",
"{Break 1}. {Commit}. <Full Miss> Place 1 Break token in the Kratos Pool",
"",
"{Auto-break 2}. {Break 2}. {Power Re-roll 1}. {Cumbersome}. <Full Miss> Place 2 {Break} tokens in the Kratos Pool",
"{Carving 1}. {Opening 1}. {Sacrifice}",
"{Deadly}",
"{Ranged 4-6}. {Cumbersome}. {Commit}",
"{Ranged 2-4}. {Cumbersome}",
"{Reach 2}. <Full Hit> You may gain the @PriorityTarget Priority Target token",
"{Reach 2}. <Full Miss> Place 1 Opening token in the Kratos Pool",
"{Reach 2}. {Reposition 1}",
"<Reaction> $Fate $Exhaust {Reflex}",
"$Fate $Exhaust Gain the @PriorityTarget Priority Target token and turn to the Primordial to face you",
"<Start of Battle> Gain +1 @Fate. When you are about to exhaust a Ranged weapon, exhaust this card instead",
"$Fate $Exhaust {Stand up}",
"{Tumble}. $Fate {Reinforce 1}. $Fate $Discard {Second Chance}",
"$Fate $Exhaust {Block 1}. <Reaction> $Fate $Exhaust {Reflex}. <Full Evade> You may immediately resolve Knockback 2 against the Primordial",
"{Power Re-roll 1}",
"$Fate {Knockback Reduction 3}",
"$Fate $Exhaust Place 1 Break or 1 Opening token in the Kratos Pool",
"Unique. $Fate $Energy Place the top BP card at the bottom of the deck",
"{Knockback Reduction 2}. $Fate {Reinforce 1}. <Crit Evade> Gain {Rocksteady} until you finish resolving this Attack",
"{Knockback Reduction 1}. $Fate <Wound> {BP Suppress}. $Fate $Fate $Exhaust {Block 1}",
"{Break 1}. <Full Hit> {Diversion}. <Full Miss> Place 1 Break token in the Kratos Pool",
"{Break 1}. {Carving 1}. {Deadly}",
"{Auto-break 1}. {Power Re-roll 1}. {Pushback 1}. {Cumbersome}. <Full Miss> Place 2 Opening or 2 Break tokens in the Kratos Pool",
"Unique. -1 @Speed. {Auto-break 1}. {Pushback 1}. {Cumbersome}. <Full Miss> Place 2 Opening or 2 Break tokens in the Kratos Pool",
"$Fate $Exhaust <Start of Battle> Move up to 3 spaces and {Hide}. $Fate $Exhaust {Hide}",
"<Start of Battle> Choose 1 @OneHanded @Gear from the Argo Armory and place it under this card. This @Gear is not considered to be equipped on your Titan and can only be used with the following ability: $Fate $Exhaust Declare this @OneHanded @Gear as the Active Weapon during an Attack",
"$Fate $Exhaust Gain +2 @Speed for your next @MovementAction this turn. $Fate $Exhaust {Stand up}",
"$Fate $Exhaust During voluntary movement, treat a traversible Terrain tile as 1 space. <Reaction> $Fate $Fate $Exhaust {Reflex}",
"$Fate $Fate $Discard During an Attack, when you reveal a BP card with a Critical that creates a Vantage Point, immediately gain a Crit Chance",
"$Fate $Discard {Lifeline}",
"{Tumble}. {Vault}",
"{Diversion}. <Crit Evade> Place 1 Diversion token in the Kratos Pool",
"{Reach 2}. {Pull 1}. {Reposition 1}. During an Attack, ignore Labyrinth tiles for the purposes of Line of Sight and adjacency",
"{Ranged 2-4}. {Pull 1}. {Cumbersome}. {Commit}",
"{Ranged 3-5}. {Diversion}. {Cumbersome}. {Commit}",
"Unique. {Reach 2}. {Provoke}. {Commit}. <Full Hit> {Diversion}",
"Unique. -1 @Speed. {Auto-break 1}. {Pushback 2}. {Reach 2}. {Cumbersome}. {Commit}. <Full Miss> Place 2 Break or Opening tokens in the Kratos Pool",
"Unique. Ignore Wound Responses. <Crit Miss> Gain +2 @Danger. $Fate <Wound> {BP Suppress}",
"Unique. {Reach 2}. {Deadly}. {Provoke}. {Commit}. <Full Hit> {Diversion}",
"Unique. -1 @Speed. {Cumbersome}. {Knockback Reduction 1}. $Fate $Exhaust {Block 1}. <Full Miss> Place 1 Break token in the Kratos Pool",
"Unique. {Overbreak 2}. <Crit Miss> Gain +1 @Danger, +1 @Fate. *Dog Days Are Over:* When you deal a Critical Wound, lose -1 @Strangers",
"Unique. Ignore Wound Responses. <Full Miss> Place 1 Break or 1 Opening token in the Kratos Pool",
"Unique. {Tumble}. Ignore Crash and Obol Draws caused by {Trample}",
"Unique. Ascended. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"Ascended. <Reaction> $Fate $Exhaust When resolving an AI card, if you're not the Target, move 3 spaces in a straight line in the same direction as the Primordial",
"Unique. Ascended. {Tumble}. {Reposition 2}. $Fate $Exhaust {Dodge}",
"Ascended. You have 1 additional @Support slot",
"Unique. {Carving 1}. {Power Re-roll 1}. During an Attack, ignore Labyrinth tiles for the purposes of Line of Sight and adjacency. When you are about to gain at least 1 Despair token, roll a d10 per token. For each 6+ result, lower this gain by 1",
"Unique. $Fate $Fate $Exhaust {Provoke}. When you use Provoke on this card, place a Diversion token in the Kratos Pool",
"Unique. $Fate $Exhaust {Block 1}. $Fate $Exhaust {Superior Stanch} (@Ambrosia). <Crit Evade> Place 2 Opening and/or Break tokens in the Kratos Pool",
"$Fate {Reinforce 2}. {Ambrosia Limit 5}",
"Unique. Ascended. {Reach 2}. {Reposition 2}. {Carving 1}. Disable the [Toying|EX3219] Pursuer Trait",
"Unique. $Fate $Exhaust During an Attack, change up to 3 Break tokens in the Kratos Pool into Opening tokens or vice versa. <Crit Miss> Gain +3 @Fate or the Mazetouched Affliction",
"+1 Will. $Fate $Exhaust Ignore the effects of Despair, [Fear|AL0299] or [Dread|AL0299] until the end of your turn. $Fate $Discard {Solace}",
"Attach to a @Gear with the _Spear_ Trait. $Discard {Carving 1}",
"Unique. Ascended. Ignore Flare Primordial Responses. Disable the [Toying|EX3219] Pursuer Trait",
"Unique. {Ranged 2-4}. {Auto-break 1}. {Opening 1}. {Cumbersome}. {Commit}",
"Unique. Titan Attachment. During an Attack, ignore Labyrinth tiles for the purposes of Line of Sight and adjacency",
"Unique. Ascended. Titan Attachment. +1 to Judgement Tests. $Discard When you are about to die from the [Fear|AL0299] or [Dread|AL0299] Condition cards, ignore this death. $Discard When you are about to die from Despair, ignore this death and lower the number of your Despair tokens to 3",
"Unique. {Argonaut Possession}. Titan Attachment. <Start of Battle> Gain +1 @Rage. <Start of your turn> Gain +1 @Danger. *Stone Threshold:* When you gain this card, the threshold is 0 (note it on your Argonaut Sheet). <End of Battle> Roll a die, if it's above the Stone Threshold, raise the Stone Threshold by 1. If it's equal or below, pass the Stones (remove them from the game) and gain 1 Mnemos node.<<NL>>If you experience a Dream of Pharos while you have the Eschaton Stones, see Dream 11 (Cycle I Storybook)",
"{Knockback Reduction 1}. {Pushback Reduction 1}. <Start of your turn> Unexhaust this card. <Crit Evade> You may immediately perform {Pushback 2}",
"{Opening 1}. $Fate {Transform}. $Fate $Exhaust {Block 1}",
"$Fate {Transform}. $Fate $Discard {Second Chance}",
"Attach to a Weapon or Armor with the _Shell_ Trait. That @Gear becomes _Labyrinthized_ (becomes Power Level II). It loses the _Shell_ Trait and gains this Attachment's Traits instead. <End of Battle> Permanently lose this card and the @Gear card it is attached to",
"{Auto-break 1}. {Overbreak 1}. {Cumbersome}. <Full Miss> Place 1 Break token in the Kratos Pool",
"{Auto-break 1}. {Opening 1}",
"$Fate {Transform}. {Power Re-roll 1}. {Break 1}",
"$Fate {Transform}. {Reach 2}. {Provoke}. {Opening 1}",
"<Reaction> $Fate $Energy {Combo Breaker: 2 spaces}",
"Unique. Mount. Weighty. -1 @Speed. You may reduce suffered Knockbacks and Pushbacks by 1. You cannot {Jump} or {Vault}",
"$Fate $Discard {Solace}. $Fate $Exhaust When you are about to gain @Rage from an effect other than your Attack, ignore this gain",
"Ignore the {The Strong Eat} Trait",
"Cannot be involuntarily exhausted. $Fate $Exhaust Ignore an involuntary exhaust of a Weapon. <Reaction> $Fate $Exhaust {Reflex}",
"Unique. +1 Courage. +1 Will. $Fate $Exhaust Lower adjacent Titan's @Danger by half (rounding up). Gain that many @Danger. $Fate $Exhaust Lower your @Danger by half (rounding up). An Adjacent Titan gains that many @Danger",
"-1 @Speed. You cannot {Jump} or {Vault}. $Fate $Exhaust <Start of Battle> Move up to 4 spaces and {Hide}. $Fate $Exhaust {Hide}",
"$Fate $Exhaust {Superior Stanch} (@Ambrosia)",
"Ignore the Ambrosia gain from Ambrosia Terrain tiles",
"Unique. {Evolving}. {Opening 1}. <Start of Battle> Gain the [Dread|AL0299] Condition card. When you gain negative Precision tokens, you may gain the [Fear|AL0299] (1 token) or [Dread|AL0299] (2 tokens) Conditon card instead. <Crit Miss> Place a Labyrinth tile under your Titan, [Knockdown]",
"Unique. Evolved. {Reach 2}. {Opening 2}. <Start of Battle> You may gain the [Dread|AL0299] Condition card. <Wound> You may change 1 negative Precision or Evasion token into a positive one, or lose @Danger equal to the wounded BP's level. When you resolve the _Face Your Fear_ effect of a [Fear|AL0299] or [Dread|AL0299] Condition card, gain +1 additional positive Precision token",
"$Fate {Transform}. {Reach 3}. {Pull 1}. {Opening 1}",
"$Fate {Transform}. {Reposition 1}. {Break 1}",
"{Daze}. {Pushback 1}. {Break 1}. $Fate $Fate $Exhaust {Block 1}",
"{Ranged 2-4}. {Opening 2}. {Cumbersome}",
"$Fate $Discard {Lifeline}. After you use {Lifeline}, place an L Labyrinth under your Titan and suffer [Knockdown|AL0299]",
"Unique. You have +1 Precision for each adjacent Titan. You may treat your @Danger as 2 higher for the purpose of @Danger Gate abilities of your Labyrinth @Gear cards",
"{Inspire 1}. <Reaction> $Fate $Exhaust Other Titans treat you as an indestructible obstacle until the end of this Round",
"$Fate $Fate {Precise}. {Reposition 3}. <Each Hit> {Opening 1}",
"{Reach 2}. {Provoke}. {Pull 2}. {Opening 1}",
"{Overbreak 2}. {Fire 3}. {Perishable}",
"$Fate {Reinforce 1}. $Fate $Fate $Exhaust {Rocksteady}",
"-1 @Speed. {Daze}. <Reaction> $Fate $Exhaust {Self Combo Breaker: 2 spaces}",
"{Auto-break 1}. {Break 1}. {Elation 1}",
"$Fate {Transform}. {Auto-break 2}. {Fire 1}",
"{Commit}. $Fate {Transform}. {Ranged 4-6}. {Opening 1}. {Cumbersome}",
"$Fate {Vault}",
"Gain +1 @Power against Prisoners! BP cards and ignore their Wound Responses. When you are about to suffer a Warriors effect, roll a @d10. On 7+, ignore it. $Fate $Exhaust When you are about to perform a Scouting test, add +2",
"Gain +1 @Power against Prisoners! BP cards and ignore their Wound Responses. When you are about to suffer a Warriors effect, roll a @d10. On 8+, ignore it. $Fate $Exhaust When you are about to perform a Treasure or Scouting test, add +1",
"<Reaction> $Fate $Exhaust {Advanced Reflex}",
"$Fate {Jump}. $ComplicatedAction $Fate {Rush}",
"{Tumble}. <Reaction> $Fate $Exhaust {Combo Breaker: 4 spaces}",
"Cannot be involuntarily exhausted. <Reaction> $Fate $Exhaust Unexhaust any 1 @Gear",
"Unique. {Break 2}. {Cumbersome}. {Commit}. <Full Miss> Place 2 Break tokens in the Kratos Pool. $Fate <Wound> {BP Suppress}",
"Unique. {Reach 2}. {Opening 2}. $Fate $Fate {Heartseeker}. {Cumbersome}",
"Unique. {Elation 1}. {Auto-break 1}. {Sacrifice}. <Reaction> Immediately {Pushback 2}",
"Unique. {Auto-break 2}. {Fire 1}. {Ranged 4-7}. {Cumbersome}. {Commit}. $Fate <Wound> {BP Suppress}",
"Unique. {Masterwork}. {Carving} 2. {Break 1}. {Sacrifice}",
"Unique",
"Unique. {Masterwork}. {Ambrosia Limit +1}. <Reaction> $Fate $Exhaust {Combo Breaker: 3 spaces}",
"Unique. {Masterwork}. {Vault}. {Opening 2}. <Full Hit> {Precise}",
"Unique. Treat all Primordial Attacks performed against you as Doomed. $Fate $Energy Scry: Guess the AT value of the top BP card and then look at it. If you guessed correctly, leave the card on top. If you didn't, gain @Danger equal to this BP's level and put it at the bottom of the deck",
"Unique. {Ambrosia Limit +1}. $Fate $Fate $Discard When you are about to die from an Instant Death effect, draw an Obol instead. You may treat your @Danger as 2 higher for the purpose of DangerGate abilities of your Cyclopean @Gear cards",
"Unique. {Masterwork}. {Fire 2}. {Auto-break 2}. {Daze}. {Cumbersome}. {Commit}. <Crit Miss> Cyclopes: Diplomacy -1",
"{Knockback Reduction 1}. {Pushback Reduction 1}. $Fate $Exhaust {Rocksteady}",
"{Daze}. {Knockback Reduction 1}. {Pushback Reduction 1}. $Fate $Exhaust {Block 1}",
"$Fate {Transform}. <Reaction> $Fate $Exhaust {Reflex}. After you resolve a Trauma Draw, you may immediately {Pushback 1}",
"$Fate {Transform}. Add +4 to Climb tests. $Fate $Exhaust {Jump}",
"{Ambrosia Limit 5}. $Fate $Exhaust {Superior Stanch} (@Ambrosia)",
"{Ambrosia Limit 5}. If you are on an Ambrosia Terrain tile, you gain +1 @Evasion. You can perform Armor Rolls to lower @Danger from the {Digestive Acids} Trait",
"$Fate $Fate {Precise}. {Opening 2}. {Power Re-roll 1}. <Reaction> $Fate $Exhaust {Self Combo Breaker: 2 spaces}",
"$Fate {Jump}. {Reach 2}. {Opening 2}. {Vault}. $Fate $Exhaust *Pole Vault*: When the Primordial moves adjacent to you during its movement, immediately perform a VP Climb test, adding +2 to the result",
"{Auto-break 1}. {Opening 1}. {Overbreak 1}. $Fate $Fate {Heartseeker}",
"Unique. {Auto-break 1}. {Overbreak 2}. {Daze}. {Armor-piercing}. <Crit Miss> Gain +1 @Rage and immediately fully miss the Attack",
"$Fate {Transform}. {Reach 2}. {Auto-break 2}. {Fire 2}. $Fate $Exhaust When performing a Power Roll, gain {Armor-piercing}",
"$Fate {Transform}. $Fate {Jump}. $Fate $Exhaust Before the Power Roll, if the BP card has a Response that creates a VP, immediately perform a Climb test, adding +2 to the result",
"{Ranged 2-3}. {Fire 2}. {Opening 1}. {Armor-piercing}. {Cumbersome}. Ignore the {Metamorphosis} Trait. {Commit}. <Crit Miss> Gain +2 @Danger",
"{Daze}. {Break 3}. {Armor-piercing}. {Cumbersome}. {Commit}. <Full Miss> Place 2 Break tokens in the Kratos Pool",
"{Power Re-roll 2}. {Reposition 2}. {Break 1}. {Opening 1}. When you attack from a VP or while Absorbed, gain +1 @Power",
"Unique. {Break 2}. {Elation 1}",
"Unique. {Break 2}. {Elation 1}. Ignore the {Metamorphosis} Trait",
"Unique. {Overbreak 2}. {Break 3}. {Daze}. {Armor-piercing}. {Pushback 2}. -1 @Speed. {Cumbersome}. {Commit}. <Full Miss> Place 2 Break tokens in the Kratos Pool",
"Unique. Evolved. {Reach 2}. {Break 2}. {Cumbersome}. <Start of Battle> Gain the [Bellerophonic|BL0665] Condition card. $Energy $Fate When performing an Attack, one @BlackPowerDie becomes @WhitePowerDie, gain {Overbreak 1} and {Armor-piercing}",
"Unique. {Break 1}. {Daze}. <Crit Miss> Gain +1 @Rage",
"Unique. {Break 1}. {Daze}. <Crit Miss> Gain +1 @Rage",
"Unique. {Evolving}. {Daze}. {Break 3}. {Cumbersome}. <Crit Miss> Gain +2 @Danger. *Evolution*: Deal the Wound that slays a Primordial 3 times. *Reward*: [Bellerophon|BJ0939] @Gear card",
"Unique. Titan Attachment. {Titan Possession}. {Elation 1}. <Start of Battle> Gain 1 Ambrosia token. Ignore the Ambrosia gain from Ambrosia Terrain tiles",
"Unique. {Inspire 1}. {Motivate 1}. When @Danger is dealt to you, place 1 Opening or 1 Break token in the Kratos Pool",
"Unique. {Ascended}. {Transform}. {Auto-break 1}. {Pushback 2}",
"Unique. {Ascended}. {Transform}. {Reach 2}. {Opening 2}. {Armor-piercing}. {Pull 2}",
"$Fate $Exhaust {Block 1}. {Ascended}. {Break 1}. {Daze}. {Kickback Reduction 1}",
"{Ascended}. $Fate $Exhaust {Kickback Reduction 3}, {Knockback Reduction 3}, {Pull Reduction 3}",
"{Ascended}. {Kickback Reduction 1}. $Fate $Exhaust {Roll Out}. $Fate $Exhaust {Stand up}",
"$Fate $Exhaust {Roll Out}. {Ascended}. {Kickback Reduction 1}. $Fate $Exhaust {Superior Stanch} (@Ambrosia)",
"Unique. Titan Attachment. {Titan Possession}. Must start Battle this side up. <Start of Battle> Gain 1 Ambrosia token",
"Unique. {Vault}. {Reposition 1}. Wisdom -1. When you {Transform} to this side, discard 1 Ambrosia token",
"Unique. {Ambrosia Limit 5}. You can perform Armor Rolls to lower @Danger from the {Digestive Acids} Trait. $Fate $Exhaust {Superior Stanch} (@Ambrosia)",
"Unique. {Fire 1}. {Inspire 1}. {Motivate 1}. <Start of Battle> Gain +1 @Rage and 1 Ambrosia token. <Reaction> $Fate $Exhaust {Combo Breaker: 5 spaces}",
"Unique. Titan Attachment. {Titan Possession}. +1 Precision. Must start battle this side up. <Start of Battle> Gain 1 Ambrosia token",
"Unique. {Opening 3}. {Deadly}. $Fate $Fate {Precise}. When you {Transform} to this side, discard 1 Ambrosia token",
"Unique. {Fire 2}. {Opening 2}. *Must start Battle this side up*. $Ambrosia $Fate {Hide}. When you use this ability: Immediately {Transform}. While in the Blindspot, you have {Armor-piercing}. <Crit Miss> Gain 2 Ambrosia tokens",
"Unique. {Opening 2}. {Auto-break 1}. {Power Re-roll 1}. When on a Rear space, gain +1 @Power. When on a Blindspot space, gain {Armor-piercing}. When you lose Hidden: Immediately {Transform}. <Crit Miss> Gain 2 Ambrosia tokens",
"Unique. {Argonaut Possession}. {Deadly}. {Auto-break 2}. <Start of Battle> Gain the [Hatred|BL0661] Condition card. <Wound> Once per turn you may draw an Obol. If you survive, immediately perform a Bonus Attack! *Fail*: Draw an Obol when you finish resolving this Attack",
"Unique. {Fire 1}. {Titan Possession}. {Power Re-roll 2}. <Start of Battle> Gain the [Berserk|AN0374] Kratos card, ignore the associated @Rage gain. *Blood Currency*: When you Wound with the _Red Polis_, place 1 generic token on this card. You have {Auto-break X}, where X is the number of generic tokens on this card",
"Unique. When you attack a BP I, gain {Overbreak 1}. When you attack a BP III, gain {Auto-break 1}. $Fate When you are about to attack, change your Weapon Trait from Blade to Sword, Club, or Spear. Gain {Fire 1} for that Attack. You gain the following bonuses based on the current Trait: *Spear*: {Opening 2}; *Sword*: {Power Re-roll 2}; *Club*: {Break 2}",
"Unique. Knockback 2. {Break 2}. {Cumbersome}. Ignore the {Lumbering} Trait. {Knockback Reduction 2}. {Pushback Reduction 2}. {Kickback Reduction 2}. $Fate $Fate {Block 1}. <Crit Miss> Gain +2 @Danger",
"Unique. {Inspire 1}. X is equal to a third of the number of @Refugees on the Argo (rounding up)",
"Unique. $Fate $Fate {Transform}. *Smart Delivery*: During their turn, a Titan with a free Weapon slot may lose -1 @Rage to immediately gain _Peaceful Transition_ (even from the Argo Armory)",
"Unique. {Ranged 2-3}. {Fire 3}. {Opening 1}. {Armor-piercing}. {Cumbersome}. Ignore the {Metamorphosis} Trait. {Commit}. <Crit Miss> Gain +3 @Danger and permanently lose this card",
"Unique. {Ascended}. <Reaction> $Fate $Exhaust {Superior Reflex}",
"Unique. {Ascended}. +1 @Speed. {Tumble}. <Reaction> $Fate $Exhaust {Combo Breaker: 3 spaces}",
"Unique. {Ascended}. Titan Attachment. {Restricted} (_Cryptex_). +1 Precision. {Frontlines}. $Fate {Semi Sync: Gain a @MovementAction. At the end of your turn, gain a @MovementAction Fatigue token}",
"Unique. {Ascended}. {Reach 3}. {Opening 2}. {Carving 1}. Can only be equipped by a Titan with the [Repurposed Cryptex|BJ0967]. <Reaction> Immediately {Pushback 2}. <Crit Miss> @Adversary. Gain the [Sowed|CF1269] Fated Mnemos (secret deck 7, card 82)",
"Unique. {Motivate 2}. When you are about to suffer a Warriors effect, roll a @d10. On 7+, ignore it. $Fate $Energy Place the top BP card at the bottom of the BP deck",
"Unique. {Ascended}. {Daze}. {Black 2}. {Cumbersome}. The Rock: During the second ability window, you may gain +X @Danger to place X Opening tokens in the Kratos Pool. $Fate $Exhaust *Sisyphean Rebound*: Arrive from [Time-clocked|CL1295] or ignore Rewind. *Evolution*: If M10 is marked. *Reward*: [Sisyphus's Triumph|BJ0971] @Gear card",
"Unique. {Ascended}. Evolved. {Reach 2}. {Daze}. {Hope 2}. {Burden 1}. {Provoke}. {Cumbersome}. *The Rock Transcendent*: During the second ability window, place X Opening and X Break tokens in the Kratos Pool, where X is the number of Condition tokens you have. $Fate $Exhaust *Sisyphean Rebound*: Arrive from [Time-clocked|CL1295] or ignore Rewind, then gain 1 positive Precision token",
"Attach to a Weapon or Armor with the _Labyrinth_ Trait. That @Gear becomes _Excavated_ (Power Level III). It loses the _Labyrinth_ Trait and gains this Attachment's Traits and {Reposition 1}. <End of Battle> Permanently lose this card and the @Gear card it is attached to",
"Unique. Ascended. {Reach 2}. {Reposition 2}. {Opening 2}. While in the Blindspot, you have {Deadly}. <Crit Chance> {Break 2}",
"Unique. Ascended. <Reaction> $Fate $Exhaust When resolving an AI card, if you're not the Target, move up to 3 spaces in a straight line in the same direction as the Primordial. During this movement, you ignore all Terrain tiles, but you cannot end it on an Obstacle or Chasm",
"{Black 1}. {Opening 2}. {Reposition 1}. <Start of Battle> Gain 1 Ambrosia token",
"{Break 1}. {Fire 1}. {Reposition 1}. <Start of Battle> Gain 1 Ambrosia token",
"{Reposition 2}. {Spiral 3}. <Each Hit> {Opening 1}. <Start of Battle> Gain 1 Ambrosia token",
"$Fate $Fate {Block 1}. <Start of Battle> Gain 1 Ambrosia token. <Full Hit> One @RedPowerDie becomes @BlackPowerDie",
"{Reach 2}. {Fire 1}. {Opening 1}. {Reposition 1}. <Start of Battle> Gain 1 Ambrosia token",
"{Attack Re-roll 1}. {Cumbersome}. {Ranged 2-5}. {Fire 1}. {Reposition 1}. <Start of Battle> Gain 1 Ambrosia token",
"{Tumble}. <Start of Battle> Gain 1 Ambrosia token",
"{Kickback Reduction 1}. {Knockback Reduction 1}. {Pull Reduction 1}. {Pushback Reduction 1}. <Start of Battle> Gain 1 Ambrosia token. $Fate $Exhaust Gain 1 Ambrosia token to discard 1 Bleeding token",
"$Fate $Exhaust {Block 1}. <Start of Battle> Gain 1 Ambrosia token",
"$Fate $Exhaust Arrive from [Time-clocked|CL1295]. $Fate $Exhaust When you are about to suffer [Bleeding|CL1283] Buildup, ignore it",
"$Danger $Exhaust {Temporal Reflex}. $Fate $Exhaust When you are about to resolve involuntary movement onto or beyond the [Timefront|CI1310], stop adjacent instead",
"$Fate $Exhaust If the Kratos Pool is empty, place 2 Opening tokens and 1 Break token in the Kratos Pool",
"$Exhaust $Energy Lose -1 @Fate",
"{Ambrosia Limit 5}. <Reaction> $Fate $Exhaust {Reflex}",
"{Motivate 1}. {Bleeding Limit 5}. For each @Danger mitigated, you may move your Time Anchor 1 space",
"{Spiral 1}. {Pull Reduction 2}. After an Attack against you is resolved, move up to 1 space. $Fate $Exhaust {Dodge}",
"{Break 2}. {Assist 1}. {Trauma Trick}. $Fate {Transform}. $Danger $Exhaust {Block 1}. *Stem:* {Stanch} (Bleeding)",
"{Ranged 3-6}. {Opening 2}. {Reposition 1}. {Cumbersome}. $Fate {Precise}. $Fate {Transform}. {Fail Trick}",
"{Break 2}. {Opening 1}. {Reach 2}. {Assist 1}. $Fate {Transform}. {Wound Trick}",
"{Wound Trick}. $Fate {Heartseeker}. $Fate {Transform}",
"{Break 1}. {Opening 1}. {Reposition 1}. {Ranged 2-5}. {Cumbersome}. {Fail Trick}. $Fate {Transform}",
"{Overbreak 1}. {Carving 1}. {Deadly}. {Clutch}. {Trauma Trick}. $Fate {Transform}",
"{Break 2}. {Spiral 1}. $Fate {Heartseeker}",
"{Spiral 2}. {Opening 2}. {Assist 2}. {Reposition 2}",
"{Spiral 1}. {Black 2}. {Reposition 1}. {Ranged 2-4}. {Cumbersome}. <Start of Battle> Gain 1 Ambrosia",
"{Opening 1}. {Spiral 1}. {Reposition 3}",
"{Spiral 2}. {Rouse 1}. {Bleeding Limit 5}. +1 to Judgements tests. <Start of Battle> Gain 1 Ambrosia token",
"$Fate $Exhaust Place the Recall Shell on your space (mark it with a generic token). You can have one Recall Shell at a time. $Fate $Exhaust Place your Titan on your Recall. Treat this as voluntary movement",
"$Exhaust $Energy Lose -1 @Fate",
"$Fate $Exhaust When you are about to suffer {Rewind}, ignore it. $Fate $Exhaust When you are about to suffer Knockdown, suffer [Time-clocked|CL1295] instead",
"$Fate $Exhaust Unexhaust any 1 @Gear. $Fate $Discard Exchange this card for another @Support from the Argo Armory",
"Unique. {Awakening Lock}. {Mnestis Prohibited}. $Danger $Exhaust {Temporal Reflex}. $Discard When you die, lose 1 Titan from the Argo to come back to life at your Time Anchor",
"$Fate $Exhaust $ComplicatedAction {Improved Rush}. $Fate $Exhaust When you are about to suffer Knockdown, suffer [Time-clocked|CL1295] instead",
"<Reaction> $Fate $Exhaust {Advanced Reflex}. $Fate $Exhaust Discard 1 Bleeding token",
"$Fate $Exhaust Unexhaust any 1 @Gear. $Fate $Discard Exchange this card for another @Support from the Argo Armory",
"$Fate $Exhaust Move the top card from the BP discard to the top of the BP deck",
"$Fate $Exhaust Reestablish your Time Anchor. You may use this ability as a free action or at the end of your turn",
"$Fate $Exhaust Discard up to 2 Bleeding tokens from yourself or an adjacent Titan",
"{Pull Reduction 2}. Ignore {Slippery} Terrain movement restrictions. Gain {Rocksteady} on Slippery Terrain",
"$Fate $Energy $Exhaust Move a Rapid Adaptation token 1 space to the left or right on the [Icarian Adaptaion Board|CX1697]",
"Ignore {Slippery} Terrain movement restrictions. Gain {Reposition 2} on Slippery Terrain. <Reaction> $Fate $Exhaust {Reflex}. $Fate $Exhaust For the purpose of voluntary movement, treat a Slippery Terrain tile as 1 space",
"{Stalwart}. If you have exactly 1 Bleeding token, ignore the [Bleeding|CL1283] condition",
"{Pull Reduction 2}. $Fate $Fate $Exhaust {Block 1}",
"{Reach 2}. {Fire 2}. {Opening 1}. {Assist 2}. {Clutch}. $Fate $Energy When you are about to attack, gain +1 @RedPowerDie",
"{Break 3}. {Wound Trick}. {Succor}. $Fate {Transform}. {Cumbersome}",
"{Opening 2}. {Power Re-roll 1}. {Fail Trick}. {Assist 2}. {Reposition 1}. $Fate Transform}",
"{Opening 1}. {Break 1}. {Black 1}. {Wound Trick}. {Reposition 1}. $Fate {Transform}",
"{Reach 2}. {Break 2}. {Black 1}. {Fail Trick}. {Commit}. $Fate {Transform}. {Cumbersome}",
"Unique. $Fate $Exhaust {Vault}. $Energy $Fate $Exhaust {Scale}",
"Unique. Ascended. {Reposition 1}. When you are about to gain any @Fate as an ability cost, you may gain +1 @Danger instead of +1 @Fate (once per Round)",
"Unique. Ascended. {Reposition 1}. When you attack for the first time each Round, lose -1 @Fate. At the end of the TItan Round, if you didn't attack this Round, gain +2 @Fate",
"Unique. Ascended. {Motivate 1}. At the end of the Titan Round, if you didn't attack this Round, lose -1 @Fate",
"Unique. Ascended. Each time you survive an Obol, place 1 generic token on this card. Next time you perform an Awakening roll, add +X to your roll, where X is the number of tokens on this card. Then, discard all tokens on this card",
"Unique. {Fire 2}. {Black 2}. {Auto-black 1}. {Reposition 2}. {Commit} (@Fate @Energy). $Fate $Exhaust Discard 2 Bleeding tokens. <Crit Miss> Gain +3 @Danger. *Witness:* You are never considered to be on a shaded space",
"Unique. {Reposition 2}. {Reach 2}. {Fire 1}. {Opening 2}. {Spotlight}. {Commit} (@Fate @Energy). $Fate {Provoke}",
"Unique. {Ranged 2-3}. {Fire 1}. {Opening 3}. {Spiral 1}. {Cumbersome}. Ignore the {Rapid Adaptation} Trait. {Commit} (@Fate @Energy). <Crit Miss> Gain +2 @Danger",
"Unique. {Ranged 3-5}. {Fire 3}. {Black 1}. {Auto-black 1}. {Reposition 1}. {Cumbersome}. {Commit} (@Fate @Energy). $Fate $Exhaust Discard 1 Bleeding token. *Witness:* You are never considered to be on a shaded space",
"Unique. {Fate Armor}. You have 1 additional @Support slot. *Witness:* You are never considered to be on a shaded space. <Crit Evade Fail> {Knockdown}. *Kneel:* During your turn, as a free action, you may voluntarily suffer Knockdown",
"Unique. {Spiral 1}. {Hope 2}. {Opening 2}. {Clutch}. {Commit}",
"Unique. {Spiral 3}. {Hope 1}. {Break 3}. {Auto-break 1}. {Assist 2}. {Reposition 1}",
"Unique. {Inspire 1}. {Rocksteady}. $Fate $Discard {Shaded}",
"Unique. {Inspire 1}. {Tumble}. {Vault}. {Reposition 2}",
"Unqiue. {Inspire 1}. {Spiral 1}. {Hope 2}. {Opening 2}. {Reposition 1}. {Succor}. $Fate $Exhaust {Block 1}. $Fate $Discard {Shaded}.  ",
"{Fate Armor}. $Fate $Exhaust Reestablish your Time Anchor. You may use this ability as a free action or at the end of your turn. If you are on your Time Anchor, this card has +1 @RedArmorDie",
"{Opening 2}. {Hope 1}. {Reposition 2}. $Fate $Exhaust {Block 1}. +1 @Evasion on your Time Anchor",
"Attach to a Ranged Weapon. When you attack with that Weapon while on a Time Anchor, gain {Opening 1}, {Break 1}, {Hope 1}",
"<Each Hit> {Opening 1} and {Reposition 1}",
"{Opening 2}. {Black 2}. {Spiral 2}. When you attack with this Weapon while on a Time Anchor, gain +1 @Power, {Pushback 1}. <Crit Miss> Gain +1 @Fate",
"Unique. {Inspire 1}. {Motivate 2}. {Motivate 1}. If your Total Power is higher than the @AT by at least the number of Time Anchors on the Board, reestablish any Time Anchor on your space",
"Unique. {Auto-break 1}. {Break 2}. {Reposition 1}. {Cumbersome}. {Commit}. <Full Miss> Place 2 Break and/or Opening tokens in the Kratos Pool",
"Unique. {Auto-break 1}. {Black 2}. {Reposition 2}. {Cumbersome}. {Commit}. <Full Miss> Place 2 Black and/or Opening tokens in the Kratos Pool",
"Unique. {Auto-break 1}. {Hope 2}. {Reposition 3}. {Cumbersome}. {Commit}. <Full Miss> Place 2 Hope and/or Opening tokens in the Kratos Pool",
"{Fate Armor}. $Fate *Stem:* {Stanch} (@Bleeding)",
"{Pull Reduction 2}. {Reposition 1}. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"{Reach 2}. {Pull 3}. {Opening 2}. {Black 1}. {Spiral 2}. {Fail Trick}. $Fate {Transform}. {Commit}",
"{Break 2}. {Spiral 3}. {Trauma Trick}. {Reposition 2}. $Fate {Transform}. $Fate $Exhaust {Block 1}",
"{Break 2}. {Black 1}. {Spiral 1}. {Daze}. {Pushback 2}. {Cumbersome}. {Wound Trick}. $Fate {Transform}",
"{Opening 3}. {Spiral 3}. {Reach 2}. {Reposition 2}. {Succor}. {Trauma Trick}. $Fate {Transform}",
"{Clutch}. {Deadly}. {Pushback 2}. {Trauma Trick}. $Fate {Transform}",
"$Fate {Transform}. {Break 3}. {Ranged 2-3}. {Reposition 2}. {Assist 1}. {Wound Trick}. {Cumbersome}. If you can't wield @ThreeHanded Weapons, {Commit}",
"Unique. {Opening 2}. {Pushback 2}. {Assist 1}. {Wound Trick}",
"Unique. {Reposition 2}. {Wound Trick}. {Commit} (@Fate @Fate)",
"Unqiue. {Ranged 2-4}. {Fire 3}. {Reposition 1}. {Fail Trick}. {Cumbersome}. {Commit}. $Fate $Exhaust Discard 2 Bleeding tokens",
"Unique. {Pushback 2}. {Fire 2}. {Inspire 1}. {Fail Trick}. {Commit}. <Full Miss> Place 2 Fire tokens in the Kratos Pool",
"Unique. {Reach 2}. {Fire 1}. {Hope 1}. {Opening 3}. {Black 1}. {Reposition 1}. <Full Miss> Place 2 Hope tokens in the Kratos Pool. For purposes of the _Rapid Adaptation_ Trait, this Weapon can have any Weapon Trait",
"{Inspire 1}. $Fate $Exhaust When you are about to Attack, change up to 4 Break tokens in the Kratos Pool into Opening tokens or vice versa. $Fate {Quantum}",
"{Fate Armor}. You have 1 additional @Support slot for a @Gear with the _Paradox_ Trait. $Fate $Discard {Second Chance}. $Fate $Exhaust Reestablish your Time Anchor. You may use this ability as a free action or at the end of your turn",
"{Opening 2}. {Hope 2}. {Assist 2}. {Reposition 1}. $Fate $Fate $Exhaust {Block 1}",
"{Clutch}. {Spiral 1}. {Black 3}. {Auto-black 1}. {Cumbersome}. {Commit}. <Full Miss> Place 2 Black tokens in the Kratos Pool",
"Unique. $Fate $Exhaust {Scale}. $Fate $Exhaust When you fail the Hold on test, instead of suffering the Falling Down effect, move 2 spaces. $Discard {Lifeline}",
"Unique. {Fire 4}. {Cumbersome}. {Commit}. <Crit Miss> Gain +2 @Danger",
"Unique. {Hope 4}. {Cumbersome}. {Commit}",
"Unique. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. +2 Precision. $Fate {Full Sync}. <Crit Miss> {Time-clocked}",
"Unique. Attach to a Weapon @Gear card. The Weapon this is attached to gains +1 @d10. For the purposes of geathering your Power Pool, ignore any hits that exceed your Weapon's regular @d10 value",
"Unique. {Opening 2}. {Fire 2}. {Power Re-roll 1}. <Wound> AFter you finish resolving this Attack, discard this Weapon. If the Phoenixiphos is discard for any reason, set it aside. It re-appears in its wielder's hand at the start of their turn",
"Unique. {Inspire 1}. {Motivate 1}. Titan Attachment. <Start of Battle> Draw an Obol without resolving its effect. The First time you draw an Obol during this Battle, find and resolve the card you drew at the Start of Battle instead",
"Unique. $Energy When you are about to be dealt @Danger, resolve the Trauma Draw before, instead of after, gaining @Danger. This ability is disabled if you have 9 @Danger",
"Unique. {Spiral 3}. {Hope 1}. {Opening 2}. $Fate $Exhaust {Block 1}. $Fate $Exhaust {Superior Stanch} (@Ambrosia)",
"Unique. {Ascended}. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. +1 Precision. $Fate {Semi Sync: Gain a @MovementAction. At the end of your turn gain a @MovementAction Fatigue token}. <Reaction> $Fate $Exhaust {Reflex}",
"Unique. {Ascended}. Titan Attachment. {Restricted} (_Cryptex_) {Frontlines}. +1 Precision. $Fate $Fate <Start of Battle> You may perform a bonus turn before the Primordial. At the end of this turn gain a @CombatAction Fatigue token. <Reaction> $Fate $Exhaust {Reflex}",
"Unique. Ascended. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. {Break 1}. $Fate {Priming}. <Reaction> $Fate $Exhaust {Reflex}",
"Unique. Ascended. {Hope 1}. {Daze}. {Midas Immune}. {Knockback Reduction 2}. $Fate $Exhaust {Block 1}",
"Ascended. $Fate $Exhaust {Kickback, Knockback, Pushback Reduction 3}. Ignore Slippery Terrain movement restrictions. Gain {Rocksteady} on [Irem Tower|DI2028] Terrain tiles",
"Ascended. {Knockback Reduction 2}. $Fate $Exhaust {Stand up}. $Fate $Exhaust {Roll Out}. $Fate $Discard {Wish Armor}",
"Ascended. +1 @Speed. {Kickback Reduction 1}. $Fate $Exhaust {Roll Out}. $Fate $Exhaust {Superior Stanch} (@Ambrosia). $Fate $Fate $Exhaust {Wish Armor}",
"Unique. {Opening 2}. {Hope 2}. {Clutch}. {Succor}. {Deadly}. {Auto-break 2}. When another Titan draws a _You Died_ Obol, you may resolve that Obol instead. <Crit Miss or Crit Chance> @Adversary",
"Mnestis. Unique. {Motivate 2}. {Reposition 3}. {Bypass}. +1 @Speed. *The Gauntlet:* If you don't move during your turn, you die",
"Mnestis. Unique. {Commit}. {Reach 2}. {Knockback 2}. -1 @Speed. {Cumbersome}. Gain +1 @Power for each adjacent Titan. <Full Miss> Place 3 Break or 3 Opening tokens in the Kratos Pool. <Wound> Suffer {Knockback X}, where X is equal to the number of hits",
"Mnestis. Unique. {Commit}. {Reach 2}. {Deadly}. $Fate {Rewind}. {Auto-black 1}. {Provoke}. {Pull 3}. If you gain the @PriorityTarget Priority Target token by using Provoke, gain +1 @Power for this Attack. For each '10' rolled on a Crit Die, gain +1 @Power. <Full Hit> {Break 2}, {Opening 2}",
"Mnestis. Unique. {Auto-hope 1}. {Overbreak 3}. {Opening 2}. {Spiral 2}. <Crit Chance> {Clutch}. If you use Spiral X, gain {Hope X}. *Promise Me:* If you are forced to discard this card, immediately gain [The Promise|AJ0258] @Gear card, with 2 positive Precision tokens and +2 @Power on it",
"Mnestis. Unique. {Cumbersome}. {Ranged 3-7}. {Reposition 2}. {Opening 3}. {Fire 2}. {Assist 3}. One @d10 (non-Crit one) always hits. *Olympian Prey:* If you don't attack with this Weapon during your turn, draw an Obol",
"Mnestis. Unique. {Auto-fire 2}. {Opening 2}. {Pushback 1}. *The Spark:* When resolving the Attack, do not discard Fire tokens from the Kratos Pool. If you would run out of Fire tokens to place, discard the First Blade. *The Mark:* If you start your turn adjacent to another Titan, they die",
"Mnestis. Unique. {Reach 2}. {Hope 2}. {Attack Re-roll 1}. {Opening 2}. *Temperance:* When you deal a Wound with this Weapon, gain 1 Cool token (mark it with a generic token) and place it here OR discard 1 Midas token. <Start of your turn> You may discard X tokens from this card to lose -X @Rage. <Reaction> $Fate $Exhaust {Self Combo Breaker: 4 spaces}",
"Mnestis. Unique. {Reach 2}. {Opening 3}. {Fire 2}. {Daze}. $Fate <Wound> {AI Suppress}. X is equal to the number of _Dream of Pharos_ adventures you've resolved in any singular multi-Cycle campaign (max 9)",
"Mnestis. Unique. {Opening 2}. {Break 4}. {Knockback 4}. {Daze}. {Armor-piercing}. $Fate {Combo Breaker: 6 spaces}. $Fate *Knock Knock:* The Primordial loses Lumbering. *Rock of Ages:* Regardless of @AT, if you get maximum @Power from your dice, you successfully Wound",
"Mnestis. Unique. {Black 2}. {Burden}. {Elation 1}. {Succor}. {Ambrosia Limit 3}. You may perform {Unholy Alchemy} as a free action. Ignore the {Metamorphosis} Trait. Ignore the {Rapid Adaptation} Trait",
"Mnestis. Unique. {Motivate 1}. Motivate 1. Motivate 1. {Inspire 1}. {Rouse}. {Despair Limit +2}. *Heavy is the Head:* Ignore Instant Death effects. Always perform an Obol Draw from two Obols. Always perform an Obol Draw instead of a Trauma Draw. *And the Sword is Sharp:* When you are hit by a Primordial's AI, place 1 negative @AT token in the Kratos Pool",
"Mnestis. Unique. <Reaction> $Fate {Vault}. $Fate $Fate {Precise}. <Reaction> $Fate $Exhaust {Advanced Reflex}. {Overbreak 3}. {Reach 3}. {Carving 1}. {Advanced Jump}. {Pole Position}. <Each Hit> {Opening 1} and {Break 1}",
"Mnestis. Unique. {Reposition 2}. When you attack, gain +1 @Fate to gain any Weapon Trait for the duration of this Attack. *When resolving the Attack, choose 3 of these:* {Hope 2}, {Elation 1}, {Opening 3}, {Black 2}, {Rouse 1}, {Diversion}",
"Mnestis. Unique. {Opening 4}. {Break 3}. {Reach 2}. {Hope 1}. <Start of Battle> Suffer {Death 4}. <Wound> Timefront moves 1 space backwards and you may place a Condition token on your [Death|CL1287] Condition card. You gain the following abilities based on the number of Condition tokens on the _Death_ Condition card",
"Mnestis. Unique. {Stalwart}. {Auto-black 1}. {Opening 1}. {Break 1}. -2 @Speed. {Pushback Reduction 4}. $Fate $Fate {Block 1}. Gain +2 @Power against Prisoners! BP cards and ignore their Wound Responses. $Fate *Siege Eternal:* {Greater Pass 2}",
"Mnestis. Unique. {Commit}. {Knockback 3}. {Break 4}. {Rocksteady}. {Stalwart}. {Daze}. {Armor-piercing}. {Cumbersome}. Ignore the _Lumbering_ Trait. Ignore Power Dice Limit rules. $Fate $Fate {Block 1}. <Crit Miss> Fully miss the Attack and @Exhaust",
"Mnestis. Unique. {Ranged 4-6}. {Auto-break 2}. {Fire 5}. {Wound Trick}. {Commit} (@Energy @Fate). $Energy <Wound> Unlock a Primordial VP. When you Wound Trick, regain 1 @Energy",
"Mnestis. Unique. {Reach 2}. {Opening 3}. {Hope 2}. {Assist 2}. {Trauma Trick}. $ComplicatedAction {Improved Rush}. If attacking from a VP, gain +1 @Power. <Wound> Move 1 Rapid Adaptation token or unlock a Primordial VP",
"Mnestis. Unique. {Power Re-roll 2}. {Hope 2}. {Opening 3}. During an Attack, ignore Labyrinth tiles for the purposes of Line of Sight and adjacency. $Fate Arrive from Time-clocked. *Cognitive Science:* During the second ability window, you may lose 1 token or statistic from the following list to gain a different one: Despair, Bleeding, Midas, Ambrosia, @Danger, @Rage, @Fate",
"Mnestis. Unique. {Ranged 1-4}. {Auto-hope 1}. {Auto-black 1}. {Elation 2}. {Vault}. {Pull 1}. {Armor-piercing}. Ignore the Power Dice Limit. <Start of your turn> Gain 1 Ambrosia token or 2 Bleeding tokens. <Wound> Discard 2 Bleeding tokens",
"Mnestis. Unique. {Opening 4}. {Masterwork}. {Ambrosia Limit +1}. You cannot lose @Danger. {Super Smart Delivery}. *Earthbound:* X is equal to how many @Danger you have on your Triskelion. Ignore Power Dice Limit rules",
"Mnestis. Unique. <Start of your turn> Gain 1 Midas token. {Renege} (@Midas). $Fate $Exhaust {Block 1}. $Discard {Block 2}. *Power of Greed:* +X @Power, where X is equal to the number of Midas tokens you have. You cannot lose Midas tokens in any other way than attacking",
"Mnestis. Unique. -2 @Speed. {Hope 2}. {Black 1}. {Opening 3}. {Overbreak 3}. {Pushback 2}. {Cumbersome}. {Commit}. Ignore Kickbacks. Ignore the _Lumbering_ Trait. If used with fewer hands than 3, lose -2 Precision and -1 @Power per missing hand. *Aeon Transgress:* At the start of your turn, make an Awakening Roll, adding @Rage to your roll. If you Awaken, treat it as if you had Awakened from an Obol (you die at the end)",
"Mnestis. Unique. {Inspire 1}. {Opening 4}. {Break 2}. {Hope 3}. $ComplicatedAction {Rush}. If Attacking from a VP, gain +1 @Power. Ignore Power Dice Limit rules. X is equal to twice the number of Cycles you've successfully completed",
"Mnestis. Unique. {Assist 2}. {Opening 3}. {Hope 2}. {Ambrosia Limit +1}. {Pushback, Knockback, Kickback Reudction 3}. $Fate {Shaded}. Cannot use {Burden}. Cannot equip if you have @Gear with _Gold_, _Sun_, or _Divine_ Trait equipped",
"Mnestis. Unique. {Auto-fire 3}. {Black 3}. {Opening 2}. {Succor}. {Provoke}. {Reach 4}. {Vault}. {Pull 3}. $MovementAction {Hermes Move 2}. Ignore Power Dice Limit rules. When attacking, gain +2 @Rage instead. *Anger Issues:* If you don't attack during your turn, you die. $Fate $Fate {Scale}",
"Mnestis. Unique. {Auto-hope 3}. {Fire 3}. {Opening 2}. Ignore Power Dice Limit rules. $Fate $CombatAction Gain +1 @Danger and attack with {Ranged 2-5}. $Fate $Exhaust When you would die from a Curse Attack, draw an Obol instead. <Crit Miss> You are incinerated",
"Unique. Badge. Titan Attachment. <Crit Evade Fail> Discard this card and place a Z Labyrinth tile under your Titan",
"This item can be used as a @OneHanded Weapon, with the following modifiers: -1 @d10",
"{Frontlines}. Titan Attachment. {Restricted} (_Cryptex_)",
"{Black 1}. {Hope 1}. <Sunbask 2> Gain +1 @Power",
"{Break 2}. {Opening 1}. <Sunstarved> {Vault}",
"{Reach 2}. {Opening 1}. {Auto-black 1}. {Provoke}. <Sunstarved> {Spotlight}. <Each hit> {Fire 1}",
"{Black 2}. {Opening 1}. {Commit}. {Cumbersome}. <Sunbask 1> Gain +2 Precision. <Sunbask 2> {Deadly}. <Full Miss> {Break 3}",
"{Reposition 3}. {Black 1}. <Each miss> {Opening 1}. <Start of Battle> Gain 1 Ambrosia token",
"{Reach 2}. {Fire 2}. {Opening 2}. {Commit}. <Sunstarved> $Fate {Precise}",
"{Ranged 2-5}. {Reposition 1}. {Cumbersome}. <Sunbask 2> {Ranged 2-6} instead, {Auto-break 2}",
"{Ranged 2-3}. {Fire 2}. {Opening 1}. {Auto-break 1}. {Reposition 1}. {Cumbersome}. <Sunstarved> Gain +1 @Power",
"Attach to a Weapon or @Armor with the _Abyss_ Trait. That @Gear becomes _Accursed_ (becomes Power Level IV). It loses the _Abyss_ Trait and gains this Attachment's Traits and {Reposition 1}. @Armor gains @Fate @Fate @Fate @Discard Wish Armor. <End of Battle> Permanently lose this card and the @Gear card it is attached to",
"{Tumble}. $Discard {Shaded}. $Fire $Fate $Exhaust {Wish Armor}",
"$Fate {Reinforce 1}. {Pushback, Knockback, Kickback Reduction 2}. $Fate $Exhaust When you are about to suffer {Knockdown}, {Reposition 3} instead",
"{Opening 2}. {Auto-break 1}. $Fate $Exhaust {Block 1}. <Sunbask 2> Gain +1 @Evasion",
"$Fire $Exhaust {Wish Dodge}. $Fate $Discard {Unholy Alchemy}",
"<Reaction> $Fate $Exhaust {Hermes Reflex}",
"$Fate $Exhaust If the Kratos Pool is empty, immediately place 2 Opening and 2 Break tokens, or 2 Fire tokens there. $Fate $Exhaust Immediately place 2 Opening or 2 Break tokens in the Kratos Pool",
"Titan Attachment. {Restricted} (_Hermes Gear_). $MovementAction {Hermes Move 1}. $MovementAction $Fate $Exhaust {Hermes Move 2}",
"{Strikeback 0}. $Fate $Fate $Exhaust {Wish Armor}. $Fate $Exhaust {Stand up}",
"{Strikeback 3}. {Reposition 3}. {Opening 2}. {Pushback 1}. $Fate $Exhaust {Block 1}. <Sunstarved> Place 1 Fire token in the Kratos Pool",
"{Fire 2}. {Daze}. {Pushback 1}. <Full Hit> {Diversion}. <Full Miss> {Fire 2}",
"Unique. {Reposition 4}. {Power Re-roll 1}. <Crit Miss> Gain 1 Midas token. <Sunbask 1> {Opening 2}",
"{Ranged 3-6}. {Fire 2}. {Reposition 1}. {Cumbersome}. {Commit}. <Sunstarved> {Opening 2}",
"$Discard {Lifeline}. $Fate $Exhaust {Knockback Reduction 3}. $Fate $Exhaust Deflate. You may use this ability while floating",
"$Fate $Exhaust {Unholy Alchemy}. $Fate $Exhaust {Reverse Unholy Alchemy}. $Fate $Discard {Second Chance}",
"$Fate $Exhaust {Stanch} (@Midas)",
"$Fate $Exhaust {Wish Armor}. <Crit Evade Fail>  Discard this card",
"{Knockback, Wish Away Reduction 1}",
"{Ranged 2-4}. $Fate $Exhaust {Block 1}. {Opening 2}. {Fire 1}. {Provoke}. {Commit}. {Cumbersome}. <Sunbask 1> Discard 1 Midas token",
"$Fate $Exhaust {Knockback, Kickback, Pushback Reduction 2}. $Fate $Exhaust When you are about to suffer Airburst or Float, ignore it",
"Titan Attachment. {Restricted} (_Hermes Gear_). $MovementAction {Hermes Move 2}. $MovementAction $Fate $Discard {Hermes Move 3}",
"{Midas Immune}. $Fate $Exhaust Discard 1 Midas token from this card",
"{Light 1}. $Fate $Exhaust {Wish Armor}",
"$Exhaust Gain +X @Fate when you suffer Wish Away to reduce it by X. $MovementAction $Discard {Wish Away 8} from the Primordial (even from within the Staircase). $Discard {Wish Armor}",
"+1 Will. $Fate $Exhaust Flip a Mind Condition card. $Fate $Discard {Solace}",
"Unique. {Strikeback 3}. {Reach 2}. {Black 1}. {Closing 3}. {Commit}. $Fate $Fate {Heartseeker}. When you perform a Strikeback Attack, use the other side of this card",
"Unique. {Reach 2}. {Auto-black 2}. {Closing 1}. {Commit}. $Fate $Fate {Heartseeker}. Use this side only during a Strikeback Attack",
"Unique. {Ranged 2-4}. {Fire 3}. {Commit} (@Fate @Energy @Fire). {Cumbersome} ",
"Ascended. Ignore {Drift} Precision Penalty. $Fate $Exhaust When resolving an Attack against you, if the Primordial Shadowsteps, Vanishes, Flickers, or moves to the center of the Board, move up to 3 spaces (until adjacent) toward it",
"Ascended. $Fate $Discard When performing an Attack, treat your Attack as if it was an Interrupt. $Fate $Discard Discard up to 2 Ambrosia tokens",
"{Strikeback 2}. {Hope 2}. {Startup 2}. $Fate $Discard {Wish Armor}. <Crit Miss> After the Attack, discard this @Gear",
"{Fire 2}. {Opening 1}. {Power Re-roll 1}. <Crit Miss> Immediately fully miss the Attack and gain 1 Midas token",
"Unique. {Commit}. {Closing 2}. {Fire 2}. <Full Miss> {Fire 2}. <Crit Miss> Gain 1 Midas token. <Sunbask 1> Gain +2 Precision. <Sunbask 2> {Deadly} or {Precise} or +1 @Power",
"{Ranged 4-6}. {Commit}. {Cumbersome}. {Break 3}. {Closing 1}. $MovementAction {Hermes Move 2}",
"{Bypass}. $Midas $Fate {Dodge}. {Knockback, Wish Away Reduction 1}",
"{Pass 1}. $Fate {Reinforce 2}. $Ambrosia $Exhaust {Unholy Alchemy}. $Midas $Exhaust {Reverse Unholy Alchemy}",
"$Energy $Fate $Exhaust {Wishrod}",
"$Fate *Skim:* During voluntary movement, ignore Obstacle and Chasm Terrain tiles. You cannot end your movement on an Obstacle or Chasm. $Fate $Exhaust When you are about to suffer {Airburst} or {Float}, ignore it",
"Titan Attachment. {Restricted} (_Hermes Gear_). $MovementAction {Hermes Move 3}. $MovementAction $Fate $Discard {Hermes Move 4}",
"Unique. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. {Startup 2}. $Fate {Semi Sync}. <Reaction> $Fate $Exhaust {Advanced Hermes Reflex}",
"Unique. {Break 3}. {Commit} (@Midas)",
"Unique. {Hope 2}. {Closing 2}. {Assist 2}. <Reaction> $Midas $Exhaust {Hermes Reflex}. $Fate $Fate $Exhaust {Block 1}",
"Unique. {Pole Position}. {Black 1}. {Assist 2}. <Each Hit> {Opening 1}. <Each Hit> Ascent check +1. <Start of Battle> Gain 1 Midas token",
"Unique. {Ranged 5-10}. {Fire 4}. {Commit}. (@Energy). {Cumbersome}. <Crit Miss> Gain the [Greed-crazed|DL2007] Condition card",
"Unique. {Closing 3}. {Black 1}. {Cumbersome}. {Commit} (@Fate @Energy). $Fate $Fate $Exhaust {Block 1}. *Pneuma:* Gain +1 @Power against the Babelian Lunacy. <Crit Miss> Gain the [Wishagog|DL2011] Condition card",
"Unique. {Strikeback 0}. {Pushback 3}. {Startup 2}. {Opening 3}. {Commit} (@Fate @Energy). {Cumbersome}. <Crit Miss> {Wish Away 4}. $Energy $Fate $Exhaust {Block 1}",
"Unique. {Break 4}. {Daze}. {Pushback 3}. <Full Hit> Ignore Wound Responses. <Full Miss> {Break 3}",
"Unique. {Fire 2}. {Closing 2}. {Power Re-roll 1}. {Strikeback 0}. {Midas Immune}. <Start of Battle> Gain 1 Midas token. <Crit Miss> Gain 1 Midas token",
"Unique. {Ranged 3-6}. {Fire 3}. {Closing 1}. {Commit}. {Cumbersome}. <Wound> {BP Suppress}. <Sunbask 1> {Opening 2}. <Sunbask 3> {Opening 4}",
"{Inspire 1}. {Wish Away Reduction 2}. $Fate {Wish Armor}. $Fate $Exhaust {Wish Armor} and {Wish Dodge}",
"{Bypass}. {Pole Position}. +1 @Speed. <Reaction> $Fate $Exhaust {Advanced Hermes Reflex}",
"Unique. {Ranged 2-3}. {Fire 2}. {Startup 2}. {Commit}. {Cumbersome}. $Fate Ignore _Rapid Adaptation_. <Full Hit> During the second ability window, place 1 negative AT @AT token in the Kratos Pool",
"Unique. {Strikeback 1}. {Commit}. {Provoke}. {Cursed}. <Start of Battle> Gain the [Wishkeen|DL2011] Condition card. <Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"Unique. {Black 2}. {Pushback 2}. {Commit}. {Cumbersome}. <Sunstarved> $Fate $Exhaust {Superior Chance}. <Each Hit> {Break 1}. <Full Miss> {Rouse 1}",
"Unique. {Opening 2}. {Closing 2}. {Motivate 1}. {Midas Immune}. Ascent Check +1",
"Unique. {Reach 2}. {Break 2}. {Commit}. {Cumbersome}. {Provoke}. <Start of Battle> Gain 1 Ambrosia token or 1 Midas token. $Fate $Fate $Exhaust {Reverse Unholy Alchemy}. When you attack, you may gain 1 or 3 Ambrosia tokens to gain +1 @Power or +2 @Power respectively",
"Unique. {Ranged 2-4}. {Opening 3}. {Assist 2}. {Cumbersome}. {Commit} (@Fate @Midas). {Hermes Reposition 1}. {Reposition 2}. <Crit Miss> Gain 1 Midas token",
"$Energy $Fate $Exhaust Discard up to 2 Midas tokens",
"Titan Attachment. {Restricted} (_Hermes Gear_). $MovementAction {Hermes Move 4}. $MovementAction $Fate $Discard {Hermes Move 5}",
"+1 Will. {Hope 1}. {Inspire 1}. {Motivate 1}. Ascent Check +1. $Fate $Discard {BP Suppress} or {AI Suppress}",
"Unique. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. {Auto-hope 1}. $Fate {Full Sync}",
"Unique. {Reach 2}. {Closing 3}. {Provoke}. {Commit}. {Wishcursed}. <Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"Unique. {Daze}. {Break 3}. {Closing 1}. {Pushback 2}. {Commit}. {Wishcursed}. <Crit Miss> Gain the [Covetous|DL2007] Condition card",
"Unique. {Reach 2}. {Startup 2}. {Closing 1}. {Wishcursed}. <Each Hit> {Opening 2}. *Neverending:* When you attack, gain +X @Fate to gain +X Reach. <Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"$Fate $Exhaust {Roll Out}. $Fate $Midas {Wish Armor}. $Fate $Exhaust {Superior Stanch} (@Midas)",
"Ascent Check +3. $Fate $Exhaust Choose a Condition card. You may ignore its effects until the end of this Round. May be used as a @Reaction. <Reaction> $Fate $Exhaust {Hermes Reflex}. $Discard {Superior Chance}",
"Unique. {Spiral 2}. {Strikeback 2}. {Startup 2}. {Rouse 1}. <Crit Chance> {Auto-hope 1}",
"Unique. {Fire 3}. {Daze}. {Commit}. {Cumbersome}. {Provoke}. {Commit} (@Fate @Fate) instead to gain +1 @Power. <Sunbask 3> Ignore Wound Responses. <Crit Miss> @Adversary",
"Unique. {Reach 2}. {Commit}. {Cumbersome}. <Sunstarved> {Break 4}. <Full Miss or Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"Unique. Ignore {Imperial Impetus}",
"Unique. +1 Courage. +1 Endurance. $Fate $Exhaust {Defy 1}",
"Unique. {Reach 2}. {Fire 2}. {Commit} (@Fate @Midas). {Cumbersome}. <Sunstarved> {Fire 2}. <Crit Miss> Gain 1 Midas token",
"Unique. {Black 2}. {Opening 2}. {Commit}. {Wishcursed}. {Strikeback 0}. When you attack, you may gain the [Wishkeen|DL2011] Condition card to gain +1 @Power. <Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"Unique. {Pole Position}. {Temporal Reflex}. $Fate $Exhaust {Wish Armor}. Gain +1 @Evasion for Wish Attacks. <Crit Evade Fail> {Doomed}",
"Unique. {Closing 3}. {Ranged 2-5}. {Commit}. {Cumbersome}. <Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"Unique. {Deadly}. {Black 2}. {Closing 2}. {Commit}. $Fate {Precise}. When you're on a {Cloud} Terrain or in the Blindspot, flip this card. <Crit Miss> This Titan will die during the Battle Aftermath",
"Unique. {Deadly}. {Black 3}. {Closing 3}. {Commit}. $Fate {Heartseeker}. $Fate {Precise}. When you're not on a {Cloud} Terrain or in the Blindspot, flip this card. <Crit Miss> This Titan will die during the Battle Aftermath",
"Unique. Immune to the [Fear|AL0299] Condition card. If the BP card has 2 or more AT values, you always use the lower one. Disable the {Shackles of Regret} Trait. <Start of your turn> Gain 1 Ambrosia token",
"Unique. {Deadly}. {Black 2}. {Opening 2}. {Startup 2}. {Commit}. {Cumbersome}. <Crit Miss> A Random Titan that participated in this Battle will die during the Battle Aftermath",
"Unique. {Midas Immune}. $Fate $Exhaust {Stanch} (@Midas)",
"Unique. {Rocksteady}. {Knockback, Wish Away Reduction 3}. $Fate $Exhaust Ascent Check +3",
"Unique. {Fire 3}. {Inspire 2}. {Commit}. {Cumbersome}. {Provoke}. -1 @Speed. -1 Hermes Move. <Sunstarved> {Fire 2}. <Crit Miss> @Adversary",
"Unique. {Midas Immune}. {Tumble}. {Vault}. Ignore {Imperial Impetus}",
"Unique. {Reach 3}. {Fire 3}. {Closing 3}. {Commit} (@Fate @Midas). {Cumbersome}. Gain +1 @Power when on a VP",
"Unique. {Fire 3}. {Strikeback 1}. {Commit}. {Cursed}. {Wishcursed}. <Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"Unique. {Rocksteady}. {Knockback, Wish Away Reduction 2}. $Fate {Reinforce 2}. $Fate {Wish Armor}",
"Unique. {Pole Position}. $MovementAction {Hermes Move 2}. Ascent Check +2",
"{Ascended}. Unique. You have 1 additional @Support slot",
"Unique. {Hope 3}. {Closing 1}. {Pushback 3}. {Commit}. $Fate $Exhaust {Block 1} or {Defy 1}. <Crit Miss> @Adversary",
"Unique. Ascended. <Reaction> $Fate $Exhaust {Pursuit 5}. <Reaction> $Fate $Exhaust {Advanced Hermes Reflex}",
"Unique. {Hope 3}. {Commit} (@Fate @Fate). {Clutch}. {Strikeback 4}. {Provoke}. <Crit Chance> Lose -1 @Fate. <Crit Miss> @Adversary",
"Unique. {Commit} (@Fate @Fate). {Black 4}. {Wishcursed}. {Cursed}. <Crit Chance> Lose any 1 Curse Affliction. <Crit Miss> Gain the [Wishkeen|DL2011] Condition card",
"Unique. {Hope 3}. {Midas Immune}. {Wishcursed}. {Cursed}. *Regret:* Each time you deal a Wound, place 1 Generic token on this card. You gain -1 @Power per token on this card",
"Unique. {Closing 3}. <Each Hit> Turn 1 Midas token into {Break 1}. <Crit Miss> Gain a Crit Chance",
"Ascended. {Ranged 3-6}. {Fire 4}. {Black 1}. {Auto-black 1}. {Commit} (@Fate @Energy). {Cumbersome}. {Witness}. <Crit Miss> Attack fails, gain +3 @Danger, @Adversary. <Full Evade> If you evaded a Laser Attack, {Strikeback 0}",
"Unique. Ascended. {Light 4}. $Fate $Exhaust {Provoke}. At the end of your turn, suffer {Burn}",
"Unique. Ascended. <Start of Battle> Gain 1 Aether token. {Husk}. $Fate $Aether $Exhaust Place the bottom BP card on the top of the BP deck",
"Unique. Ascended",
"Unique. Evolving. {Opening 3}. {Super Smart Delivery}. *Evolution:* Score a Critical Wound on the [Aurified Sapling|DS2509] BP card. *Reward:* [Greater Saphos|DJ2386] @Gear card",
"Unique. Evolved. {Opening 4}. {Masterwork}. {Super Smart Delivery}",
"{Fire 2}. {Hope 2}. {Closing 2}. {Power Re-roll 2}. $Fate $Oxygen {Heartseeker}",
"Unique. $Pain $Despair Turn your @MovementAction into a @CombatAction, or vice versa",
"{Wished}. Unique. {Auto-fire 2}. {Opening 3}. {Pushback 1}. *The Spark:* When resolving your Attack, do not discard Fire tokens from the Kratos Pool. If you would run out of Fire tokens to place, discard the First Blade. *The Mark:* If you start your turn adjacent to another Titan, they die",
"Wished. Unique. {Black 2}. {Burden 1}. {Elation 1}. {Succor}. {Unholy Alchemy}. {Ambrosia Limit 3}. Ignore the {Curse Carapace} Trait",
"{Wished}. Unique. <Start of your turn> Gain 1 Midas token. {Renege} (@Midas). $Fate $Exhaust {Block 1}. $Discard {Block 2}",
"{Wished}. Unique. {Assist 2}. {Opening 2}. {Hope 2}. {Ambrosia Limit +1}. {Pushback, Knockback, Pull Reduction 3}. $Discard {Shaded}. Cannot use {Burden}. Cannot equip if you have @Gear with _Gold_, _Sun_, or _Divine_ Traits equipped",
"{Wished}. Unique. {Auto-fire 1}. {Black 1}. {Opening 2}. {Succor}. {Provoke}. {Reach 2}. {Vault}. {Pull 3}. $MovementAction {Hermes Move 2}. When attacking, gain +2 @Rage instead. *Anger Issues:* If you don't attack during your turn, you die. $Fate $Fate {Scale}",
"{Black 2}",
"{Reach 2}. {Break 3}. {Pushback 1}. {Cumbersome}. *Finite Growth:* $Aether $Discard Place an [Irem Tower|DI2028] Terrain tile on an adjacent space",
"{Auto-black 1}. {Pull 2}. {Provoke}. <Each hit> {Black 1}",
"{Break 1}. {Closing 2}. {Cumbersome}. {Stuck}. <Crit Miss> Gain 1 Ambrosia token",
"{Reposition 2}. {Hope 1}. <Each miss> {Closing 1}",
"{Ranged 3-4}. {Reposition 1}. {Black 2}. {Opening 1}. {Commit}. {Cumbersome}",
"{Ranged 2-5}. {Pull 1}. {Black 1}. {Opening 2}. {Cumbersome}. When you attack with this Weapon at its maximum effective range, gain +1 @Power",
"{Ranged 3}. {Reposition 3}. {Commit}. <Each 2 misses> {Opening 1}. <Each 2 hits> {Break 1}. <Full Hit> Gain +1 @Power",
"Attach to a Weapon or @Armor with the _Sun_ Trait. That @Gear becomes _Blackburned_ (becomes Power Level V). It loses the _Sun_ Trait and gains this Attachment's Traits. Weapon @Gear gains {Black 1}. @Armor gains {Light 1}. <End of Battle> Permanently lose this card and the @Gear card it is attached to",
"{Tumble}",
"{Inspire 1}. $Fate $Exhaust {Roll Out}. $Fate $Exhaust {Motivate 1}",
"{Opening 2}. $Fate $Exhaust {Block 1}. $Fate $Exhaust {Rescan}",
"{Closing 2}. {Light 1}. $Fate $Exhaust {Rescan}",
"$Fate $Discard {Rescan}. $Fate $Exhaust When another Titan deals a Wound, Advanced Reflex",
"$Fate $Exhaust If the Kratos Pool is empty, immediately place 4 Opening tokens there. $Fate $Exhaust Immediately place 2 Opening or 2 Break tokens in the Kratos Pool",
"<Start of Battle> Gain 1 Oxygen token",
"{Tumble}. <Reaction> $Fate $Exhaust {Reflex}. $Fate $Exhaust {Terrain Vault}",
"$Fate {Reinforce X}, where X is the number of Aether tokens you have. $Fate $Aether {Rocksteady}",
"-1 @Speed. <Each Hit> {Pushback 1} and {Opening 1}",
"{Deadly}. {Black 2}. {Stuck}. {Commit} (@Ambrosia)",
"Unique. {Carving 1}. {Closing 3}. {Spiral 1}. {Cumbersome}. {Stuck}. <Crit Miss> Gain 1 Pain token",
"{Ranged 3-8}. {Pull 3}. {Closing 3}. {Carving 1}. {Unwieldy}. {Commit}. {Cumbersome}",
"{Light 1}. <Reaction> $Fate $Exhaust Grant {Advanced Reflex} to another Titan",
"$Fate {Motivate 1}. $Fate $Exhaust {Inspire 1}. $Fate $Fate $Exhaust {Motivate 1}. {Motivate 1}",
"{Fire 2}. {Light 1}. $Fate $Energy During a Light Check, Light 2 instead",
"{Light 1}. {Despair Limit +1}",
"{Stalwart}. {Ambrosia Limit +1}",
"$Fate $Exhaust {Block 1}. Gain {Light X} equal to half (rounding up) of Light X of an adjacent light source",
"{Pull 1}. $Fate $Exhaust When the Primordial is about to Vanish, reduce that Vanish by 1",
"{Provoke}. +1 Courage. Ignore the {Pale Grin of Doom} Trait",
"+1 Will. $Fate $Exhaust You may ignore the effects of a [Fear|AL0299], [Dread|AL0299], [Terror|EL2596], or [Holy Terror|EL2596] Condition card until the end of this Round. $Fate $Exhaust Flip a Mind Condition card. $Fate $Discard {Solace}",
"{Light 1}. {Ranged 1-4}",
"{Remote Scan}. $Fate {Rescan}. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"$Fate $Exhaust When you, or an adjacent Titan, are about to suffer {Burn}, ignore it. If it was another Titan, gain the [Bravery|EL2600] Condition card",
"$Fate $Exhaust Discard 1 Ambrosia token",
"$Fate $Exhaust {Stand up}. <Start of Battle> Gain 1 Oxygen token",
"{Strikeback 1}. {Hope 1}. {Closing 3}. $Fate $Fate {Precise}. <Crit Miss> Gain 1 Pain token",
"{Reposition 2}. {Commit} (@Pain). <Each hit> {Closing 1}",
"{Bypass}. {Vault}. +1 @Speed. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"$Fate $Fate $Exhaust {Superior Stanch} (@Pain)",
"{Strikeback 1}. {Opening 2}. {Break 2}. $Fate $Fate {Tilt}. <Crit Miss> Gain 1 Despair token",
"{Black 1}. {Power Re-roll 1}. <Each hit> {Opening 1}. <Crit Miss> Gain 1 Despair token",
"{Closing 2}. {Break 1}. {Light 2}. <Full Miss> {Diversion}. <Crit Miss> Gain 1 Ambrosia token",
"+1 @Speed. {Ranged 2-5}. {Unwieldy}. {Cumbersome}. {Pull 3}. {Black 3}. {Opening 2}",
"{Light 2}. When you gain Ambrosia tokens, additionally gain 1 Despair token",
"<Start of Battle> Move up to 5 spaces and {Hide}. $Fate $Oxygen Place an Inkblot Terrain tile on your space. $Fate $Exhaust {Hide}",
"{Fearless}. $Fate $Exhaust {Defy 1}. <Reaction> $Fate $Exhaust {Reflex}. $Discard Discard a [Fear|AL0299] or [Dread|AL0299] Condition card to {Dare}",
"$Exhaust When you gain a Condition card, flip an Aether token",
"$Despair $Fate $Exhaust Flip an Aether token",
"{Light 2}. $Fate $Exhaust Discard 1 Despair token from yourself or an adjacent Titan",
"{Light 1}. {Inspire 1}",
"$Fate $Exhaust Move all Ambrosia tokens from all of your @Gear to your Titan Sheet",
"$Fate $Exhaust When you are about to suffer {Burn}, ignore that effect",
"-2 @Speed. You have 1 additional @Support slot. {Knockback, Pushback, Kickback Reduction 2}",
"{Light 1}. {Remote Scan}. $Fate {Rescan}. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"{Light X}. X is the current Primordial Round number",
"{Reach 3}. {Black 3}. {Pull 3}. $Fate {Tilt}. <Each hit> {Closing 1}, you may gain 1 Pain token",
"{Burden 1}. $Pain $Exhaust Place the top BP card at the bottom of the deck",
"{Reach 2}. {Auto-black 2}. {Pushback 2}. {Provoke}. <Each Miss> Gain 1 Pain token",
"{Auto-black 2}. {Burden 1}. {Sacrifice}. <Start of Battle> Gain the [Fear|AL0299] Condition card. $Fate {Tilt}",
"{Fate Armor}. {Inspire 1}. You have 1 additional @Support slot. {Kneel}",
"{Reach 3}. {Black 2}. {Closing 2}. {Unwieldy}. {Commit}. {Cumbersome}. $ComplicatedAction {Improved Rush}. When you attack from a VP, gain +1 @Power",
"{Ambrosia Limit +1}. Your active Weapon gains {Stuck}. When you are about to die from gaining a Condition card, discard that card without effect instead",
"{Daze}. {Closing 2}. {Pushback 3}. {Commit}. <Each 2 misses> Discard 1 Aether token. <Each hit> {Break 1}. If you have at least 1 Aether token, gain +1 @Power",
"{Ranged 4-6}. {Pull 4}. {Light 1}. {Unwieldy}. {Cumbersome. {Harpooned}. $Fate {Tilt}. <Start of Battle> Gainthe [Terror|EL2596] Condition card. <Each Hit> {Hope 1}. {Opening 1}",
"{Spiral 1}. {Overbreak 3}. {Daze}. {Cumbersome}. {Stuck}. $Fate {Liquid Edge}. <Full Miss> {Break 3}. <Crit Miss> Gain 1 Despair token",
"{Ranged 3-4}. {Spiral 3}. {Opening 2}. {Hope 2}. {Cumbersome}. $Fate {Liquid Edge}. $Fate {Tilt}. <Crit Miss> Gain the [Fear|AL0299] Condition card",
"{Spiral 6}. $Fate {Liquid Edge}. <Each Hit> {Opening 1} and {Reposition 1}. <Crit Miss> Gain 1 Despair token",
"{Spiral 2}",
"{Reach 3}. {Opening 2}. {Pull 2}. $Fate {Tilt}. <Each Hit> {Hope 1}. <Full Hit> Immediately place 1 Diversion token in the Kratos Pool",
"{Ranged 4-6}. {Overbreak 2}. {Closing 3}. {Cumbersome}. {Pull 4}. {Light 1}. <Full Hit> Your highest tier Power Die becomes one tier higher for this Attack",
"{Spiral 1}. $Fate {Rescan}. <Reaction> $Aether $Exhaust {Superior Reflex}",
"$Pain $Fate $Exhaust Flip an Aether token. <Crit Evade Fail>: Gain 1 Pain token",
"$Fate $Exhaust Turn 1 Ambrosia or Pain token into 1 Despair token",
"{Light 3}. <Start of Battle> Gain 1 Aether token",
"{Fire 4}. {Ranged 2-3}. {Commit}. {Reposition 2}. {Cumbersome}",
"{Light 1}. {Fire 3}. {Closing 2}. {Power Re-roll 2}. $Fate $Oxygen {Heartseeker}. $Fate $Exhaust Discard 2 Bleeding tokens. <Crit Miss> Suffer {Burn}",
"{Fire 3}. {Pushback 2}. $Fate $Exhaust {Defy 1} or {Block 1}. $Fate {Tilt}. <Crit Evade> Discard 1 Ambrosia token",
"{Ranged 1-6}. {Fire 3}. $Fate $Exhaust {Defy 1}",
"{Evasion Spiral 3}. {Armor Re-roll 2}. <Start of Battle> Gain 1 Oxygen token. $Fate $Fate {Mortal Reinforce 1}. $Fate $Exhaust {Stand up}",
"+1 @Speed. {Light 2}. {Bypass}. {Vault}. {Tumble}. {Ambrosia Limit +1}",
"Unique. Titan Attachment. {Restricted} (_Cryptex_). +2 Precision. {Frontlines}. *Future Sync*: $Fate $CombatAction Gain a Combat Action token",
"Titan Attachment. You start the Battle with 1 Oxygen token and you cannot gain Oxygen. <Start of you turn> Gain 1 Pain tokens and flip 1 Aether token",
"Unique. Titan Attachment. {Restricted} (_Cryptex_). {Light 1}. {Frontlines}. *Future Semi Sync:* $Fate $MovementAction Gain a Movement Action token",
"Unique. {Startup X}. {Auto-break X}. {Strikeback 2}. {Break 2}. {Closing 1}. {Commit} (@Pain). X is equal to the number of Pain tokens you have",
"Unique. {Reach 2}. {Overbreak X}. {Commit}. {Light Y}. Y is the number of Despair tokens you have. $ComplicatedAction *Piercing Rush*: Perform {Rush}, X is the amount of spaces you move. <Crit Chance> {Tilt}",
"Unique. {Spiral 1}. {Truth X}. {Daze}. {Commit}. {Stuck}. <Start of Battle> You may gain 1 Despair token",
"Unique. {Startup 4}. {Strikeback 0}. {Deadly}. {Elation 1}. $Fate {Tilt}. At the start of the Battle, and each time you draw a _You Live!_ Obol, gain the [Bravery|EL2600] Condition card",
"Unique. {Overbreak 3}. {Elation 1}. {Armor-piercing}. $Fate $Exhaust {Stand up}",
"Unique. {Reach 2}. {Light 1}. {Provoke}. Gain +1 to your Crit Chance range for each generic token on this card. <Wound> Place a generic token on this card. <Crit Chance> Discard all generic tokens from this card",
"Unique. {Fearless}. <Crit Chance> Gain 1 Aether token",
"Unique. {Light 3}. During a Scan you may redraw the Major Trauma cards X times, where X is the number of Aether tokens you have",
"Unique. {Bypass}. Ignore Skitter. $Fate $Exhaust {Hide}. When Hidden, gain +2 @Speed",
"Unique. {Overbreak 2}. Ignore {Burn}. $Fate $Exhaust {Block 1}",
"Unique. {Strikeback 1}. {Deadly}. Disable the [Toying|EX3219] Trait. $Pain {Heartseeker}. $Pain {Liquid Edge}",
"Unique. {Light 1}. $Fate $Pain {Dodge}. <Crit Evade Fail> Gain 1 Pain token. Disable the [Toying|EX3219] Trait",
"Unique. Ignore Status Feints. $Fate {Rescan}. <Reaction> $Fate $Exhaust {Superior Reflex}. Disable the [Toying|EX3219] Trait",
"Unique. Ignore Burn. <Start of Battle> Gain 1 Aether token",
"Unique. {Stuck}. {Liquid Edge}. *Non-euclidean:* You can only attack diagonally. <Crit Chance> Your highest tier Power Die becomes one tier higher for this Attack",
"Unique. {Husk}. You cannot die from Despair. $Ambrosia $Ambrosia {Abysswalk}. <Crit Miss> @Adversary",
"Unique. Immune to [Fear|AL0299] and [Dread|AL0299] Condition cards. <Crit Chance> Gain 1 Aether token",
"Unique. {Reach 2}. {Deadly}. Gain +1 to your Crit Chance range for each generic token on this card. <Wound> Place 1 generic token on this card. <Crit Chance> Discard all generic tokens from this card and gain 1 Pain token",
"Unique. {Reach 3}. {Light 3}. {Opening 5}",
"Unique. {Stalwart}. {Husk}. You cannot die from Despair. $Ambrosia $Ambrosia {Abysswalk}. <Crit Miss> Your highest tier Power Die becomes @MortalPowerDie",
"Titan Attachment. {Restricted} (_Hermes Gear_). Other Titans may treat you like an Elevated Terrain tile for purposes of Hermes Movement They may only end such movement on a space adjacent to you",
"{Bypass}. $Fate $Exhaust {Acrobatics}. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"{Pole Position}. <Each Hit> {Closing 1}. <Each 2 Hits> {Hope 1}. <Full Hit> Crit Chance. <Crit Chance> {Precise}",
"{Rocksteady}. {Fearless}. $Fate $Exhaust {Heartseeker}",
"Unique. {Light X}. {Inspire X}. {Motivate X}. $Fate $Exhaust {Provoke}. When you *Provoke* or *Crit Chance*, gain 1 Aether token. X is equal to your Aether tokens",
"Unique. {Reach 2}. {Vault}. {Opening X}. $Ambrosia {Abysswalk}. <Crit Miss> Your highest tier Power Die becomes @MortalPowerDie",
"Unique. Titan Attachment. {Restricted} (_Cryptex_). Precision +2. {Frontlines}. *Enslave*: $Fate $Exhaust Each other Titan gains 1 Pain token and moves up to 3 spaces. This is considered involuntary movement. <Reaction> $Aether $Exhaust Grant {Superior Reflex} to another Titan. That Titan gains 1 Pain token",
"Unique. Titan Attachment. {Restricted} (_Cryptex_). {Light 1}. {Frontlines}. *Herd Sync:* $Fate Move @CombatAction or @MovementAction Fatigue token from another Titan's sheet to your sheet. You may use this ability during another Titan's turn. <Reaction> $Aether $Exhaust {Advanced Reflex}",
"Unique. +1 @Speed. {Ranged 3-6}. {Unwieldy}. {Cumbersome}. {Pull 3}. {Black 3}",
"{Ascended}. Unique. Titan Attachment. +1 to Judgement Tests. $Discard When you are about to die from the [Fear|AL0299] or [Dread|AL0299] Condition cards, ignore this death. $Discard During an Awakening Roll, add +1 to the result",
"Mnestis-generated. Unique. {Cumbersome}. {Ranged 3-7}. {Reposition 2}. {Opening 2}. {Fire 2}. {Assist 2}. One @d10 (non-Crit one) always hits. *Olympian Prey:* If you don't attack with this Weapon during your turn, draw an Obol",
"Mnestis-generated. Unique. {Motivate 1}. Motivate 1. Motivate 1. {Inspire 1}. {Rouse}. {Despair Limit +2}. *Heavy is the Head:* Ignore Instant Death effects. Always perform an Obol Draw from two Obols. Always perform an Obol Draw instead of a Trauma Draw. *And the Sword is Sharp:* When you are hit by a Primordial's AI, place 1 negative @AT token in the Kratos Pool",
"Mnestis-generated. Unique. {Ranged 4-6}. {Auto-break 1}. {Fire 4}. {Wound Trick}. {Commit} (@Energy @Fate). $Energy <Wound> Unlock a Primordial VP. When you Wound Trick, regain 1 @Energy",
"Mnestis-generated. Unique. {Reach 2}. {Opening 2}. {Hope 1}. {Assist 2}. {Trauma Trick}. $ComplicatedAction {Improved Rush}. If attacking from a VP, gain +1 @Power. <Wound> Unlock a Primordial VP",
"Mnestis-generated. Unique. {Ranged 1-4}. {Auto-hope 1}. {Auto-black 1}. {Elation 2}. {Vault}. {Pull 1}. <Start of your turn> Gain 1 Ambrosia token. <Wound> You may discard 1 Condition token",
"Mnestis-generated. Unique. -2 @Speed. {Hope 3}. {Opening 3}. {Pushback 2}. {Cumbersome}. {Commit}. Ignore the _Lumbering_ Trait. If used with fewer hands than 3, lose -2 Precision and -1 @Power per missing hand",
"Mnestis. Unique. When you resolve a Wish Attack against you, gain 1 + AI level @Energy. $Energy $Energy $Energy $Exhaust The next time you would draw an AI, perform Signature instead. $Fate {Wishrod}, {Wish Armor}, {Advanced Wish Dodge}",
"Mnestis. Unique. Spaces with this card lose Chasm and gain {Elevated}. <Start of Battle> Place this card anywhere on the Battle Board, so that it takes up 2 empty spaces. $Fate When a Titan on a space with this card is about to move in any way, move this card with them. Double that movement",
"Mnestis. Unique. {Midas Immune}. {Closing 3}. {Strikeback 3}. {Hermes Reposition 1}. {Scale 3}. For each hit, choose one (you may choose each effect more than once): *Mortal:* Discard 1 Midas token to gain {Hope 1}. *Lion:* Gain 1 Midas token to gain {Auto-break 1}. *Scorpion:* Lower the next Primordial Response or After Attack movement by 1",
"Mnestis. Unique. {Midas Immune}. {Hermes Reposition 1}. {Opening 2}. {Black 3}. {Hope 2}. {Elation 2}. $Fate {Lifeline} or {Block 2}, then gain 3 Midas tokens. <Reaction> $Fate {Advanced Hermes Reflex}, then suffer {Float}. Knockdown to {Stanch} (@Midas)",
"Mnestis. Unique. {Wish Armor}. {Inspire 3}. {Knockback, Pull Reduction 6}. <Start of Battle> Gain 1 Aether token. <Start of your turn> Gain the [Terror|EL2596] Condition card, then reveal either the top AI or top BP card. You are always considered facing all directions and ignore Line of Sight",
"Mnestis. Unique. Titan Attachment. Ignore the {Restricted} (_Hermes Gear_) keyword. {Hermes Reposition 3}. When you resolve Hermes Movement, place 1 of the following tokens on this card: Black, Closing, Hope, Fire, Diversion. When you are about to attack, move all tokens from this card into the Kratos Pool",
"Mnestis. Unique. {Ranged 1-3}. {Cumbersome}. {Commit} (@Ambrosia). {Auto-black 3}. {Black 3}. {Elation 3}. {Reposition 4}. {Assist 2}. Treat all Attacks with this Weapon as Bonus Attacks (you still need to spend @CombatAction). Ignore the _Metamorphosis_, _Rapid Adaptation_, and _Curse Carapace_ Traits",
"Mnestis. Unique. {Reach 4}. {Pull 3}. {Opening 5}. {Black 3}. {Fire 3}. Ignore _Mind_ and _Body_ Condition cards. <Full Miss> You may immediately attack again with this Weapon with an additional @d10 (to a maximum of 3)",
"Mnestis. Unique. {Motivate 3}. {Motivate 3}. {Motivate 3}. {Inspire 3}. {Auto-inspire}. {Pass 5}. {Greater Pass 5}. When attacking with a Weapon that has the {Ranged} keyword, its max range becomes unlimited, and you gain {Deadly} and {Precise}",
"Mnestis. Unique. {Reach 2}. {Light X}. {Fire X}. {Auto-hope X}. {Commit} (@Fate @Fate). Ignore Power Dice Limit rules. Gain +1 @Power for each Hope token in the Kratos Pool. X is the number of Aether tokens you have. <Each hit> Gain 1 Aether token. {Husk}. $Ambrosia {Abysswalk}",
"Mnestis. Unique. {Ranged 1-6}. {Unwieldy}. {Cumbersome}. {Hope 3}. {Black 3}. {Elation 3}. {Spiral 3}. {Pull 3}. {Vault}. {Armor-piercing}. {Harpooned}. $Fate $Fate $Fate $Discard Place the Primordial adjacent to you (even from outside the Board). <Start of Battle> Gain 1 Aether token. <Start of your turn> Gain 1 Ambrosia",
"Mnestis. Unique. {Light X}. {Ambrosia Limit 6}. <Start of Battle> Gain 3 Oxygen tokens. When you are about to flip or discard Oxygen tokens, place them on this card instead. $Fate $Exhaust {Abysswalk}. X is the number of Oxygen tokens on this card",
"Mnestis. Unique. {Opening 3}. {Closing 2}. {Hope 4}. {Deadly}. {Remote Scan}. When you become the Target of a Laser or Microwave Attack, this Weapon gains {Light X}, {Strikeback X}, and {Ranged 1-X} until the end of your turn, where X is 1 + the Attack's level. $Exhaust {Block 1}",
"Mnestis. Unique. When the Primordial is about to move, if you're facing it, lower its non-unlimited movement by half (rounding down). The Crit Evasion die always evades. <Reaction> {Superior Reflex}",
"Mnestis. Unique. {Reach 2}. {Unwieldy}. {Opening 5}. {Fire 6}. {Rouse 1}. {Primordial Bypass}. For each space you move through the Primordial, gain 1 Pain token and place 1 Break token in the Kratos Pool. $ComplicatedAction *Trampling Rush:* Perform {Improved Rush}, then move up to your @Speed in a straight line",
"Mnestis. Unique. {Fearless}. {Rocksteady}. {Stalwart}. When you are about to Awaken from a _You Died_ Obol, resolve the _You Live!_ instead. $Exhaust Gain +X @Danger to gain {Light X} and {Fire X} until end of turn. Gain Y Pain tokens to Gain Y Aether tokens and {Superior Reinforce Y} (up to 3)",
"Mnestis. Unique. {Auto-hope 2}. {Closing 4}. {Overbreak 6}. {Hope 2}. {Assist 4}. {Clutch}. {Succor}. <Start of Battle> Gain 1 Oxygen token. <Crit Chance> All Titans move toward you up to their @Speed value. *As Promised:* When you discard this card, immediately gain the [Promise Fulfilled] @Gear card, with 2 positive Precision tokens and +1 @MortalPowerDie on it. %Danger 5+% When another Titan gains a Crit Chance, all other Titans (you included) may move toward that Titan up to their @Speed value",
"Mnestis. Unique. {Fearless}. {Midas Immune}. {Ambrosia Limit +3}. <Start of Battle> Gain the Wise Providence Boon and 2 Aether tokens. $Pain $Exhaust *Authority:* All other Titans gain the [Knockdown (standing up)|AL0303] Condition card and become shaded until they stand up",
"{Liquid Edge}. {Power Re-roll 2}. {Auto-fire 1}. {Commit} (@Pain). If all other Weapon slots are empty, you gain +2 @Power",
"Ascended. {Argonaut Possession}. This item replaces one Titan's [Fists|AJ0156] @Gear card. If used as a @ThreeHanded Weapon, gain +1 @d10",
"Unique. -1 @Speed. {Reposition 1}. {Cumbersome}. <Each Hit> {Opening 1}. <Full Miss> {Opening 2}",
"Unique. {Ambrosia Limit +1}. $Fate $Discard When you are about to discard an Oxygen token, roll a d10. On a 6+, ignore that effect",
"Unique. {Reach 2}. {Opening 1}. {Black 2}. {Provoke}. {Pull 1}. $Ambrosia $Exhaust {Hermes Move 1}",
"Unique. You may gain 1 additional @OneHanded slot during Loadout. If you do, gain 2 Ambrosia tokens at the start of Battle. $Fate $Discard {Reverse Unholy Alchemy}",
"<Start of Battle> You may gain the [Terror|EL2596] Condition card",
"{Break 3}. {Stuck}. When you trigger Stuck, gain {Rocksteady} until the start of your turn. $ComplicatedAction {Rush}, but only in a straight line. <Full Miss> {Break 3} or {Opening 3}",
"{Liquid Edge}. {Light 2}. <Each Hit> {Closing 1}",
"{Titan Attachment}. {Opening 1}. This item replaces one Titan's [Fists|AJ0156] @Gear card",
"{Unburden 2}. {Pushback 2}. <Wound> During the second ability window, place BP LVL Midas tokens in the Kratos Pool. Treat them as Black tokens. When a Titan clears the Kratos Pool, they gain those Midas token",
"{Ranged 2-3}. {Cumbersome}. {Commit} (@Energy). {Startup 3}. {Fire 3}",
"{Opening 1}. {Fire 1}. <Sunbask 1> Immediately {Hide} or @Fate @Fate {Wish Armor}. <Crit Evade Fail or Crit Miss> Discard this card",
"{Reach 2}. {Commit}. {Cumbersome}. {Black 3}. $ComplicatedAction $Fate {Hermes Move 1}, then, if you stopped adjacent to the Primordial, attack with +2 Precision and {Auto-break 2}",
"{Ranged 3-4}. {Break 3}. {Assist 2}. {Commit}. {Cumbersome}",
"{Ranged 2-6}. {Cumbersome}. {Spiral 2}. {Pull 1}. {Reposition 2}. When you deal a Wound, lose -1 @Fate",
"{Black 2}. {Commit}. {Precise}. $ComplicatedAction Perform an Attack with {Deadly}. <Crit Chance> If the Primordial is 1 Wound from death, before the Power Roll, ignore the Crit Chance to gain {Clutch} for this Attack",
"{Opening 2}. {Deadly}. $Fate $Fate $Fate $Discard Glaciate an adjacent space or destroy and adjacent Black Iceberg Terrain tile. You may use this ability as <Reaction>",
"Unique. {Black 4}. {Knockback 1}. $Fate <Full Hit> {BP Suppress}. <Each Miss> {Opening 1}",
"Unique. Titan Possession. {Midas Immune}. {Unburden 2}. This cannot be exhausted or discarded in any way. <Wound> You may discard a Mind Condition card",
"Unqiue. +1 @Speed. Ignore Chasms. You cannot perform Hermes Moves. When you suffer Crash, discard this card. $Energy $Fate $Fate *Rearm:* Equip any 1 Weapon @Gear card from the Armory",
"Unique. -1 @Speed. Ignore {Chasm}. You cannot perform Hermes Moves. Other Titans may treat your space as Elevated for the purposes of Hermes Movement (they cannot end their movement on your space)",
"Unique. {Ascended}. {Provoke}. Ignore Flare and Feint Primordial Responses. Disable the {Toying} Trait. <Start of your turn> Gain 1 Ambrosia token",
"Unique. {Ascended}. {Ambrosia Limit -1}. {Reach 3}. {Closing 2}. {Carving 1}. Disable the {Toying} Trait. <Reaction> $Exhaust {Pursuit 5}, gain 1 Ambrosia token. <Crit Miss> @Adversary, gain 1 Ambrosia token",
"Unique. {Deadly}. {Ranged 3-7}. {Fire 5}. {Commit}. {Cumbersome}. *Guided Vengeance:* When another Titan dies, gain 1 @Energy. Gain +1 @Power against the Nietzschean. $Fate $Energy $Energy $Energy {Precise}",
"Unique. Ascended. {Pushback 1}. When you attack, gain +1 @Danger and lose -1 @Fate",
"Unique. Badge. Titan Attachment. Once per Battle you may lower Ambrosia gain to 1. When you do, place an Ambrosia token on this card as a reminder. <Crit Evade Fail> Discard this card and draw a Kratos card",
"{Knockback Reduction 1}. {Pushback Reduction 1}. For each @Danger mitigated, place a Break token in the Kratos Pool",
"{Opening 2}. {Elation 1}. {Reposition 1}. <1+ Miss> {Rouse 1}. <Full Miss> Immediately {Pushback 3}",
"{Daze}. {Overbreak 2}. {Pushback 2}",
"{Reach 2}. {Opening 1}. {Break 1}. $Fate You may attack with this Weapon as if it had {Ranged 3-5}. Discard it at the end of that Attack",
"Unique. Badge. Titan Attachment. Once per Battle, when you are about to gain the [Dread|AL0299] or [Holy Terror|EL2596] Condition card, you may gain respectively [Fear|AL0299] or [Terror|EL2596] instead. When you do, place a Condition token on this card as a reminder. <Crit Evade Fail> Discard this card and draw an Obol",
"Unique. {Bypass}. Ignore Crash. $Fate $Exhaust {Stanch} (@Ambrosia)",
"Unique. {Ranged 2-4}. {Pull 4}. {Hope 1}. {Opening 3}. <Start of Battle> Gain 1 Aether token. $Fate {Harpooned}",
"Unique. {Ranged 4-8}. {Unwieldy}. {Cumbersome}. {Commit}. {Pull 6}. {Armor-piercing}. Ignore the {Microwave Shield} Trait",
"{Ranged 3-4}. {Cumbersome}. {Daze}. $CombatAction *Take Aim*: Place an Opening token on this card. For each Opening on this card gain +3 Precision. When you attack, discard all Opening tokens from this card",
"$Fate $Fate {Scale}. $Fate $Fate $Exhaust If you're on a VP< you may swap spaces with another Titan that is adjacent to the Primordial. You may use this ability as a free action or at the end of your turn",
"{Reposition 1}. {Opening 2}. <Each hit> Gain +1 @Power. <Crit Chance> Gain +1 @Power",
"{Ranged 2-3}. When you hit, Pull the Primordial until it is adjacent to you. Moving outside your effective range doesn't cause a Chain Break",
"{Reach 2}. {Commit}. $Exhaust <Wound> Place a negative @Speed modifier token on the Primordial Sheet. When you unexhaust this card, Discard that token",
"Ascended. Unique. You may equip _Paradox_ @Gear regardless of the Cycle you're in",
"Ascended. Unique. Your Titan uses the [Time's Woe Momentum] Trait. $Fate $Fate {Rewind}. You may use this ability as a @Reaction. $Fate Reestablish your Time Anchor. You may use this ability as a free action or at the end of your turn",
"Unique. Badge. Titan Attachment. Once per Battle you may lower @Fate cost of an ability to 1 (to a minimum of 0). When you do, place a generic token on this card as a reminder. <Crit Evade Fail> Discard this card and suffer {Death 1}",
"Unique. Mnestis. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. {Argo-drift}. +2 Precision. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"Unique. Mnestis. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. {Argo-drift}. <Reaction> $Fate $Exhaust {Advanced Reflex}",
"Unique. Mnestis. Titan Attachment. {Restricted} (_Cryptex_). {Frontlines}. {Argo-drift}. {Hope 2}. <Reaction> $Fate $Exhaust {Advanced Reflex}"
]
const RAWROWS2 = [
"",
"",
"",
"",
"",
"",
"",
"",
"",
"Danger 5+: Reposition 4 instead",
"",
"",
"",
"Danger 2+: When you are about to perform a Power Roll, gain +3 @Danger to gain +1 @RedPowerDie for this Attack",
"Danger 6+: {Auto-break 1}",
"",
"",
"Danger 6+: {Spotlight}",
"Danger 5+: {Diversion}",
"Danger 5+: {Opening 2}",
"",
"",
"",
"",
"Danger 8+: {Reinforce 2} instead",
"Danger 5+: <Crit Evade> Place 2 Break or Opening tokens in the Kratos Pool",
"Danger 6+: {Power Re-roll 1}",
"",
"Danger 6+: $Fate $Exhaust Place 2 Break or 2 Opening tokens in the Kratos Pool",
"",
"Danger 9+: {Rocksteady}",
"Danger 6+: <Crit Evade> Gain {Stalwart} until the end of this Attack",
"",
"",
"",
"",
"Danger 6+: $Discard {Dodge}",
"Danger 8+: Ignore this card ability's @Fate cost",
"Danger 6+: Gain +3 @Speed instead",
"Danger 7+: You may use Stabilizers' ability as @Reaction",
"",
"",
"Danger 8+: {Stalwart}",
"Danger 5+: {Tumble}",
"Danger 5+: {Opening 2}",
"Danger 5+: {Break 2}",
"Danger 5+: {Opening 1}. {Break 1}",
"",
"",
"",
"",
"",
"Danger 7+: {Overbreak 2}",
"",
"Danger 6+: <Full Evade> You may immediately perform an additional @MovementAction",
"",
"",
"Danger 4+: $Discard Remove up to 2 Ambrosia tokens from yourself or an adjacent Titan",
"",
"Danger 6+: {Power Re-roll 1}",
"Danger 6+: You may use Provoke on this card as @Reaction",
"",
"",
"Danger 7+: $Fate {Heartseeker}",
"Danger 6+: When you change tokens, immediately place 1 Break or 1 Opening token in the Kratos Pool",
"Danger 7+: You may use this card's {Solace} ability as @Reaction",
"",
"Danger 6+: {Ambrosia Limit 5}",
"",
"",
"",
"",
"Danger 4+: When you are about to suffer Knockdown, roll a d10. On 6+, ignore it",
"Labyrinth 4+: You may use {Transform} as @Reaction; Danger 6+: <Crit Evade> Place 1 negative @AT token in the Kratos Pool",
"Danger 4+: <Crit Evade> Place 1 {Diversion} token in the Kratos Pool",
"Danger 6+: {Auto-break 1}",
"Labyrinth 2+: {Daze}; Labyrinth 4+: Ignore {Cumbersome}; Danger 6+: {Auto-break 1}",
"Labyrinth 2+: {Carving 1}; Labyrinth 3+: +1 Precision; Labyrinth 4+: {Deadly}; Labyrinth 5+: {Auto-break 1}; Danger 7+: {Rouse 1}",
"Labyrinth 2+: {Break 1}; Danger 5+: {Power Re-roll 1}",
"Danger 6+: $Fate {Spotlight}",
"Danger 5+: <Reaction> $Fate $Discard {Self Combo Breaker: 2 spaces}. For this ability treat this card as a Weapon with the valid Trait",
"Danger 5+: $Discard When a Titan successfully climbs a Primordial VP from the _Stepping Stone_, that Titan gains +1 @Power for their next Attack",
"Danger 7+: $Fate $Exhaust When the Primordial is about to Escalate from a Response, ignore this Escalation",
"Danger 7+: $Fate $Discard {Second Chance}",
"Danger 7+: When you are about to involuntarily, permanently lose a Weapon, you may lose this card instead",
"Danger 5+: You may use this card's abilities as @Reaction",
"Danger 6+: <Reaction> $Discard Discard 1 Ambrosia token",
"Danger 5+: <Reaction> $Discard Discard 1 Ambrosia token",
"Danger 7+: <Reaction> $Discard Discard 1 Ambrosia token",
"Danger 7+: If you would die from an Instant Death effect of a Judgement, draw an Obol instead",
"Danger 5+: If you would die from an Instant Death effect of a Judgement, draw an Obol instead",
"Danger 6+: {Reposition 1}",
"Danger 5+: {Break 1}",
"Danger 6+: When you break a Combo, place 2 Opening tokens in the Kratos Pool",
"Labyrinth 2+: If you are adjacent to the Primordial, loses Ranged and gains the _Club_ Trait; Danger 5+: {Auto-break 1}",
"Danger 7+: When this card causes you to suffer [Knockdown|AL0299], you may immediately {Stand up} and move up to 2 spaces",
"Labyrinth 3+: $Fate $Exhaust {Superior Stanch} (@Ambrosia)",
"Danger 7+: This card's ability extends to spaces adjacent to you",
"Danger 8+: {Deadly}",
"Danger 6+: {Auto-break 2}; Danger 8+: {Spotlight}",
"",
"Danger 7+: {Armor Re-roll 2}",
"",
"Danger 5+: When you break a Combo, place 2 Break tokens in the Kratos Pool",
"",
"Danger 6+: {Opening 1}",
"Danger 7+: You may use {Vault} on this card as a @Reaction",
"Danger 5+: {Reinforce 1}",
"Danger 5+: <Reaction> $Fate $Discard When adjacent to the Primordial, break any Combo",
"",
"Danger 5+: {Advanced Jump} instead",
"Danger 5+: When you break a Combo, place 1 Opening token in the Kratos Pool",
"Danger 7+: <Reaction> $Fate $Exhaust Unexhaust any 2 @Gear",
"Ambrosia 2+: {Deadly}; Danger 7+: {Rouse 1}",
"Danger 5+: {Opening 1}",
"Danger 2+: When you use {Sacrifice}, you may gain additional +2 @Danger to gain +1 @RedPowerDie for this Attack",
"",
"Danger 1+: When you use {Sacrifice}, you may gain additional +1 @Danger to place 2 Break tokens instead",
"",
"Danger 7+: $Fate $Discard {Second Chance}",
"Danger 4+: {Opening 1}",
"",
"Danger 5+: <Crit Evade> Place 2 Break or 2 Opening tokens in the Kratos Pool",
"Danger 6+: {Power Re-roll 2}",
"Danger 7+: {Knockback Reduction 1}. {Pushback Reduction 1}",
"Danger 8+: $Fate $Exhaust {Stalwart}",
"Danger 8+: <Crit Evade> Place 2 Break or 2 Opening tokens in the Kratos Pool",
"Danger 8+: <Reaction> {Transform}",
"Danger 6+: {Ambrosia Limit 6}",
"Ambrosia 2+: Your @RedArmorDie becomes @BlackArmorDie; Danger 8+: <Crit Evade> Discard 1 Ambrosia token",
"Danger 7+: When attacking a BP III card with a Death Blow Crit effect, gain +1 @Power",
"Danger 7+: $Fate {Advanced Jump} instead",
"Danger 6+: {Diversion}",
"Danger 5+: {Overbreak 1}",
"",
"Danger 6+: Add +4 to the Climb test instead",
"Danger 5+: {Opening 1} ",
"Danger 5+: {Rouse 1}",
"Ambrosia 1+: Ignore the Corrossive state; Ambrosia 3+: Ignore the Gelatinous state; Danger 5+: <Start of your turn> Unexhaust this card",
"Ambrosia 1+: +1 Precision; Ambrosia 3+: One @BlackPowerDie becomes @WhitePowerDie; Danger 5+: Ignore the {Metamorphosis} Trait",
"Ambrosia 1+: +1 Precision; Ambrosia 2+: One @BlackPowerDie becomes @WhitePowerDie; Ambrosia 3+: {Armor-piercing}; Danger 5+: {Break 1}",
"Danger 6+: For the purposes of Combo-breaking, treat this card as having all Weapon class Traits",
"Danger 6+: When you attack from a VP, gain +1 @Power",
"Danger 6+: {Overbreak 2}",
"Danger 6+: {Overbreak 2}",
"Danger 7+: If you Attack from a VP, you have +1 @Power",
"Danger 7+: {Ambrosia Limit 5}",
"Danger 5+: Place 2 tokens instead",
"",
"Danger 7+: {Opening 1}",
"Danger 7+: Ignore @Exhaust cost of {Block 1}",
"Danger 6+: {Reposition 2}",
"Danger 7+: $Discard Lose -2 @Fate",
"Danger 6+: Gain +1 @Speed",
"Fate 8+/Ambrosia 3+: {Transform}",
"Danger 8+: $Ambrosia {Advanced Reinforce 1}",
"Ambrosia 3+: +1 @RedArmorDie; Danger 5+: {Soak}",
"Danger 8+: <Crit Evade> Discard 1 Ambrosia token",
"Danger 8+/Ambrosia 3+: {Transform}",
"Danger 6+: $Ambrosia When performing a Power Roll, gain +1 @Power",
"Danger 7+: Immediately {Hide} and {Transform} (once per Battle)",
"Danger 7+: $Ambrosia $Fate {Precise}",
"Danger 6+: Gain the [Hatred|BL0661] Condition card; Rage 8+: Gain +2 @Rage",
"Rage 5+: Gain the [Berserk|AN0374] Kratos card. If you already have it, place a generic token on it instead. If there is a generic token on [Berserk|AN0374] when you succeed the Rally test, discard this token and fail the test instead",
"Danger 7+: $Fate {Precise}",
"Rage 7+: Each hit provides 1 @BlackPowerDie instead",
"Danger 7+: {Inspire 1}",
"",
"Danger 5+: {Opening 1}",
"",
"Danger 4+: $Discard Discard up to 2 Ambrosia tokens from yourself or an adjacent Titan",
"",
"",
"Danger 5+: Gain 1 @Energy token",
"Danger 6+: <Crit Chance> Gain +1 @Power",
"Danger 6+: <Crit Chance> Gain +1 @Power",
"Danger 7+: {Black 1}",
"Danger 5+: When you attack, if you are adjacent to a Blindspot space, you are considered to be in the Blindspot",
"",
"Ambrosia 3+: Gain +1 @RedPowerDie; Danger 6+: {Power Re-roll 2}",
"Ambrosia 3+: {Fire 1}; Danger 5+: Auto-black 1",
"Ambrosia 2+: <4+ hits> +1 @RedPowerDie from a Rear or Blindspot space; Ambrosia 3+: {Black 1}; Danger 6+: {Reposition 4} instead",
"Ambrosia 3+: $Fate *Hardening:* Trigger the *Full Hit* ability; Danger 7+: {Rouse 1}",
"Ambrosia 3+: $Fate $Fate {Precise}; Danger 6+: $Fate {Spotlight}",
"Ambrosia 2+: +1 @d10; Ambrosia 3+: {Black 1}; Danger 5+: {Auto-break 1}. {Ranged 2-6} instead",
"Ambrosia 3+: {Vault}; Danger 5+: If you have no Evasion bonus, gain +1 @Evasion",
"Danger 7+: $Discard {Second Chance}",
"Ambrosia 2+: <Full Hit> One @RedPowerDie becomes @BlackPowerDie; Ambrosia 3+: {Laser Resistance 1}; Danger 4+: When you Block with this card, you may immediately resolve {Pushback 1}",
"Danger 7+/Paradox 3+: When you arrive from Time-clocked, gain 1 positive Evasion token",
"Danger 4+: @Paradox and @Fate effect triggers on AI cards trigger at +1",
"Danger 7+: You can use this card's ability if there are up to 2 tokens in the Kratos Pool",
"Danger 7+/Paradox 3+: $Discard {Second Chance}",
"Danger 7+: 3 @EvasionReroll instead",
"Danger 7+: {Motivate 2} instead",
"Danger 6+: <Crit Evade> Lose -1 @Fate",
"Danger 7+: <Crit Evade> Place 1 Diversion token in the Kratos Pool",
"Danger 7+: {Reposition 2} instead",
"Danger 6+: {Opening 1}",
"Danger 7+: {Deadly}",
"Danger 6+: {Ranged 2-6} instead",
"Danger 5+: {Pushback 1}",
"Bleeding 1: {Attack Re-roll 1}; Danger 9+: {Break 1}",
"Danger 5+: {Opening 1}",
"",
"Bleeding 2+: {Auto-break 1}. {Black 1}. {Clutch}; Danger&Fate 9+: {Attack Re-roll 1}",
"Danger 7+/Fate 7+: $Discard When you are about to die from an Instant Death effect of a Judgement, draw an Obol instead",
"Danger 6+/Paradox 3+: You may use this card's abilities as @Reaction",
"Danger 7+/Paradox 3+: $Discard {Second Chance}",
"Danger 8+/Fate 8+: $Fate $Exhaust {Rewind}",
"Danger 8+/Fate 8+: $Discard When you are about to be erased from existence, you die instead",
"",
"Danger 8+: Gain +1 @Speed",
"Danger 8+: $Fate $Discard When you are about to die from incineration, draw an Obol instead",
"Danger 8+/Fate 8+: $Discard When you are about to be erased from existence, you die instead",
"Danger 7+/Fate 7+: $Discard $Fate $Fate Move the top card from the AI discard to the top of the AI deck",
"Danger 7+/Fate 7+: You may use this card's ability as @Reaction",
"Danger 5+: $Fate $Discard Discard the [Bleeding|CL1283] Condition card and all Bleeding tokens",
"Danger 7+: {Pull Reduction 1}",
"",
"Danger 7+: You may use this card's ability as @Reaction",
"Danger 5+: $Discard Discard 2 Bleeding tokens",
"Danger 7+: $Discard {Glaciate} an adjacent space",
"Danger 7+: {Opening 1}",
"Danger 7+: <Wound> {BP Suppress}",
"Danger 8+: {Clutch}",
"Bleeding 3+: {Break 1}. {Black 1}; Danger 6+: {Succor}",
"Danger 7+: {Rouse 1}",
"Danger 6+: $Discard {Lifeline}",
"Fate 7+: Twice per Round instead",
"Danger 6+: <Crit Chance> {Break 1}",
"Danger 4+: <Crit Evade> Lose -2 @Fate",
"Rage 7+: Immediately place 2 tokens on this card",
"",
"",
"",
"",
"",
"Danger 7+: $Fate $Fate Before you reveal the BP card, decide if you will ignore Fail or Wound Responses",
"Rage 6+: <Wound> {BP Suppress}",
"Danger 6+: $Fate {Reinforce 1}",
"Danger 5+: $Fate $Exhaust {Block 1}",
"Rage 6+: If you attack from a shaded space, you have +1 @Power",
"Danger 6+: You may use this card's ability as @Reaction",
"Danger 4+: <Crit Evade> After resolving this Primordial Attack, you may move up to 5 spaces",
"Fate 7+: You can use your @MovementAction to move your Time Anchor instead of your Titan",
"Danger 7+: {Spiral 2}. {Assist 1}",
"Danger 8+: {Succor}",
"Fate 6+: $Danger $Discard {Second Chance}",
"Danger 9+: {Assist 1}",
"Danger 8+: {Clutch}",
"Danger 7+: {Succor}",
"Danger 8+: {Rocksteady}",
"Danger 6+: {Bypass}",
"Danger 7+: {Spotlight}",
"Danger 7+: <Crit Evade> You may immediately Transform and perform a *Bonus Attack!*",
"Danger 5+: $Fate {Quantum}",
"Danger 6+: $Fate $Exhaust {Precise}",
"Fate 6+: $Fate {Quantum}",
"",
"Bleeding 2+: $Fate {Quantum}; Bleeding 3+: +1 @Power",
"Bleeding 2+: {Spiral 3}; Bleeding 3+: {Break 2}",
"Rage 5+: For purposes of Rapid Adaptation, this weapon can have any Weapon Trait",
"",
"",
"Fate 6+: $Discard Choose a Titan. That Titan arrives from Time-clocked",
"Fate 9+: $Discard Lose -3 @Fate",
"Danger 5+: {Clutch}",
"Danger 9+: <Reaction> $Discard {Glaciate} an adjacent space",
"",
"",
"",
"",
"",
"Danger 6+: {Clutch}",
"",
"",
"Danger 4+: <Crit Evade> You may immediately perform a *Bonus Attack!*",
"Danger 6+: $Discard When you are about to gain Ambrosia tokens, ignore this gain",
"",
"",
"Danger 7+: $Fate $Exhaust {Defy 1}",
"Danger 6+: {Reposition 3}",
"Danger 7+: $Discard Lose -3 @Fate",
"Danger 6+: Gain +1 @Speed",
"Danger 7+: <Wound> {BP Suppress}",
"Fate 7+: If you draw a [Disemboweled|AM0341] Trauma card, draw an Obol instead",
"Danger 4+: When you are about to suffer Knockback} and there is a Titan directly behind you, ignore this Knockback",
"Danger 7+: You gain @Power for 10s rolled on non-Crit dice as well",
"Danger 5+: When another Titan gains a Crit Chance, gain {Succor} for that Attack",
"Rage 4+: $Fate {Precise}",
"Danger 7+: $Fate {Heartseeker}",
"Rage 5-: $Fate $Exhaust {Glaciate} an adjacent space",
"Danger 5+: $Fate {Precise}",
"Danger 6+: <Crit Evade> {Knockback 3}",
"Ambrosia 1+: One @BlackPowerDie becomes @WhitePowerDie; Ambrosia 2+: {Armor-piercing}. {Reach 2}; Ambrosia 3+: Another @BlackPowerDie becomes @WhitePowerDie. {Elation 1}; Danger 6+: {Hope 2}",
"Danger 7+: Gain the [Marked for Death|AM0323] Major Trauma card. Ignore the death effect of the [Fear|AL0299] and [Dread|AL0299] Condition cards",
"Danger 8+: $Fate {Hearthseeker}",
"Danger 5+: $Fate {Precise}",
"Death: *4+:* Voluntarily die to deal 1 Single Wound. <<NL>>*3-:* $Fate {Rewind}. <<NL>>*2-:* {Black 2}. Gain +1 @Power. <<NL>>*1:* Gain an additional +1 @Power",
"Danger 7+: {Pushback 2}",
"Rage 6+: One @BlackPowerDie becomes @WhitePowerDie",
"Danger 5+: {Armor-piercing}",
"",
"Danger 7+: When you are about to die on a Labyrinth tile, move up to 4 spaces and perform a *Bonus Attack!* Then discard this card and die",
"Fate 6+: Gain +1 @Power against @GT. $Discard Discard all Ambrosia tokens from any Titan",
"Fate 6+: Only if used as @TwoHanded: $Fate $Fate $Fate $Discard {Second Chance}",
"",
"Danger 6+: When you Awaken, treat it as if you \"Went Beyond\" (see Go Beyond rules)",
"Danger 4+: {Inspire 3} instead",
"Rage 7+: Immediately discard all Ambrosia tokens (only once per Battle)",
"Danger 9+: If you gain @Rage above 9, instead of dying, draw an Obol",
"Fate 6+: Lose Auto-hope 2 and Fire 3. Gain {Black 5}",
"",
"",
"",
"Danger 6+: {Power Re-roll 2}",
"Danger 6+: {Pushback 2}",
"Danger 6+: $Energy $Fate $Exhaust {Hermes Move 1}",
"",
"Danger 6+: {Fire 1}",
"Danger 6+: {Assist 2}",
"Danger 5+: Loses {Cumbersome}",
"Danger 8+: {Deadly}",
"Danger 9+: Weapon gains {Clutch}",
"Danger 5+: $Discard {Second Chance}",
"Danger 7+: <Reaction> $Fate $Exhaust {Pursuit 3}",
"Danger 4+: When you Block, immediately place 1 Opening token in the Kratos Pool",
"Danger 7+: When you use this card's Unholy Alchemy, place as many Black tokens in the Kratos Pool as Midas tokens you've turned",
"",
"",
"",
"Danger 7+: You may use this card's ability as @Reaction",
"Danger 9+: 3 @EvasionReroll instead",
"Danger 5+: $Discard Place an [Irem Tower|DI2028] Terrain tile on an adjacent space",
"Danger 8+: {Commit} (@Midas)",
"Danger 4+: {Power Re-roll 1}",
"",
"",
"Danger 8+: $Fate $Discard {Superior Stanch} (@Midas)",
"",
"Midas 2+: $Midas $Midas {Wish Armor}",
"",
"Danger 9+: $Discard {Clutch} (don't discard the active weapon)",
"",
"Danger 7+: $Discard Discard all Midas tokens from this card",
"Danger 8+: If you exhausted this card to gain Wish Armor, $Discard $Fate gain {Advanced Wish Dodge}",
"",
"Danger 8+: $Discard When you are about to die from any Curse effect, draw an Obol instead",
"Danger 9+: {Clutch}",
"Danger 7+: {Clutch}",
"Danger 5+: {Startup 2}",
"Danger 9+: $Discard Flip 1 Aether token",
"",
"",
"",
"",
"",
"",
"",
"Danger 8+: $Discard {Second Chance}",
"Danger 8+: <Reaction> $Discard {Hermes Reflex}",
"",
"",
"Midas 1+: {Provoke}; Midas 2+: {Daze}; Midas 3+: {Diversion}; Midas 4+: $Fate <Wound> {AI Suppress}; Danger 7+: {Midas Immune}",
"Midas 3+: $Ambrosia $Fate {Superior Stanch} (@Midas)",
"Danger 6+: $Midas $Fate $Exhaust {Lifeline}",
"",
"",
"Danger 5+: {Pole Position}",
"Danger 5+: $Discard Place an [Irem Tower|DI2028] Terrain tile on an adjacent space",
"Danger 5+: Gain 1 Midas token",
"Danger 6+: {Auto-break 2}",
"Danger 8+: $Discard {Wishrod}",
"Danger 7+: $Fate $Discard {Fly}",
"Midas 1+: <Crit Miss> Turn all your Midas tokens into Ambrosia tokens",
"Fate 8+: {Succor}",
"Danger 5+: <Reaction> $Discard Place an [Irem Tower|DI2028] tile on an adjacent space",
"Danger 5+: <Reaction> $Discard {Hermes Reflex}",
"Danger 6+: When on a VP, you gain +1 @Power",
"Midas 6+: {Auto-break 1}",
"Danger 9+: $Discard {Superior Chance}",
"",
"Midas 7+: $Discard Dicard up to 2 Midas tokens",
"Danger 8+: <Reaction> $Fate $Exhaust {Hermes Reflex}",
"Wishkeen: $Fate {Spotlight}",
"Greed-crazed: {Power Re-roll 2}",
"Wishagog: {Precise}",
"Danger 7+: $Discard {Second Chance}",
"Danger 7+: $Discard Discard a Condition card",
"Danger 7+: If there is a Wish or Curse Attack on the top of the AI discard pile, you gain {Auto-break 2}",
"Danger 6+: <Wound> {AI Suppress}",
"Danger 5+: When on a VP, you gain +1 @Power",
"Danger 6+: <Full Evade> Perform {Hermes Move 1}",
"Midas 4+: $Discard When a Curse Attack is about to affect you, ignore that Curse Attack (others remain affected)",
"Midas 5+: When on a VP, you gain +1 @Power",
"Rage 6+: Gain the Wishkeen Condition card",
"Wishkeen: <Full Evade> Perform {Hermes Move 2}",
"Wishagog: {Ranged 2-7} instead",
"Rage 7+: Immediately gain +3 @Rage",
"Rage 7+: Immediately gain +3 @Rage",
"Danger 8+: $Discard {Second Chance}",
"Fate 9+: Loses Cumbersome and Commit",
"Fate 8+: $Discard When you are about to die from an Instant Death effect, draw an Obol instead",
"Danger 7+: <Reaction> $Fate $Exhaust {Hermes Reflex}",
"Danger 7+: <Wound> {BP Suppress}",
"Danger 6+: <Reaction> $Fate $Exhaust {Hermes Reflex}",
"Midas 5+: $Fate $Midas When attacking a BP card with a Death Blow Crit effect, gain a Crit Chance",
"Rage 8+: The Primordial immediately performs Signature against you (once)",
"Wishkeen: Ascent Check +2",
"Danger 6+: <Reaction> $Fate $Exhaust {Hermes Reflex}",
"Danger 9+: $Fate $Exhaust {Superior Chance}",
"Any Condition: {Power Re-roll 2}",
"",
"Danger 6+: $Fate $Discard {Superior Chance}",
"Danger 9+: $Fate {Clutch}",
"Moiros: {Auto-black 3}",
"Danger 9+: *Revolution:* After you resolve your Attack, perform a *Bonus Attack*. Then discard this card and kill a random Titan (you cannot save that Titan in any way.)",
"",
"",
"",
"Rage 4+: $Fate $Discard Place an Airsac Mine token on your space. If the Midascore ever moves through this space, remove the token. It gains 1 permanent negative @AT token for the rest of the Battle",
"Danger 5+: Ascent Check +Y, where Y is the number of Hope tokens in the Kratos Pool when you attacked",
"Danger 3+: Ascent Check +Y, where Y is the number of Hope tokens in the Kratos Pool when you attacked",
"Rage 3+: $Oxygen Gain +1 @Power",
"Rage 6+: Gain the [Hatred|BL0661] and [Fear|AL0299] Condition cards",
"Danger 7+: $Fate {Heartseeker}",
"Ambrosia 1+: One @RedPowerDie becomes a @BlackPowerDie; Ambrosia 2+: {Reach 2}; Ambrosia 3+: Another @RedPowerDie becomes a @BlackPowerDie. {Elation 1}; Danger 6+: {Hope 1}",
"",
"Rage 7+: Immediately discard all Ambrosia tokens (once per Battle)",
"Danger 9+: If you gain @Rage above 9, instead of dying, draw an Obol",
"Despair 2+: {Power Re-roll 1}; Ambrosia 3+: {Pole Position}; Danger 4+: {Liquid Edge}",
"",
"Ambrosia 1+: {Reach 2}; Ambrosia 2+: {Diversion}; Ambrosia 3+: {Reach 3} instead; Negative Condition: {Spotlight}",
"Despair 2+: {Deadly}; Aether 2+: {Light 1}",
"Despair 2+: {Bypass}; Danger 6+: <Reaction> $Fate $Exhaust {Terrain Vault}",
"Despair 2+: {Attack Re-roll 1}; Rage 5+: {Liquid Edge}",
"Despair 2+: Loses Cumbersome; Ambrosia 4+: Can be treated as a Melee Weapon",
"Danger 8+: {Deadly}",
"Danger 6+: Weapon gains {Assist 3}. @Armor gains {Despair Resilience 1}",
"Despair 2+: {Bypass}; Aether 1+: {Light 1}; Any Condition: {Vault}; Danger 5+: <Reaction> $Fate $Exhaust {Pursuit 3}",
"Danger 7+: $Discard {Second Chance}",
"Despair 1+: {Daze}. {Reposition 2}; Danger 7+: $Discard When the Primordial becomes adjacent to you, immediately face it",
"Danger 5+: {Light 1}",
"Danger 9+: $Discard Grant {Second Chance} to another Titan",
"Danger 5+: $Fate $Exhaust {Stand up}",
"Danger 7+: $Oxygen $Discard {Second Chance}",
"Danger 6+: <Reaction> $Fate $Discard {Superior Reflex}",
"",
"Danger 3+: $Fate $Discard When you are the Target of a Dragon of Phobos Attack, ignore the {Pale Grin of Doom} Trait",
"Ambrosia 2+: Loses Stuck",
"Ambrosia 3+: $Fate $Fate {Tilt}; Danger 4+: Immediately gain 2 Pain tokens",
"Danger 4+: {Harpooned}",
"",
"Danger 5+: $Fate $Discard Immediately place 2 Hope tokens in the Kratos Pool",
"",
"Danger 9+: $Discard {Superior Chance}",
"Danger 5+: $Discard {Block 1}",
"",
"Danger 7+: $Fate $Exhaust When the Primordial is about to Vanish, reduce that Vanish by up to 2",
"Danger 6+: $Fate $Discard When you are the Target of a Dragon of Phobos Attack, ignore the {Pale Grin of Death} Trait",
"Danger 5+: Solace gains @Reaction",
"Rage 3+: $Fate $Discard If in Range, ignore Vanish, Fade In, or Black March, or perform a Scan on any [Petrified Vent|EI2606] in Range. Then place 3 Fire tokens in the Kratos Pool",
"Danger 7+: $Fate $Exhaust Ignore {Skitter} you just triggered",
"Danger 8+: $Aether $Discard {Second Chance}",
"Danger 8+: $Aether $Discard When you are about to gain Ambrosia tokens, ignore this gain",
"Danger 7+: $Aether $Discard {Second Chance}",
"Danger 9+: {Clutch}",
"Pain 3+: $Fate $Fate {Tilt}; Rage 5+: $Pain $Pain {Assist 2}",
"Danger 5+: $Fate $Exhaust {Acrobatics}",
"",
"Despair 2+: $Fate {Heartseeker}",
"Despair 2+: $Fate $Aether You Weapon gains +1 @d10. For the purposes of gathering your Power Pool, ignore any hits that exceed your Weapon's regular @d10 value",
"Danger 7+: $Fate $Aether $Discard Place a 1x1 [Lightwall|EI2608] Terrain tile on an adjacent space",
"Despair 3+: $Fate $Aether {Succor}",
"Danger 9+: $Fate $Discard {Armor Re-roll 1}",
"Danger 6+: $Fate $Discard Perform a Scan on an adjacent space, adding +2 to the result",
"",
"",
"Despair 2+: $Discard {Second Chance}",
"Danger 7+: $Fate $Discard Place a 1x1 Lightwall Terrain tile on an adjacent space",
"Despair 2+: $Aether $Discard Grant {Second Chance} to an adjacent Titan",
"Despair 3+: $Aether Gain {Light X} until the end of your turn, where X is the number of Ambrosia tokens you have",
"",
"Danger 7+: $Discard {Superior Chance}",
"Danger 7+: $Discard {Superior Chance}",
"Rage 2+: $Aether $Discard Gain the @PriorityTarget Priority Target token and ignore Vanish, Fade In, or Black March, or perform a scan on any [Petrified Vent|EI2606]",
"Pain 4+: {Deny}",
"Pain 3+: $Discard {Dare}",
"Pain 4+: {Spotlight}",
"Fate 5+: {Deny}",
"Fate 5+: When you are about to draw a Moiros card, you are drowned instead (die)",
"Rage 4+: Immediately gain 1 Oxygen token (once per Battle)",
"Ambrosia 2+: $Fate $Discard When you are about to die from an Instant Death effect, draw an Obol instead",
"Aether 2+: $Fate $Discard {BP Suppress}",
"Rage 3+: Immediately gain 1 Aether token (once per Battle)",
"Despair 2+: {Deny}",
"Despair 2+: {Succor}",
"Danger 6+: $Oxygen {Heartseeker}",
"Despair 3+: One @WhitePowerDie becomes @MortalPowerDie",
"Danger 6+: {Deny}. After you resolve the Deny Attack, discard this card",
"Danger 4+: {Harpooned}",
"Rage 5+: $Discard Gain the [Dread|AL0299] Condition card to reveal the top BP card",
"Pain 2+: $Discard {Superior Chance}",
"Despair 2+: Gain the [Dread|AL0299] Condition card to {Dare}",
"Despair 2+: $Fate $Ambrosia Gain the [Fear|AL0299] Condition card to {BP Suppress}",
"Rage 4+: {Deny}. After you resolve the Deny Attack, discard this card",
"Danger 7+: {Liquid Edge}",
"Rage 5+: $Aether $Discard {Dare}",
"Rage 3+: $Fate $Discard If in Range, ignore Vanish, Fade In, or Black March, or perform a Scan on any Petrified Vent in Range",
"Despair 3+: Discard all Ambrosia tokens",
"Despair 3+: $Discard {Superior Chance}",
"Danger 7+: <Reaction> $Aether $Exhaust {Advanced Reflex}",
"Rage 5+: $Discard Draw an Obol to ignore Vanish, Fade In or Black March, or perform a Scan on any [Petrified Vent|EI2606]",
"Danger 8+: <Reaction> $Oxygen $Exhaust {Advanced Reflex}",
"Pain 4+: $Oxygen Roll for Awakening, adding +2 to the roll. If you don't Awaken, you die (once per Battle)",
"",
"Despair 3+: $Fate $Aether {BP Suppress}",
"Bravery: $Oxygen {Deny}",
"Danger 6+: <Reaction> $Fate $Exhaust {Vault}",
"Rage 1+: Double the number of Kratos tokens you place from your Kratos Table abilities",
"Despair 1+: Ignore the {Pale Grin of Death} and {Pale Grin of Doom} Traits",
"",
"Aether 2+: {Primordial Bypass}",
"",
"Pain 3+: $Oxygen Roll for Awakening, adding +2 to the roll. If you don't Awaken, you die (once per Battle)",
"Rage 5-: $Fate $Discard {Superior Chance}",
"",
"Fate 6+: Immediately discard this card",
"Fate 6+: Immediately discard this card",
"",
"Despair 1+: Ignore the {Pale Grin of Death} and {Pale Grin of Doom} Traits",
"Rage 1+: Double the number of Kratos tokens you place from your Kratos Table abilities",
"Aether 1+: {Tilt}; Aether 2+: +1 @Power; Aether 3+: {Precise}; Aether 4+: +1 @Power; Rage 3+: $Fate {Deny}",
"Rage 5+: $Oxygen $Discard {Dare}",
"",
"Danger 9+: $Aether $Exhaust {Superior Chance}",
"Danger 6+: $Fate $Aether {Clutch}",
"Danger 6+: <Reaction> $Fate $Exhaust Grant {Superior Reflex} to another Titan",
"Rage 5+: $Discard Ignore Vanish, Fade In, or Black March, or perform a Scan on any [Petrified Vent|EI2606]",
"Ambrosia 2+: X is equal to the amount of Obol cards in the Obol deck",
"",
"",
"Danger 5+: {Harpooned}",
"",
"Rage 4+: $Fate {Precise}",
"Danger 7+: Gain the [Marked for Death|AM0323] Major Trauma card. Ignore the death effect of the [Fear|AL0299] and [Dread|AL0299] Condition cards",
"",
"",
"Fate 6+: Gain +1 @Power against @GT. $Discard Discard all Ambrosia tokens from any Titan",
"Rage 2+: *Aeon Transgress:* At the start of your turn, make an Awakening Roll, adding @Rage to your roll. If you Awaken, treat it as if you had Awakened from an Obol (you die at the end)",
"",
"Danger 4+: Immune to {Float}",
"Danger 7+: <Wound> {AI Suppress}, {Diversion}",
"Fate 3+: $Discard {Stand up} and {deflate}. You may use this ability when knocked down and/or floating",
"Midas 2+: $Discard When you are about to die, reset all Terrain according to the Battle Setup, then {Lifeline}, finally suffer {Knockdown}",
"",
"Danger 7+: <Reaction> $Fate {Self Combo-breaker: 6 spaces}",
"Rage 5+: $Fate $Exhaust After you draw an AI, but before you resolve it, move up to 4 spaces, ignoring the Board Edge, as if you were using the Dahaka's {Shadowstep} keyword",
"Danger 9+: $Fate $Fate $Fate $Discard Resolve an effect of a Summoning card you have",
"Fate 9+: $Discard When you are about to die, reset your Triskelion, discard all Despair and Ambrosia tokens, and flip all Aether tokens instead",
"Ambrosia 3+: Gain +3 @Power against @GT. $Discard Discard all Ambrosia tokens from any Titan",
"Despair 3+: Ignore the Chasm keyword",
"Danger 9+: $Discard When you are about to die from an Instant Death effect, draw an Obol instead",
"Rage 6+: $Discard If you're one of the Targets of a Sequential or Simultaneous Attack, become the only Target of that Attack",
"",
"Rage 4+: $Aether $Exhaust {Dare}",
"Rage 3+: $Fate $Discard If in Range, ignore Vanish, Fade In, or Black March, or perform a Scan on any [Petrified Vent|EI2606] in Range. Then place 3 Fire tokens in the Kratos Pool",
"",
"Pain 2+: $Fate {Heartseeker}. Danger 6+: $Fate $Aether {Clutch}",
"",
"",
"Danger 7+: $Fate $Fate $Discard {Second Chance}",
"Ambrosia 2+: {Spotlight}",
"Ambrosia 4+: One @RedArmorDie becomes @BlackArmorDie",
"Bravery: $Fate {Tilt}",
"",
"Aether 2+: {Deny}",
"",
"Danger 7+: {Commit} (@Midas @Midas)",
"Midas 2+/Ambrosia 2+: $Energy $Fate $Exhaust Perform {Unholy Alchemy} or {Reverse Unholy Alchemy}",
"Danger 4+: <Full Evade> If you evaded a Sun or Laser Attack, place 3 Fire tokens in the Kratos Pool",
"Danger 5+: Gain +1 @Power when on a VP",
"",
"",
"",
"Danger 7+: $Fate {Succor}",
"Danger 5+: $Exhaust <Wound> {AI Suppress}",
"Rage 6+: Immediately discard another @Gear",
"",
"",
"Rage 3+: Immediately gain 2 Ambrosia tokens",
"Danger 7+: $Fate {Heartseeker}",
"",
"Danger 7+: <Crit Evade> Gain +1 @Rage",
"",
"Danger 8+: $Fate {Reinforce 1}",
"Danger 6+: {Diversion}",
"Rage 3+: $Discard Place a [Column|AI0361] Terrain tile on an adjacent space. You may use this ability as @Reaction",
"",
"",
"Danger 9+: $Fate $Exhaust {Dodge}",
"Rage 2+: <Crit Miss> @Adversary; Aether 3+: *Gain +3 Precision",
"Danger 4+: {Harpooned}",
"Danger 3+: Loses {Cumbersome}",
"",
"",
"Danger 3+: {Overbreak 2}",
"",
"Fate 9+: $Exhaust {Superior Chance}",
"",
"",
"",
"Fate 3+: +1 @Power",
""
]
const KEYWORDS = {
  "Ignore Wound Responses" : {
    "timing": "Passive"
  },
  "Treat all Primordial Attacks performed against you as Doomed" : {
    "timing": "Passive"
  },
  "Ignore the Ambrosia gain from Ambrosia Terrain tiles" : {
    "timing": "Passive"
  },
  
  "Abysswalk": {
    "timing": "When the Primordial moves away from you because of a Response"
  },
  "Acrobatics": {
    "timing": "When you would receive Knockdown while adjacent to the Primordial"
  },
  "Airburst X": {
    "timing": "Free",
    "xvalue": true
  },
  "Ambrosia Limit X/+X": {
    "timing": "Passive",
    "xvalue": true
  },
  "Armor-Piercing": {
    "timing": "Power Roll"
  },
  "Armor Reroll X": {
    "timing": "Armor Roll",
    "xvalue": true
  },
  "Ascended": {
    "timing": "Passive"
  },
  "Assist X": {
    "timing": "Another Titan’s Power Roll",
    "xvalue": true
  },
  "Attack Reroll X": {
    "timing": "Attack Roll",
    "xvalue": true
  },
  "Auto-inspire": {
    "timing": "Passive"
  },
  "Awakening Lock": {
    "timing": "Passive"
  },
  "Black X": {
    "timing": "SAW",
    "effect": "place X Black tokens in the Kratos Pool"
  },
  "Bleeding X": {
    "timing": "Free",
    "xvalue": true
  },
  "Bleeding Limit X/+X": {
    "timing": "Passive",
    "xvalue": true
  },
  "Block X": {
    "timing": "After counting hits from an Evasion Roll",
    "xvalue": true
  },
  "Break X": {
    "timing": "SAW",
    "xvalue": true
  },
  "Burden X": {
    "timing": "FAW/SAW",
    "xvalue": true
  },
  "Burn": {
    "timing": "Free"
  },
  "Bypass": {
    "timing": "Passive"
  },
  "Primordial Bypass": {
    "timing": "Passive"
  },
  "Carving X": {
    "timing": "Wound",
    "xvalue": true
  },
  "Closing X": {
    "timing": "SAW",
    "xvalue": true
  },
  "Clutch": {
    "timing": "Power Roll"
  },
  "Combo-Breaker: X spaces": {
    "timing": "When you would break a Combo"
  },
  "Self Combo-Breaker: X spaces": {
    "timing": "When you would break a Combo"
  },
  "Commit (X)": {
    "timing": "Attack Declaration",
    "modifiers": true
  },
  "Consume": {
    "timing": "Free"
  },
  "Crash": {
    "timing": "Free"
  },
  "Cryptex Loathing": {
    "timing": "Passive"
  },
  "Cumbersome": {
    "timing": "SAW"
  },
  "Cursed": {
    "timing": "Passive"
  },
  "Dare": {
    "timing": "When you are about to draw an Obol"
  },
  "Daze": {
    "timing": "FAW/SAW"
  },
  "Deadly": {
    "timing": "Attack Roll"
  },
  "Death X": {
    "timing": "Free",
    "xvalue": true
  },
  "Defy X": {
    "timing": "After counting hits from a Skill test caused by a Judgement",
    "xvalue": true
  },
  "Deny": {
    "timing": "When the Primordial is about to Vanish, Lightbend, or Flicker while within your Weapon’s effective range"
  },
  "Displace": {
    "timing": "Free"
  },
  "Diversion": {
    "timing": "SAW"
  },
  "Dodge": {
    "timing": "Evasion Roll"
  },
  "Doomed": {
    "timing": "Passive"
  },
  "Double Commit": {
    "timing": "Attack Declaration"
  },
  "Elation X": {
    "timing": "SAW",
    "xvalue": true
  },
  "Escalate X": {
    "timing": "Free",
    "xvalue": true
  },
  "Evasion Spiral X": {
    "timing": "Evasion Roll",
    "xvalue": true
  },
  "Evolving": {
    "timing": "Free"
  },
  "Fate Armor": {
    "timing": "Passive"
  },
  "Fearless": {
    "timing": "Passive"
  },
  "Fire X": {
    "timing": "SAW"
  },
  "Float": {
    "timing": "Free"
  },
  "Frontlines": {
    "timing": "End of Battle"
  },
  "Glaciate": {
    "timing": "Free"
  },
  "Giant Glaciate": {
    "timing": "Free"
  },
  "Greater Pass X": {
    "timing": "Clear the Kratos Pool step",
    "xvalue": true
  },
  "Hardened": {
    "timing": "Free"
  },
  "Harpooned": {
    "timing": "Titan Attack"
  },
  "Heal": {
    "timing": "Free"
  },
  "Heartseeker": {
    "timing": "Draw BP card step"
  },
  "Hermes Move X": {
    "timing": "Free",
    "xvalue": true
  },
  "Hermes Reflex": {
    "timing": "Free"
  },
  "Advanced Hermes Reflex": {
    "timing": "Free"
  },
  "Hermes Reposition X": {
    "timing": "SAW",
    "xvalue": true
  },
  "Hide": {
    "timing": "End of your turn"
  },
  "Hope X": {
    "timing": "SAW",
    "xvalue": true
  },
  "Incinerated": {
    "timing": "Free"
  },
  "Inkblot": {
    "timing": "Free"
  },
  "Inspire X": {
    "timing": "FAW",
    "xvalue": true
  },
  "Jump": {
    "timing": "At the start of movement"
  },
  "Advanced Jump": {
    "timing": "At the start of movement"
  },
  "Knockback X": {
    "timing": "FAW/SAW",
    "xvalue": true
  },
  "Knockdown": {
    "timing": "Free"
  },
  "Laser Resistance X": {
    "timing": "Passive"
  },
  "Lifeline": {
    "timing": "When you are about to die from a Chasm space"
  },
  "Light X": {
    "timing": "Passive"
  },
  "Lightbend": {
    "timing": "Free"
  },
  "Liquid Edge": {
    "timing": "Attack Declaration"
  },
  "Lumbering": {
    "timing": "Free"
  },
  "Masterwork": {
    "timing": "Attack Roll"
  },
  "Midas X": {
    "timing": "Free"
  },
  "Midas Immune": {
    "timing": "Passive"
  },
  "Motivate X": {
    "timing": "SAW"
  },
  "Opening X": {
    "timing": "SAW"
  },
  "Overbreak X": {
    "timing": "SAW"
  },
  "Pain X": {
    "timing": "Free"
  },
  "Pass X": {
    "timing": "Clear the Kratos Pool step"
  },
  "Perishable": {
    "timing": "End of Titan Attack Sequence"
  },
  "Pole Position": {
    "timing": "FAW/SAW"
  },
  "Power Reroll X": {
    "timing": "Power Roll"
  },
  "Precise": {
    "timing": "Draw a BP card step"
  },
  "Provoke": {
    "timing": "FAW"
  },
  "Pull X": {
    "timing": "FAW/SAW"
  },
  "Pursuit X": {
    "timing": "When resolving an AI card"
  },
  "Pushback X": {
    "timing": "FAW/SAW"
  },
  "Quantum": {
    "timing": "Passive"
  },
  "Ranged Y–X": {
    "timing": "Attack Declaration"
  },
  "Reach X": {
    "timing": "Attack Declaration"
  },
  "Reduction X": {
    "timing": "Passive"
  },
  "Wish Away Reduction X": {
    "timing": "Passive"
  },
  "Pushback Reduction X": {
    "timing": "Passive"
  },
  "Knockback Reduction X": {
    "timing": "Passive"
  },
  "Kickback Reduction X": {
    "timing": "Passive"
  },
  "Pull Reduction X": {
    "timing": "Passive"
  },
  "Reflex": {
    "timing": "Free"
  },
  "Advanced Reflex": {
    "timing": "Free"
  },
  "Superior Reflex": {
    "timing": "Free"
  },
  "Reinforce X": {
    "timing": "Armor Roll"
  },
  "Advanced Reinforce X": {
    "timing": "Armor Roll"
  },
  "Superior Reinforce X": {
    "timing": "Armor Roll"
  },
  "Mortal Reinforce X": {
    "timing": "Armor Roll"
  },
  "Remote Scan": {
    "timing": "When you perform a Scan"
  },
  "Reposition X": {
    "timing": "SAW"
  },
  "Rescan": {
    "timing": "When you perform a Scan"
  },
  "Restricted (Trait)": {
    "timing": "Loadout"
  },
  "Retreat X": {
    "timing": "Free"
  },
  "Rewind": {
    "timing": "Free"
  },
  "Rocksteady": {
    "timing": "Passive"
  },
  "Roll Out": {
    "timing": "When you are about to suffer Knockdown while adjacent to the Primordial"
  },
  "Rouse X": {
    "timing": "SAW"
  },
  "Rush": {
    "timing": "Free"
  },
  "Improved Rush": {
    "timing": "Free"
  },
  "Sacrifice": {
    "timing": "FAW"
  },
  "Scale": {
    "timing": "When you are about to perform a test to climb a Vantage Point or Elevated Terrain"
  },
  "Scale X": {
    "timing": "When you are about to perform a test to climb a Vantage Point or Elevated Terrain/FAW/SAW"
  },
  "Second Chance": {
    "timing": "After you draw a Trauma or Obol card"
  },
  "Shaded": {
    "timing": "Free"
  },
  "Skitter": {
    "timing": "Free"
  },
  "Solace": {
    "timing": "Free"
  },
  "Spiral X": {
    "timing": "Attack Roll"
  },
  "Spotlight": {
    "timing": "FAW"
  },
  "Stalwart": {
    "timing": "Passive"
  },
  "Startup X": {
    "timing": "When you are about to Attack"
  },
  "Strikeback X": {
    "timing": "When you fully evade a Primordial Attack"
  },
  "Stuck": {
    "timing": "Attack Declaration"
  },
  "Succor": {
    "timing": "During another Titan’s Power Roll"
  },
  "Super Smart Delivery": {
    "timing": "Free/Reaction"
  },
  "Superior Chance": {
    "timing": "After you draw a Trauma or Obol card"
  },
  "Suppress": {
    "timing": "Wound"
  },
  "BP Suppress": {
    "timing": "Wound"
  },
  "AI Suppress": {
    "timing": "Wound"
  },
  "Taint X": {
    "timing": "FAW"
  },
  "Temporal Reflex": {
    "timing": "When you are about to suffer Crash"
  },
  "Tilt": {
    "timing": "Draw a BP card step"
  },
  "Time-Clocked": {
    "timing": "Free"
  },
  "Tireless": {
    "timing": "Passive"
  },
  "Titan Possession": {
    "timing": "Loadout"
  },
  "Argonaut Possession": {
    "timing": "Loadout"
  },
  "Transform": {
    "timing": "Free"
  },
  "Trick": {
    "timing": "Free"
  },
  "Trauma Trick": {
    "timing": "When resolve a Trauma card"
  },
  "Wound Trick": {
    "timing": "Wound"
  },
  "Fail Trick": {
    "timing": "Fail"
  },
  "Truth X": {
    "timing": "SAW"
  },
  "Tumble": {
    "timing": "When you are about to suffer Crash"
  },
  "Unburden X": {
    "timing": "FAW/SAW"
  },
  "Unholy Alchemy": {
    "timing": "Free"
  },
  "Reverse Unholy Alchemy": {
    "timing": "Free"
  },
  "Unwieldy": {
    "timing": "Attack Declaration"
  },
  "Ur-Knockback X": {
    "timing": "Free"
  },
  "Ur-Pull X": {
    "timing": "Free"
  },
  "Vault": {
    "timing": "FAW/SAW"
  },
  "Forced Vault": {
    "timing": "Free"
  },
  "Terrain Vault": {
    "timing": "FAW/SAW"
  },
  "Voluntary Knockdown": {
    "timing": "Free"
  },
  "Wish Armor": {
    "timing": "When you resolve a Wish Attack"
  },
  "Wish Away X": {
    "timing": "Free"
  },
  "Wishcursed": {
    "timing": "When you trigger Wish Armor"
  },
  "Wish Dodge": {
    "timing": "When you are about to resolve an Evasion Roll"
  },
  "Advanced Wish Dodge": {
    "timing": "When you are about to resolve an Evasion Roll"
  },
  "Wishrod": {
    "timing": "During Targeting, if the Attack is a Wish Attack"
  }
}

// Sentences that are actually structural text rather than abilities.
const STRUCTURAL = new Set([
  "Unique", "Titan Attachment", "Attach to a Weapon or Armor with the _Shell_ Trait", "Attach to a Weapon or Armor with the _Labyrinth_ Trait",
  "Attach to a Weapon @Gear card", "Attach to a Ranged Weapon", "Attach to a Weapon or @Armor with the _Abyss_ Trait",
  "Attach to a Weapon or @Armor with the _Sun_ Trait", "Evolved", "Evolving", "Attach to a @Gear with the _Spear_ Trait"
]);

// Exact exceptions can be added here when the sentence heuristic
// inevitably encounters unusual prose.
const ABILITY_EXCEPTIONS = new Map([
  // [
  //   "Roll a d10. On a 6+, ignore it",
  //   "Roll a d10. On a 6+, ignore it"
  // ],
]);


function splitAbilities(text) {
  text = text.trim();

  if (!text) return [];

  // First protect explicit known exceptions.
  for (const [original, replacement] of ABILITY_EXCEPTIONS) {
    text = text.replaceAll(original, replacement.replaceAll(".", "§"));
  }

  const pieces = text.split(/\. |\; /);

  return pieces
    .map(x => x.replaceAll("§", ".").trim())
    .filter(Boolean);
}


function parseValue(effect) {
  const range = effect.match(/\b(\d+)-(\d+)\b/);

  if (range) {
    return {
      effect: effect.replace(range[0], "Y-X"),
      xvalue: Number(range[2]),
      yvalue: Number(range[1]),
    };
  }

  const x = effect.match(/\b(\d+)\b/);

  if (x) {
    return {
      effect: effect.replace(x[0], "X"),
      xvalue: Number(x[1]),
    };
  }

  return { effect };
}


function parseKeyword(content) {
  /* like Commit (Fate) or Superior Stanch (Ambrosia) */
  const modifierMatch = content.match(/^(.+?)\s*\(([^()]*)\)\s*$/);

  let keywordName = content.trim();
  let modifiers;

  if (modifierMatch) {
    keywordName = modifierMatch[1].trim();
    modifiers = modifierMatch[2].trim();
  }

  /* Find the longest matching keyword name.
   * This matters for things like: Knockback Reduction 3, Power Re-roll 1, Auto-break 2 */
  const definitionName = Object.keys(KEYWORDS)
    .sort((a, b) => b.length - a.length)
    .find(name => {
      return keywordName === name || 
      (keywordName.split(" ").length > 1 && name.split(" ").length > 1 && 
        (name.split(" ").slice(0, -1).join(" ") === keywordName.split(" ").slice(0, -1).join(" ") || 
        name.split(" ").slice(0, -1).join(" ").toLowerCase() === keywordName.replace("Auto-", "").split(" ").slice(0, -1).join(" ").toLowerCase()))
    });

  if (!definitionName) {
    return {
      keyword: true,
      effect: keywordName,
      ...(modifiers ? { modifiers } : {}),
    };
  }

  const definition = KEYWORDS[definitionName];

  let result = {
    keyword: true,
    effect: keywordName,
  };

  const parsed = parseValue(keywordName);

  if (parsed.xvalue) {
    result.effect = parsed.effect;

    if (parsed.xvalue !== undefined)
      result.xvalue = parsed.xvalue;

    if (parsed.yvalue !== undefined)
      result.yvalue = parsed.yvalue;
  }

  if (modifiers)
    result.modifiers = modifiers;

  if (definition.timing)
    result.timing = definition.timing;

  if (keywordName.startsWith("Auto-") && !keywordName.startsWith("Auto-inspire")) {
    result.timing = "FAW"
  }

  return result;
}


function parseAbility(text, inheritedGate = null) {
  let remaining = text.trim();

  const result = {};

  if (inheritedGate)
    result.gate = inheritedGate;

  /*
   * Pull out timing.
   *
   * <Crit Evade> ...
   * <Full Hit> ...
   */


  if (inheritedGate && remaining.endsWith("instead")) {
    remaining = remaining.replace("instead", "").trim()
    result.replacement = true
  }

  const timingMatch = remaining.match(/<([^>]+)>\s*/);

  if (timingMatch) {
    result.timing = timingMatch[1];
    remaining = remaining.replace(timingMatch[0], "");
  }

  /*
   * Pull out costs.
   *
   * $Fate $Exhaust {Block 1}
   *
   * becomes:
   *
   * cost=Fate Exhaust
   */
  const costs = [];

  remaining = remaining.replace(
    /(?<!\w)\$([A-Za-z][A-Za-z0-9_-]*)/g,
    (_, cost) => {
      costs.push(cost);
      return "";
    }
  ).trim();

  if (costs.length)
    result.cost = costs.join(" ");
  
  /*
   * A keyword enclosed in {} is the actual effect.
   */
  const keywordMatch = remaining.match(/^\{([^{}]+)\}$/);

  if (keywordMatch) {
    const keyword = parseKeyword(keywordMatch[1]);

    if (!result.timing && keyword.timing)
      result.timing = keyword.timing;

    delete keyword.timing;

    return {
      ...result,
      ...keyword,
    };
  }

  if (remaining === "Ascended") {
    const keyword = parseKeyword("Ascended");

    if (!result.timing && keyword.timing)
      result.timing = keyword.timing;

    delete keyword.timing;

    return {
      ...result,
      ...keyword,
    };
  }

  result.effect = remaining;

  if (result.effect.startsWith("+") || result.effect.startsWith("-")) {
    result.timing = "Passive"
  }

  if (result.effect.startsWith("When ")) {
    const parts = result.effect.split(", ")
    result.timing = parts[0].trim()
    result.effect = parts.slice(1).join(", ")
  }

  if (!result.timing) {
    result.timing = "Free"
  }

  return result;
}


function parseCell(text, isGate) {
  if (!text || !text.trim())
    return [];

  const abilities = splitAbilities(text);

  let gate = null;

  return abilities
    .map(ability => {
      /*
       * Gate applies to everything following it.
       *
       * Danger 5+: {Opening 1}. {Break 1}
       */
      const gateGroup = ability.split(":")

      if (isGate && gateGroup.length > 1) {
        if (gateGroup[0].trim().split(" ").length > 1) {
          gate = gateGroup[0].trim();
        } else {
          gate = "Condition " + gateGroup[0].trim()
        }
        ability = gateGroup[1].trim();
      }

      if (!ability)
        return null;

      // Structural tags don't become abilities.
      if (STRUCTURAL.has(ability.replace(/\.$/, "").trim()))
        return null;

      return parseAbility(ability, gate);
    })
    .filter(Boolean);
}


function serializeAbility(ability) {
  const order = [
    "gate",
    "timing",
    "cost",
    "keyword",
    "effect",
    "xvalue",
    "yvalue",
    "modifiers",
    "replacement",
  ];

  return order
    .filter(key => ability[key] !== undefined)
    .map(key => {
      if (ability[key] === true)
        return key;

      return `${key}=${ability[key]}`;
    })
    .join("\n");
}


function convertCell(text, isGate) {
  return parseCell(text, isGate).map(serializeAbility);
}


function convertRows(rows) {
  /*
   * rows = [
   *   [columnA, columnB],
   *   [columnA, columnB],
   *   ...
   * ]
   */

  const parsedRows = rows.map(row => {
    return [convertCell(row[0], false), convertCell(row[1], true)].flat()
  });

  // console.log(parsedRows)

  const maxAbilities = Math.max(
    0,
    ...parsedRows.map(row => row.length)
  );

  return parsedRows.map(row => {
    const result = Array(15).fill("");
    row.forEach((ability, index) => {
      result[index] = ability;
    });
    return result;
  });
}


const ROWS = RAWROWS1.map((row, index) => [row, RAWROWS2[index]])
console.log(ROWS[394], RAWROWS1[394], RAWROWS2[394])
console.log(ROWS[395], RAWROWS1[395], RAWROWS2[395])
console.log(ROWS[396], RAWROWS1[396], RAWROWS2[396])

const parsedRows = convertRows(ROWS)

const formattedRows = parsedRows.reduce((out, row) => 
  out + row.reduce((out2, ability) =>  out2 + "\"" + ability + "\"\t", "") + "\n"
  , ""
)


const fs = require("fs");

const outputFile = "output.txt";

fs.writeFileSync(outputFile, formattedRows, "utf8");

console.log(`Output written to ${outputFile}`);