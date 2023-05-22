const CURRENT_GEN = 'gen9'; // this in theory only needs to change every 3-4 years

/**
 * Return last's months date in the form YYYY-MM
 */
function getMostRecentDate() {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');

  return `${year}-${month}`;
}

async function validateMeta(meta, rank, date) {
  const metagame = `${date}/${meta}-${rank}`; // TODO: normalize past gens
  const url = `https://www.smogon.com/stats/${metagame}.txt`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not find stats for given metagame`);
  }
}

export default async function normalize(argv) {
  const {
    meta = `${CURRENT_GEN}ou`,
    rank = '0',
    date = getMostRecentDate(),
  } = argv;

  const error = await validateMeta(meta, rank, date);

  return {
    meta,
    rank,
    date,
    error
  }
}