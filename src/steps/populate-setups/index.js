import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
const write = promisify(fs.writeFile);
const read = promisify(fs.readFile);

import delimit from './delimit.js';
import cleanup from './cleanup.js';

export default async function populate(team) {
  const { date, meta, rank, names } = team;
  const url = `https://www.smogon.com/stats/${date}/moveset/${meta}-${rank}.txt`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not find movesets for given metagame`);
  }

  // we have a top-6 fixture of this in test/fixtures/gen9ou-0.txt
  const text = await res.text();
  const sections = delimit(text, names);
  team.pokemon = names.map(pokemon => sections[pokemon]);
  team.pokemon.forEach(pokemon => cleanup(pokemon))

  return team;
}