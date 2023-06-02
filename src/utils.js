/**
 * given a string with a number after it, return the string
 * @param {String} string extractable text from string
 */
export function extractText(string) {
  const content = string.split('|')[1];
  const percentageStart = content.match(/ \d/).index;
  return content.slice(0, percentageStart).trim();
}