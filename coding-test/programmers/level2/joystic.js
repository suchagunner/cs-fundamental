const ALPHABET = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
};

function solution(name) {
  var answer = 0;
  const 최소수직이동 = name.split('').reduce((acc, cur) => Math.min(ALPHABET[cur], 26 - ALPHABET[cur]) + acc, 0);

  let 최소수평이동 = name.length - 1;

  for (let i = 0; i < name.length; i += 1) {
    let next = i + 1;

    while (next < name.length && name[next] === 'A') {
      next += 1;
    }

    최소수평이동 = Math.min(최소수평이동, i * 2 + name.length - next);
    최소수평이동 = Math.min(최소수평이동, (name.length - next) * 2 + i);
  }

  answer = 최소수평이동 + 최소수직이동

  return answer;
}
