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
# TODO: output
```

Generating a team list for a past generation's metagame:
  
```sh
$ npm start -- --meta gen7ou --date 2017-01 --rank 1500
# TODO: output
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