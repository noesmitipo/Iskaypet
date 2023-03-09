import { calculateAverage, calculateStandardDeviation } from "./math-helper";

describe("Math helper", () => {
  it("Calculate average returns 0 for an empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });

  it("Calculate average returns same value contained in the array if its lenght is one", () => {
    expect(calculateAverage([3])).toBe(3);
  });

  it("Calculates average for an array with multiple numbers", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });

  it("Calculate standard deviation returns 0 for an empty array", () => {
    expect(calculateStandardDeviation([])).toBe(0);
  });

  it("Calculates standard deviation for an array with multiple numbers", () => {
    expect(calculateStandardDeviation([2, 4])).toBe(1);
  });
});
