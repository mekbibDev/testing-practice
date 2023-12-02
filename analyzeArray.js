export default function analyzeArray(numbers) {
  if (numbers && numbers.length === 0)
    throw new Error("Function expects an array with at least one element");
  if (numbers === undefined) throw new Error("Function expects an argument");

  const length = numbers.length;
  const average = getAverage(numbers);
  const min = getMin(numbers);
  const max = getMax(numbers);

  return {
    average,
    min,
    max,
    length,
  };
}

function getAverage(numbers) {
  return Math.round(
    numbers.reduce((previousValue, currentValue) => {
      return Number(previousValue) + Number(currentValue);
    }, 0) / numbers.length
  );
}

function getMin(numbers) {
  return numbers.reduce((previousValue, currentValue) => {
    return currentValue < previousValue
      ? Number(currentValue)
      : Number(previousValue);
  }, Number.POSITIVE_INFINITY);
}

function getMax(numbers) {
  return numbers.reduce((previousValue, currentValue) => {
    return currentValue > previousValue
      ? Number(currentValue)
      : Number(previousValue);
  }, Number.NEGATIVE_INFINITY);
}
