function solution(numbers) {
  const isOneOrTwoDiff = (num1, num2) => {
    const diffBit =  num2 ^ num1;
    const diffCounts = diffBit
      .toString(2)
      .split('')
      .filter((c) => c === '1').length;

    return 2 >= diffCounts;
  };

  return numbers.map((num) => {
    let checkNum = num + 1;

    while (!isOneOrTwoDiff(num, checkNum)) {
      checkNum += 1;
    }

    return checkNum;
  });
}
