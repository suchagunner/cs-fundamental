function solution(number, k) {
  let numberStack = [];
  let count = k;

  for (const num of number.split('').map((n) => +n)) {
    if (numberStack.length === 0) {
      numberStack.push(num);
      continue;
    }

    while (count > 0 && numberStack.length > 0 && numberStack[numberStack.length - 1] < num) {
      numberStack.pop();
      count -= 1;
    }

    numberStack.push(num);
  }

  while (count > 0) {
    numberStack.pop();
    count -= 1;
  }

  return numberStack.join('');
}
