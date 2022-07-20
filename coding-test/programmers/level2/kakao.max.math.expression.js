function solution(expression) {
  var answer = 0;

  function getPermutation(array, length) {
    if (length === 1) {
      return array.map((o) => [o]);
    }

    const value = [];

    array.forEach((el, idx, org) => {
      const fix = el;
      const rest = [...org.slice(0, idx), ...org.slice(idx + 1)];
      const permutation = getPermutation(rest, length - 1);
      const joined = permutation.map((o) => [fix, ...o]);
      value.push(...joined);
    });

    return value;
  }

  const oprtOrders = getPermutation(['*', '-', '+'], 3);

  const values = oprtOrders.map((oprtOrder) => {
    const value = 0;
    const oprts = Array.from(expression).filter((o) => o.match(/\-|\*|\+/g));
    const numbers = expression.split(/\-|\*|\+/g);

    const newExp = [];

    let idx = 0;
    while (newExp.length < oprts.length + numbers.length) {
      if (numbers[idx]) {
        newExp.push(numbers[idx]);
      }

      if (oprts[idx]) {
        newExp.push(oprts[idx]);
      }

      idx += 1;
    }

    const target = [...newExp];

    oprtOrder.forEach((oprt) => {
      while (target.includes(oprt)) {
        const oprtIdx = target.indexOf(oprt);
        let a = +target[oprtIdx - 1];
        let b = +target[oprtIdx + 1];

        if (oprtIdx - 2 === 0 && target[oprtIdx - 2] === '-') {
          a = a * -1;
        }

        let value = 0;

        if (oprt === '*') {
          value = a * b;
        } else if (oprt === '+') {
          value = a + b;
        } else if (oprt === '-') {
          value = a - b;
        }

        target.splice(oprtIdx - 1, 3, value);
      }
    });

    return target;
  });

  answer = Math.max(...values.map((o) => Math.abs(o)));

  return answer;
}
