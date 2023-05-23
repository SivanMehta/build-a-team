import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
const write = promisify(fs.writeFile);
const read = promisify(fs.readFile);

export default async function populateTeam({ date, meta, rank }) {
  // TODO: normalize past gens
  const filename = path.join('.cache', `${date}-${meta}-${rank}.json`);
  
  try {
    const cached = await read(filename, 'utf-8');
    console.debug(`Reading ${filename} from cache`)
    return JSON.parse(cached);
  } catch(error) {
    console.debug(`Generating ${filename}`)
  }
  
  const metagame = `${date}/${meta}-${rank}`;
  const url = `https://www.smogon.com/stats/${metagame}.txt`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not find stats for given metagame`);
  }

  const text = await res.text();
  
  const lines = text.split('\n');
  const names = lines.slice(5, 11).map(line => {
    const cols = line.split('|').map(str => str.trim());
    return cols[2];
  });

  const data = {
    date, meta, rank,
    names
  };

  await write(filename, JSON.stringify(data, null, 2), 'utf-8');
  return data;
}