function solution(nums) {
  var answer = 0;
  const numOfMons = nums.length / 2;

  answer = Math.min(new Set(nums).size, numOfMons);

  return answer;
}
