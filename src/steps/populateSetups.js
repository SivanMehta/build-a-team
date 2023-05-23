const steps = [
  'name',
  'usage',
  'ability',
  'item',
  'spread',
  'moves',
  'teammates',
  'checks'
]

function generateSetups(text) { 
  const sets = {};
  const lines = text.split('\n');

  let current = {};
  const step = 0;
  for(const line in lines) {
    const stage = steps[step];
    if(stage === 'name') {
      
    }
  }

}

export default async function populateSetups(team) {
  const { date, meta, rank, names } = team;
  const url = `https://www.smogon.com/stats/${date}/moveset/${meta}-${rank}.txt`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not find movesets for given metagame`);
  }

  const text = await res.text();
  const movesets = generateSetups(text, names);

  team.pokemon = names.map(pokemon => movesets[pokemon]);

  return team
}