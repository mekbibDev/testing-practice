import analyzeArray from "../analyzeArray";

it("throws an error if no argument is given", () => {
  expect(() => analyzeArray()).toThrow("Function expects an argument");
});
it("throws an error if the array given is empty", () => {
  expect(() => analyzeArray([])).toThrow(
    "Function expects an array with at least one element"
  );
});
it("returns an object with average, min, max as the same number and the length as one when given an array with one number", () => {
  expect(analyzeArray([5])).toStrictEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

it("returns an object with the the analyzed value when given an array bigger than one", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("returns an object with the the analyzed value when given an array that contains numbers of type string", () => {
  expect(analyzeArray(["1", "8", 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("returns an object with analyzed values when given an array that contains negative numbers", () => {
  expect(analyzeArray([-5, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 3,
    min: -5,
    max: 8,
    length: 6,
  });
});

it("returns an object with with average rounded when an array contains a floating number", () => {
  expect(analyzeArray([1.5, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1.5,
    max: 8,
    length: 6,
  });
});
