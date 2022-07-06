// function solution(people, limit) {
//   const pList = [...people];
//   let boatCnt = 0;

//   while (pList.length > 0) {
//     const p = pList.pop();
//     const available = pList.filter((fp) => p + fp <= limit);

//     if (available.length > 0) {
//       pList.splice(pList.indexOf(Math.max(...available)), 1);
//     }

//     boatCnt += 1;
//   }

//   return boatCnt;
// }

// 효율성 문제로 실패!

/**
 * 
 * @param {number[]} people 
 * @param {number} limit 
 * @description 내림차순으로 정렬되어 있어서 맨 뒤 element를 검사하는 방식
 * @returns 보트 수
 */

function solution(people, limit) {
  const pList = people.sort((a, b) => b - a);
  let answer = 0;
  const bigs = [];
  const smalls = [];

  pList.forEach((p) => {
    if (p > limit / 2) {
      bigs.push(p);
      answer += 1;
    } else {
      smalls.push(p);
    }
  });

  const reserved = [];

  smalls.forEach((p) => {
    if (reserved.length > 0 && p + reserved[reserved.length - 1] <= limit) {
      reserved.pop();
      return;
    }

    if (p + bigs[bigs.length - 1] > limit) {
      reserved.push(p);
      answer += 1;
      return;
    }

    bigs.pop();
  });

  return answer;
}
