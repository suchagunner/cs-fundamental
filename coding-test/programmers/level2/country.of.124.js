function solution(n) {
  const REMAINS = {
    0: 4,
    1: 1,
    2: 2,
  };

  var answer = '';
  let number = n;

  while (number > 0) {
    const remains = number % 3;
    answer = REMAINS[remains] + answer;

    if (remains === 0) {
      number = Math.floor((number - 1) / 3);
    } else {
      number = Math.floor(number / 3);
    }
  }

  return answer;
}
