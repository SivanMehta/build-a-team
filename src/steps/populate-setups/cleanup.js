import { extractText } from "../../utils.js";

// given that the sections are delimited, we can now clean them up
export default function cleanup(pokemon) {
  pokemon.name = pokemon.name.split("|")[1].trim();
  pokemon.ability = extractText(pokemon.ability.split("\n")[2].trim());
}