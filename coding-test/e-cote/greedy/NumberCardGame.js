// 숫자 카드 게임

function solution(cardRows) {
  const lowestNumbers = [];

  cardRows.forEach((column) => {
    const minimumNumber = Math.min(...column);
    lowestNumbers.push(minimumNumber);
  });

  return Math.max(...lowestNumbers);
}

console.log(
  solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ]),
  solution([
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ]),
);
