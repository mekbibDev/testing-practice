import caesarCipher from "../caesarCipher";

it("throws an error if text argument is not given", () => {
  expect(() => caesarCipher()).toThrow("Function expects a text to cipher");
});
it("returns the text un ciphered if shift factor is not given", () => {
  expect(caesarCipher("water")).toBe("water");
});
it("returns the text un ciphered if shift factor is zero", () => {
  expect(caesarCipher("water", 0)).toBe("water");
});
it("returns a ciphered text when the shift factor is one", () => {
  expect(caesarCipher("water", 1)).toBe("xbufs");
});
it("returns a ciphered text when the shift factor is 25", () => {
  expect(caesarCipher("water", 25)).toBe("vzsdq");
});
it("throws an error if shift factor is less than 0", () => {
  expect(() => caesarCipher("water", -2)).toThrow("shift factor out of range");
});
it("throws an error if shift factor is greater than 25", () => {
  expect(() => caesarCipher("water", 26)).toThrow("shift factor out of range");
});
it("returns a ciphered text with same case when the text has different cases", () => {
  expect(caesarCipher("WaTer", 8)).toBe("EiBmz");
});
it("return a ciphered text with punctuation in order when given text with punctuation", () => {
  expect(caesarCipher("wa.te!", 5)).toBe("bf.yj!");
});
