function solution(progresses, speeds) {
  let day = 1;
  const taskQueue = [];
  const deployCntList = [];

  const getLastTask = () => (taskQueue[taskQueue.length - 1] === undefined ? -1 : taskQueue[taskQueue.length - 1]);

  while (taskQueue.length < progresses.length) {
    const doneTaskIdxs = progresses
      .map((o, i) => {
        return {
          done: o + speeds[i] * day >= 100,
          progress: o + speeds[i] * day,
          index: i,
        };
      })
      .filter((o) => !!o.done)
      .map((o) => o.index);

    let cnt = 0;

    while (doneTaskIdxs.includes(getLastTask() + 1)) {
      taskQueue.push(getLastTask() + 1);

      cnt += 1;
    }

    if (cnt > 0) {
      deployCntList.push(cnt);
    }

    day += 1;
  }

  return deployCntList;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
