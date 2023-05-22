import minimist from 'minimist';
import normalize from './normalize.js';
import {
  populateTeam,
  populateMovesets
} from './steps/index.js'

function formatTeam(){}

async function main(argv) {
  const args = await normalize(argv);
  
  const team = await populateTeam(args);
  await populateMovesets(team);
  const output = formatTeam(team);

  console.log(output);
}

try {
  const argv = minimist(process.argv.slice(2));
  main(argv);
} catch (error) {
  console.log(error.message);
}