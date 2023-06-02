Quick and dirty team generator for [pokemonshowdown.com][1].

## Usage

```sh
npm start --meta <metagame> --rank <rank> --date <date>
```

- `meta` - The metagame to generate a team for *Optional*
  - defaults to most recent generation + `ou`
- `rank` - The rank to generate a team *Optional*
  - defaults to `0`
- `date` - The date to generate a team for *Optional*
  - (defaults to the most recent completed month)

### Examples

Generating a team list for the most recent OU metagame:

```sh
$ npm start
Great Tusk @ Leftovers
Ability: Protosynthesis
EVs: 0/252/0/0/4/252
Jolly Nature
- Rapid Spin
- Knock Off
- Earthquake
- Close Combat

Kingambit @ Leftovers
Ability: Supreme Overlord
EVs: 252/252/0/0/4/0
Adamant Nature
- Sucker Punch
- Kowtow Cleave
- Iron Head
- Swords Dance

Gholdengo @ Choice Scarf
Ability: Good as Gold
EVs: 0/0/0/252/4/252
Timid Nature
- Make It Rain
- Shadow Ball
- Recover
- Nasty Plot

Iron Valiant @ Booster Energy
Ability: Quark Drive
EVs: 0/0/0/252/4/252
Timid Nature
- Moonblast
- Thunderbolt
- Psyshock
- Close Combat

Dragapult @ Choice Specs
Ability: Infiltrator
EVs: 0/0/0/252/4/252
Timid Nature
- U-turn
- Dragon Darts
- Draco Meteor
- Shadow Ball

Corviknight @ Rocky Helmet
Ability: Pressure
EVs: 248/0/252/0/8/0
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
EVs: 0/252/0/0/4/252
Jolly Nature
- Earthquake
- U-turn
- Stone Edge
- Knock Off

Ferrothorn @ Leftovers
Ability: Iron Barbs
EVs: 252/0/88/0/168/0
Relaxed Nature
- Leech Seed
- Gyro Ball
- Stealth Rock
- Protect

Garchomp @ Rocky Helmet
Ability: Rough Skin
EVs: 0/252/0/0/4/252
Jolly Nature
- Earthquake
- Stealth Rock
- Dragon Claw
- Swords Dance

Gengar @ Life Orb
Ability: Levitate
EVs: 0/0/0/252/4/252
Timid Nature
- Shadow Ball
- Sludge Wave
- Sludge Bomb
- Focus Blast

Rotom-Wash @ Leftovers
Ability: Levitate
EVs: 248/0/252/0/0/8
Bold Nature
- Hydro Pump
- Volt Switch
- Will-O-Wisp
- Pain Split

Clefable @ Leftovers
Ability: Magic Guard
EVs: 252/0/172/0/84/0
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

Right now the current algorithm is most common 6 pokemon in the meta + their most common moveset. This is a pretty naive approach, future implementations will take advantage of the `lead` dataset, and will also take into account the most common teammates for each pokemon.

### Tests

```sh
npm test
```

[1]: https://play.pokemonshowdown.com/
[2]: https://www.smogon.com/stats/
[3]: https://www.smogon.com/stats/2021-01/