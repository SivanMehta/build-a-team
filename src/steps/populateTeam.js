export default async function populateTam({ date, meta, rank }) {
  // TODO: normalize past gens
  const metagame = `${date}/${meta}-${rank}`;
  const url = `https://www.smogon.com/stats/${metagame}.txt`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not find stats for given metagame`);
  }

  const text = await res.text();
  
  const lines = text.split('\n');
  const team = lines.slice(5, 11);

  console.log(team.join('\n'))
}