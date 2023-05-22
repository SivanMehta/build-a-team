function generateSetups(lines) { 
  return new Proxy({}, {
    get: (target, prop) => {
      return prop;
    }
  })
}

export default async function populateSetups(team) {
  const { date, meta, rank, names } = team;
  const url = `https://www.smogon.com/stats/${date}/moveset/${meta}-${rank}.txt`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not find movesets for given metagame`);
  }

  const text = await res.text();
  const lines = text.split('\n');
  const movesets = generateSetups(lines);

  team.pokemon = names.map(pokemon => movesets[pokemon]);

  return team
}