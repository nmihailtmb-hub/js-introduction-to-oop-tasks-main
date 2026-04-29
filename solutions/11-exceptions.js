export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export const parseJson = (jsonStroka) => {
  try {
    return JSON.parse(jsonStroka);
  } catch (oshibka) {
    throw new ParseError('Invalid JSON string');
  }
};
// END