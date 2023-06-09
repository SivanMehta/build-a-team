Quick and dirty team generator for [pokemonshowdown.com][1].

## Usage

```sh
npm start --meta <metagame> --rank <rank> --date <date>
```

- `meta` - (*Optional*) The metagame to generate a team for
  - defaults to most recent generation + `ou` (eg: `gen9ou`)
- `rank` - (*Optional*) The rank to generate a team
  - defaults to `0`
- `date` - (*Optional*) The date to generate a team for
  - defaults to the most recent completed month

### Examples

Generating a team list for the most recent OU metagame:

```sh
$ npm start
Great Tusk @ Leftovers
Ability: Protosynthesis
EVs: 252 Atk / 4 SpD / 252 Spe
Jolly Nature
- Rapid Spin
- Knock Off
- Earthquake
- Close Combat

Kingambit @ Leftovers
Ability: Supreme Overlord
EVs: 252 HP / 252 Atk / 4 SpD
Adamant Nature
- Sucker Punch
- Kowtow Cleave
- Iron Head
- Swords Dance

Gholdengo @ Choice Scarf
Ability: Good as Gold
EVs: 252 SpA / 4 SpD / 252 Spe
Timid Nature
- Make It Rain
- Shadow Ball
- Recover
- Nasty Plot

Iron Valiant @ Booster Energy
Ability: Quark Drive
EVs: 252 SpA / 4 SpD / 252 Spe
Timid Nature
- Moonblast
- Thunderbolt
- Psyshock
- Close Combat

Dragapult @ Choice Specs
Ability: Infiltrator
EVs: 252 SpA / 4 SpD / 252 Spe
Timid Nature
- U-turn
- Dragon Darts
- Draco Meteor
- Shadow Ball

Corviknight @ Rocky Helmet
Ability: Pressure
EVs: 248 HP / 252 Def / 8 SpD
Impish Nature
- Roost
- U-turn
- Defog
- Brave Bird
```

Generating a team list for a past generation's metagame:
  
```sh
$ npm start -- --meta ou --date 2017-01 --rank 1500
Landorus-Therian @ Choice Scarf
Ability: Intimidate
EVs: 252 Atk / 4 SpD / 252 Spe
Jolly Nature
- Earthquake
- U-turn
- Stone Edge
- Knock Off

Ferrothorn @ Leftovers
Ability: Iron Barbs
EVs: 252 HP / 88 Def / 168 SpD
Relaxed Nature
- Leech Seed
- Gyro Ball
- Stealth Rock
- Protect

Garchomp @ Rocky Helmet
Ability: Rough Skin
EVs: 252 Atk / 4 SpD / 252 Spe
Jolly Nature
- Earthquake
- Stealth Rock
- Dragon Claw
- Swords Dance

Gengar @ Life Orb
Ability: Levitate
EVs: 252 SpA / 4 SpD / 252 Spe
Timid Nature
- Shadow Ball
- Sludge Wave
- Sludge Bomb
- Focus Blast

Rotom-Wash @ Leftovers
Ability: Levitate
EVs: 248 HP / 252 Def / 8 Spe
Bold Nature
- Hydro Pump
- Volt Switch
- Will-O-Wisp
- Pain Split

Clefable @ Leftovers
Ability: Magic Guard
EVs: 252 HP / 172 Def / 84 SpD
Calm Nature
- Moonblast
- Soft-Boiled
- Calm Mind
- Thunder Wave
```

Attempting to generate a team list for a metagame that doesn't exist:

```sh
$ npm start -- --meta gen27ou --date 2027-01 --rank 2500

Could not find stats for 2027-01/gen27ou-2500
```

## About

Uses [Smogon's published stats](2) to generate a team based on the most used Pokemon in a given metagame. The stats are published monthly, so the most recent completed month is used by default. The stats are also published by rank, so the rank can be specified as well. 

Right now the current algorithm is most common 6 pokemon in the meta + their 4 most common moves. This is a pretty naive approach, future implementations will take advantage of the `lead` dataset, and will also take into account the most common teammates for each pokemon.

### Tests

```sh
npm test
```

[1]: https://play.pokemonshowdown.com/
[2]: https://www.smogon.com/stats/
[3]: https://www.smogon.com/stats/2021-01/