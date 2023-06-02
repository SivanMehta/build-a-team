/**
 * Given a string with a number after it, return the string
 * eg: 'Gyarados 1.23%' -> 'Gyarados'
 * @param {String} string extractable text from string
 */
export function extractText(string) {
  const content = string.split('|')[1];
  const percentageStart = content.match(/ \d/).index;
  return content.slice(0, percentageStart).trim();
}

// This, in theory, only needs to change every 3-4 years with the release of a new generation of games
const CURRENT_GEN = 'gen9';

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

/**
 * Given an object of arguments, return an object of normalized arguments with reasonable defaults
 */
export function normalize(argv) {
  const {
    meta = `${CURRENT_GEN}ou`,
    rank = '0',
    date = getMostRecentDate(),
  } = argv;

  return {
    meta,
    rank,
    date
  }
}