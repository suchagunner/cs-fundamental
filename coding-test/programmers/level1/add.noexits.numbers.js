function solution(numbers) {
  const singles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return singles.filter((n) => !numbers.includes(n)).reduce((acc, cur) => acc + cur, 0);
}
