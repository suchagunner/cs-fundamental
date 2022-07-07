function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => acc + cur * (signs[idx] === true ? 1 : -1), 0);
}
