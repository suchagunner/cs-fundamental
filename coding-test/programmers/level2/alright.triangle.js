function solution(w, h) {
  var answer = 1;

  if (w === h) {
    return w * h - w;
  }

  let GCF = new Array(Math.min(w, h))
    .fill(Math.min(w, h))
    .map((n, i) => n - i)
    .find((n) => w % n === 0 && h % n === 0);

  const minX = w / GCF;
  const minY = h / GCF;

  const loopCnt = w / (w / GCF);

  answer = w * h - loopCnt * (minX + minY - 1);

  return answer;
}
