import { extractText } from "../src/utils";

const ability = ' | Protosynthesis 100.000%                | \n';

describe('extractText', () => {
  test('extracts text from a string', () => {
    expect(extractText(ability)).toBe('Protosynthesis');
  });
});