import reverseString from "../reverseString";

test("Should return an empty string when given an empty string", () => {
  expect(reverseString("")).toBe("");
});
test("Should return the same character when given one character", () => {
  expect(reverseString("x")).toBe("x");
});
test("Should return a reversed word when given a word", () => {
  expect(reverseString("ab")).toBe("ba");
});
test("Should return a reversed word when there is space at the beginning of a word", () => {
  expect(reverseString(" ab")).toBe("ba");
});
test("Should return a reversed sentence with reversed words when given a sentence", () => {
  expect(reverseString("The cow is good")).toBe("doog si woc ehT");
});
test("Should return a reversed sentence with reversed words when given a sentence with space in the beginning", () => {
  expect(reverseString(" The cow is good")).toBe("doog si woc ehT");
});
