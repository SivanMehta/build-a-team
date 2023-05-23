const stages = [
  'name',
  'usage',
  'ability',
  'item',
  'spread',
  'moves',
  'teammates',
  'checks'
];

const delimiter = " +----------------------------------------+";
// from the raw text, pull out the sections for each pokemon
export default function delimitSections(text) { 
  const movesets = {};
  const sections = text
    .split(delimiter)
    // remove whitespace-only lines
    .filter(s => s !== ' \r\n')
    .filter(s => s !== ' \n')
    .filter(Boolean)
  let current = {};
  for(let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const stage = stages[i % stages.length];
    current[stage] = section;
    // after the last stage, we have a full moveset, so we move onto the next one
    if(stage === 'checks') {
      const name = current.name.split("|")[1].trim();
      movesets[name] = current;
      current = {};
    }
  }

  return movesets;
}