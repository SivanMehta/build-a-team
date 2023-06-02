import { extractText } from "../../utils.js";

function extractItem(section, nth = 0) {
  return section.split("\n")[nth + 2].trim();
}

// given that the sections are delimited, we can now clean them up
export default function cleanup(pokemon) {
  pokemon.name = pokemon.name.split("|")[1].trim();
  pokemon.ability = extractText(extractItem(pokemon.ability));
  pokemon.item = extractText(extractItem(pokemon.item));
  pokemon.spread = extractText(extractItem(pokemon.spread));

  const moves = [];
  for (let i = 0; i < 4; i++) {
    moves.push(extractText(extractItem(pokemon.moves, i)));
  }
  pokemon.moves = moves;
}