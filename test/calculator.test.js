import calculator from "../calculator";

describe("add", () => {
  it("throws an error if one or no arguments are given", () => {
    expect(() => calculator.add()).toThrow("Function expects two arguments");
    expect(() => calculator.add(2)).toThrow("Function expects two arguments");
  });
  it("returns a sum when both arguments are given and both arguments are of type numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  it("returns the sum if one of the arguments is a number but it's type is a string ", () => {
    expect(calculator.add("2", 3)).toBe(5);
  });
  it("returns the sum when both the arguments are numbers but their type is a string", () => {
    expect(calculator.add("2", "3")).toBe(5);
  });
  it("returns the sum when given floating point numbers", () => {
    expect(calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
  });
});

describe("subtract", () => {
  it("throws an error if one or no arguments are given", () => {
    expect(() => calculator.subtract()).toThrow(
      "Function expects two arguments"
    );
    expect(() => calculator.subtract(1)).toThrow(
      "Function expects two arguments"
    );
  });
  it("returns the difference when given both arguments and both arguments are of type number", () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
  });
  it("returns the difference if one of the arguments is of type number but the other is a string", () => {
    expect(calculator.subtract("2", 5)).toBe(-3);
  });
  it("returns the difference when both arguments are numbers but of type string", () => {
    expect(calculator.subtract("2", "5")).toBe(-3);
  });
  it("return the difference when given floating-point numbers", () => {
    expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
  });
});

describe("divide", () => {
  it("throws an error when one or no arguments are given", () => {
    expect(() => calculator.divide()).toThrow("Function expects two arguments");
    expect(() => calculator.divide(3)).toThrow(
      "Function expects two arguments"
    );
  });
  it("returns a quotient when given both arguments and both arguments are of type numbers", () => {
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
  });
  it("returns a quotient when one of the arguments is a number but of type number", () => {
    expect(calculator.divide("1", 2)).toBeCloseTo(0.5);
  });
  it("returns a quotient when both of the arguments are numbers but of type string", () => {
    expect(calculator.divide("1", "2")).toBeCloseTo(0.5);
  });
  it("return a quotient when given floating point numbers", () => {
    expect(calculator.divide(0.6, 0.3)).toBeCloseTo(2);
  });
});
describe("multiply", () => {
  it("throws an error when zero or one arguments are given", () => {
    expect(() => calculator.multiply()).toThrow(
      "Function expects two arguments"
    );
    expect(() => calculator.multiply(2)).toThrow(
      "Function expects two arguments"
    );
  });
  it("returns a product when both arguments are given and their type is number", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  it("returns a product when one of the arguments is a number but of type string", () => {
    expect(calculator.multiply("2", 3)).toBe(6);
  });
  it("returns a product when both arguments are numbers but their type is a string", () => {
    expect(calculator.multiply("2", "3")).toBe(6);
  });
  it("returns a product when arguments are floating-point numbers", () => {
    expect(calculator.multiply(0.3, 0.9)).toBeCloseTo(0.27);
  });
});
