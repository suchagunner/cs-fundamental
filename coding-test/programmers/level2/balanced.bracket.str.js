function solution(p) {
  return getAnswer(p);
}

function getAnswer(str) {
  if (isCorrect(str)) return str;

  const [u, v] = getUV(str);
  if (isCorrect(u)) {
    return u + getAnswer(v);
  } else {
    let u2 = u
      .slice(1, u.length - 1).split("").map(c => c === '(' ? ')' : '(').join("")
    return '(' + getAnswer(v) + ')' + u2;
  }
}

// 2개의 문자열로 나누었을 때 둘다 균형잡힌 괄호 문자열로 리턴
function getUV(str) {
  for (let i = 0; i < str.length; i++) {
    if (isBalanced(str.slice(0, i + 1)) && isBalanced(str.slice(i + 1))) {
      return [str.slice(0, i + 1), str.slice(i + 1)];
    }
  }
  return [str, ''];
}

function isBalanced(str) {
  if (str.length % 2 === 1) return false;
  let n1 = 0;
  let n2 = 0;
  str.split('').forEach((s) => {
    if (s === '(') n1++;
    else n2++;
  });
  return n1 === n2;
}

function isCorrect(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) stack.push(str[i]);
    else {
      if (str[i] === ')' && stack[stack.length - 1] === '(') stack.pop();
      else stack.push(str[i]);
    }
  }
  return stack.length === 0;
}
