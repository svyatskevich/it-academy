const Calculator = require("../testData.js");

describe("Tests for calculator methods", () => {
  let calculator;

  beforeEach(async () => {
    calculator = new Calculator();
  });

  // Add
  describe("Addition tests", () => {
    [
      { arr: [2, 3], result: 5, description: "two numbers" },
      { arr: [-2, -5], result: -7, description: "negative numbers" },
      { arr: [32.54, 7.5], result: 40.04, description: "decimal numbers" },
      { arr: [1, 14, 39, 56, 73, 89, 0, 32], result: 304, description: "several numbers of same type" },
      { arr: [1, -2, 3.0, -4, 5, 156, -17, 2.55], result: 144.55, description: "several numbers of different types" },
      { arr: [134658920384923020302, 32894895492940204280, 43939203920302033], result: 167597755081783540000, description: "longer numbers" },
    ].forEach((testData) => {
      it(`should return sum of ${testData.description}`, async () => {
        const addititonResult = calculator.add(...testData.arr);
        expect(addititonResult).toEqual(testData.result);
      });
    });
  });


  // Multiply
  describe("Multiplication tests", () => {
    [
      { arr: [3, 3], result: 9, description: "two numbers" },
      { arr: [-2, -3], result: 6, description: "negative numbers" },
      { arr: [2.7, 10.5], result: 28.35, description: "decimal numbers" },
      { arr: [1, 14, 39, 56, 73, 89, 32], result: 6356872704, description: "several numbers of same type" },
      { arr: [1, -2, 3.78, 64, 150], result: -72576, description: "several numbers of different types" },
      { arr: [134658920384923020302, 32894895492940204280, 43939203920302033], result: 1.946327072088339e56, description: "longer numbers" },
      { arr: [2, 0], result: 0, description: "0" },
    ].forEach((testData) => {
      it(`should return multiplication of ${testData.description}`, async () => {
        const multiplyResult = calculator.multiply(...testData.arr);
        expect(multiplyResult).toEqual(testData.result);
      });
    });
  });


  // Subtraction
  describe("Subtraction tests", () => {
    [
      { a: 5, b: 3, result: 2, description: "two numbers" },
      { a: -15, b: -10, result: -5, description: "negative numbers" },
      { a: 2.5, b: 4.3, result: -1.7999999999999998, description: "decimal numbers" },
      { a: -45, b: 50, result: -95, description: "different numbers" },
      { a: 4545342234324343, b: 3243432432424, result: 4542098801891919, description: "longer numbers" },
    ].forEach((testData) => {
      it(`should return difference of ${testData.description}`, async () => {
        const subtractionResult = calculator.subtraction(testData.a, testData.b);
        expect(subtractionResult).toEqual(testData.result);
      });
    });
  });


  // Divide
  describe("Tests of divide", () => {
    [
      { a: 10, b: 2, result: 5, description: "two numbers" },
      { a: -50, b: -62, result: 0.8064516129032258, description: "negative numbers" },
      { a: 100.5, b: 2.5, result: 40.2, description: "decimal numbers" },
      { a: 10, b: -5, result: -2, description: "different numbers" },
      { a: 3458588899839859, b: 323234343455566, result: 10.6999425335362, description: "longer numbers" },
    ].forEach((testData) => {
      it(`should return result of dividing ${testData.description}`, async () => {
        const divideResult = calculator.divide(testData.a, testData.b);
        expect(divideResult).toEqual(testData.result);
      });
    });
  });


  // Exponentiation
  describe("Exponentiation tests", () => {
    [
      { value: 3, result: 9, description: "number" },
      { value: -3, result: 9, description: "negative number" },
      { value: 32.22, result: 1038.1283999999998, description: "decimal number" },
      { value: 3463779293848793783, result: 1.1997766996495646e37, description: "longer number" },
      { value: 1.443567e4, result: 208388568.3489, description: "number in exponential notation" },
    ].forEach((testData) => {
      it(`should return square of ${testData.description}`, async () => {
        const exponentiationResult = calculator.exponentiation(testData.value);
        expect(exponentiationResult).toEqual(testData.result);
      });
    });
  });
