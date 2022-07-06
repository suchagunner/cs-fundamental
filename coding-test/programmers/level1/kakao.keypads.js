function solution(numbers, hand) {
  const coordinates = {
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    '*': [0, 0],
    0: [1, 0],
    '#': [2, 0],
  };

  let answer = '';

  let leftThumb = coordinates['*'];
  let rightThumb = coordinates['#'];

  numbers.forEach((n) => {
    if ([1, 4, 7].includes(n)) {
      answer += 'L';
      leftThumb = coordinates[n];
      return;
    }

    if ([3, 6, 9].includes(n)) {
      answer += 'R';
      rightThumb = coordinates[n];
      return;
    }

    const [x, y] = coordinates[n];
    const lD = Math.abs(x - leftThumb[0]) + Math.abs(y - leftThumb[1]);
    const rD = Math.abs(x - rightThumb[0]) + Math.abs(y - rightThumb[1]);

    if (lD > rD) {
      answer += 'R';
      rightThumb = coordinates[n];
      return;
    }

    if (lD < rD) {
      answer += 'L';
      leftThumb = coordinates[n];
      return;
    }

    const isLeft = hand === 'left';

    if (isLeft) {
      answer += 'L';
      leftThumb = coordinates[n];
      return;
    }

    answer += 'R';
    rightThumb = coordinates[n];
  });

  return answer;
}
