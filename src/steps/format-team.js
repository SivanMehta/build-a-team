/**
 * Formats team into given format

Zangoose @ Toxic Orb  
Ability: Toxic Boost  
Tera Type: Normal  
EVs: 252 Atk / 4 SpA / 252 Spe  
Hasty Nature  
- Facade  
- Close Combat  
- Ice Punch  
- Thunder Punch

 * @param {Team} team to format
 * @returns {String} formatted team
 */
export default function formatTeam(team) {
  let output = '';
  team.pokemon.forEach(pokemon => {
    output += `${pokemon.name} @ ${pokemon.item}\n`;
    output += `Ability: ${pokemon.ability}\n`;
    output += `EVs: ${pokemon.spread}\n`;
    output += `${pokemon.nature} Nature\n`;
    pokemon.moves.forEach(move => {
      output += `- ${move}\n`;
    })
    output += `\n`;
  });

  return output;
}