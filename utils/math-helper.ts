export const calculateAverage = (numbers: number[]) => {
  if (numbers.length === 0) return 0;

  return numbers.reduce((a, b) => a + b) / numbers.length;
};

export const calculateStandardDeviation = (numbers: number[]) => {
  if (numbers.length === 0) return 0;

  const n = numbers.length;
  const mean = calculateAverage(numbers);
  return Math.sqrt(
    numbers.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
};
