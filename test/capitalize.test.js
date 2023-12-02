import { capitalize } from "../capitalize";

test("Should return an empty string when given an empty string", () => {
  expect(capitalize("")).toBe("");
});
test("Should return a capitalized letter when given a letter", () => {
  expect(capitalize("a")).toBe("A");
});
test("Should return a capitalized word when given a word", () => {
  expect(capitalize("name")).toBe("Name");
});
test("Should return the first word capitalized when given multiple words", () => {
  expect(capitalize("the place")).toBe("The place");
});
test("Should return a capitalized word when there is space at the beginning", () => {
  expect(capitalize(" name")).toBe("Name");
});
