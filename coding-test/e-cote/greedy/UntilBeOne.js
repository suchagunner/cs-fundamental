// 1이 될 때 까지

function solution(number, divisor) {
  let value = 0;
  let share = number;

  while (share !== 1) {
    if (share % divisor === 0) {
      share = Math.floor(share / divisor);
      value += 1;
      continue;
    }

    share -= 1;
    value += 1;
  }

  return value;
}

console.log(solution(21, 4));
