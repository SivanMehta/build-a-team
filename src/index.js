import minimist from 'minimist';
import normalize from './normalize-args.js';

function addLead() {}
function addTeam(){}
function formatTeam(){}

async function main(argv) {
  const args = await normalize(argv);
  
  let team = {};
  await addLead(team, args);
  await addTeam(team, args);
  formatTeam(team);
}

try {
  const argv = minimist(process.argv.slice(2));
  main(argv);
} catch (error) {
  console.log(error.message);
}