// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
      continue;
    }

    stack.pop();
  }

  return stack.length > 0 ? 0 : 1;
}
