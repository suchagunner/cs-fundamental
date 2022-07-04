function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);

  const truckQueues = [...truck_weights];
  let seconds = 0;

  const allCrossed = () => truckQueues.length < 1 && queue.reduce((acc, cur) => acc + cur, 0) === 0;

  while (!allCrossed()) {
    queue.pop();
    const nextTruck = truckQueues[0];
    const loadable = queue.reduce((acc, cur) => acc + cur, 0) + nextTruck <= weight;

    if (truckQueues.length < 1 || !loadable) {
      queue.unshift(0);
    } else {
      queue.unshift(truckQueues.shift());
    }

    seconds += 1;
  }

  return seconds;
}

console.log(solution(2, 10, [7, 4, 5, 6]))
