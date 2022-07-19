function solution(s) {
  var answer = [];

  const tupleExpArr = s
    .split(',{')
    .map((s) => s.replace(/{|}/g, '').split(','))
    .sort((a, b) => a.length - b.length);

  tupleExpArr.forEach((t) => {
    const next = t.find((o) => !answer.includes(+o));
    answer.push(+next);
  });

  return answer;
}
