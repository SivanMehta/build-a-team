import { extractText } from "../src/utils";

describe('extractText', () => {
  test('extracts text from a string', () => {
    const ability = ' | Protosynthesis 100.000%                | \n';

    expect(extractText(ability)).toBe('Protosynthesis');
  });
});