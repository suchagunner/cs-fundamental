function solution(s) {
  var answer = '';
  const NUMBER_SPELLS = Object.freeze({
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  });

  let checkString = '';
  let remainStrArr = s.split('');

  while (remainStrArr.length > 0) {
    checkString += remainStrArr.shift();
    console.log(checkString);

    if (!isNaN(checkString)) {
      answer += checkString;
      checkString = '';
      continue;
    }

    if (Object.keys(NUMBER_SPELLS).includes(checkString)) {
      answer += NUMBER_SPELLS[checkString];
      checkString = '';
    }
  }

  return +answer;
}
