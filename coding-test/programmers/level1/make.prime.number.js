// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((el) => [fixed, ...el]);
//     results.push(...attached);
//   });

//   return results; // 결과 담긴 results return
// };

// const isPrime = (num) => {
//   let value = true;

//   for (let i = 2; i < Math.sqrt(num); i += 1) {
//     if (num % i === 0) return false;
//   }

//   return value;
// };

// function solution(nums) {
//   var answer = -1;

//   const possibles = getPermutations(nums, 3)
//     .filter((perms) => perms.length === 3)
//     .filter((perms) => isPrime(+perms.map((o) => `${o}`).join('')));

//   return answer;
// }
// 세 숫자의 조합으로 소수 찾기

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const permutations = getCombinations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const isPrime = (num) => {
  let value = true;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return value;
};

function solution(nums) {
  var answer = -1;

  answer = getCombinations(nums, 3).filter((perms) => isPrime(perms.reduce((acc, cur) => acc + cur, 0))).length;

  return answer;
}
