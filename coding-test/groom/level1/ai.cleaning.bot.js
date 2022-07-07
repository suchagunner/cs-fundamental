/**
 * @level 1
 * @description https://level.goorm.io/exam/43068/1a-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EC%B2%AD%EC%86%8C%EA%B8%B0/quiz/1
 */

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const inputs = [];

  for await (const line of rl) {
    inputs.push(line.split(' ').map((o) => +o));
  }

  const [, ...targetArray] = inputs;
  solution(targetArray);
  rl.close();

  process.exit();
})();

function solution(targetArray) {
  targetArray
    .map((target) => {
      const minDistance = Math.abs(target[0]) + Math.abs(target[1]);

      if (minDistance > target[2]) {
        return 'NO';
      }

      const isOdd = (num) => num % 2 === 1;

      return isOdd(target[2]) === isOdd(minDistance) ? 'YES' : 'NO';
    })
    .map((o) => {
      console.log(o);
    });
}
