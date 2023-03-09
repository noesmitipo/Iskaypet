import { getAge } from "./age-helper";

describe("Age helper", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-02-20 12:00:00"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("Returns 0 years if birthdate is one day more than today but in last year", () => {
    expect(getAge(new Date("2022-02-21"))).toBe(0);
  });

  it("Returns 1 year if birthdate is same day than today but in last year", () => {
    expect(getAge(new Date("2022-02-20"))).toBe(1);
  });

  it("Returns 2 years if birthdate is more than 2 years ago but less than 3", () => {
    expect(getAge(new Date("2021-01-02"))).toBe(2);
  });
});
