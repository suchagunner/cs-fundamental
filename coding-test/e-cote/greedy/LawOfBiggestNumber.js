// 가장 큰 수

function solution(numbers, addCount, serialCount) {
  const sorted = numbers.sort().reverse();

  const biggest = sorted[0] || 0;
  const nextBiggest = sorted[1] || 0;

  let _addCount = addCount;
  let _serialCount = serialCount;
  let value = 0;

  while (_addCount > 0) {
    if (_serialCount > 0) {
      value += biggest;
      _serialCount -= 1;
    } else {
      value += nextBiggest;
      _serialCount = serialCount;
    }

    _addCount -= 1;
  }

  return value;
}

function solutionWithRecurrentRelation(numbers, addCount, serialCount) {
  const sorted = numbers.sort().reverse();

  const biggest = sorted[0] || 0;
  const nextBiggest = sorted[1] || 0;

  const biggestCount = (addCount / (serialCount + 1)) * serialCount + addCount % (serialCount + 1);
  // (biggest + biggest + ... + biggest + nextBiggest  ...m개) x n + (전체 % m)
  const nextBiggestCount = addCount - biggestCount;

  return biggest * biggest + nextBiggest * nextBiggestCount;
}

console.log(solution([2, 4, 5, 4, 6], 8, 3));
console.log(solutionWithRecurrentRelation([2, 4, 5, 4, 6], 8, 3));
