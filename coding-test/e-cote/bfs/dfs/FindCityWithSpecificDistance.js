// bfs 특정 거리의 도시 찾기
function solution(nodes, lines) {
  const [N, M, K, X] = nodes;

  const graph = new Array(5).fill(null).map((o) => new Array());

  lines.forEach(([from, to]) => {
    graph[from].push(to);
  });

  const searchWithBfs = (start) => {
    const visited = new Array(N).fill(false);

    return (...args) => {
      const queue = [start];
      visited[start] = true;
      const distanceSequence = [];

      while (queue.length > 0) {
        const el = queue.shift();

        const searched = [];
        for (const _el of graph[el]) {
          if (!visited[_el]) {
            queue.push(_el);
            visited[_el] = true;
            searched.push(_el);
          }
        }

        distanceSequence.push(searched);
      }

      return distanceSequence;
    };
  };

  const getDistanceSequence = searchWithBfs(X);
  const sequence = getDistanceSequence();

  return sequence[K - 1];
}

console.log(
  solution(
    [4, 4, 2, 1],
    [
      [1, 2],
      [1, 3],
      [2, 3],
      [2, 4],
    ]
  ),
  solution(
    [4, 3, 2, 1],
    [
      [1, 2],
      [1, 3],
      [1, 4],
    ]
  ),
  solution(
    [4, 4, 1, 1],
    [
      [1, 2],
      [1, 3],
      [2, 3],
      [2, 4],
    ]
  ),

);
