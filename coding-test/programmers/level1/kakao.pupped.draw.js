function solution(board, moves) {
  var answer = 0;
  const bucket = [];
  const stackList = [];

  for (let i = 0; i < board.length; i += 1) {
    let colStack = [];

    for (let j = 0; j < board.length; j += 1) {
      colStack.unshift(board[j][i]);
    }

    stackList.push(colStack);
  }

  moves.forEach((m) => {
    let popped = 0;
    const targetStack = stackList[m - 1];
    while (popped === 0 && targetStack.length > 0) {
      popped = targetStack.pop();
    }

    if (popped === 0) return;

    if (bucket.length < 1) {
      bucket.push(popped);
      return;
    }

    if (bucket[bucket.length - 1] === popped) {
      bucket.pop();
      answer += 2;
    } else {
      bucket.push(popped);
    }
  });

  return answer;
}
