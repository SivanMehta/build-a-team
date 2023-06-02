import minimist from 'minimist';
import { normalize } from './utils.js';
import {
  populateTeam,
  populateSetups,
  formatTeam
} from './steps/index.js'

async function main(argv) {
  const args = await normalize(argv);
  console.log(args)
  
  const team = await populateTeam(args);
  await populateSetups(team);
  const output = formatTeam(team);

  console.log(output);
}

try {
  const argv = minimist(process.argv.slice(2));
  main(argv);
} catch (error) {
  console.log(error.message);
}