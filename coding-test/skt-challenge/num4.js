function solution(grid, k) {
  const LAND_TYPE = {
      FLAT: ".",
      FOREST: "F",
      RIVER: "#"
  }

  function bfs(x, y) {
      const visited = new Array(grid.length).fill(null).map(_ => new Array(grid[0].length).fill(false));
      const dx = [-1, 1, 0, 0];
      const dy = [0, 0, -1, 1];

      const queue = [];
      let count = 0;
      

      queue.push([x, y]);

      console.log(queue.length)
      while (queue.length > 0) {
          const [_x, _y] = queue.shift();

          for (let i = 0; i < 4; i += 1) {
              const nx = _x + dx[i];
              const ny = _y + dy[i];

              if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) {
                  continue;
              }

              if (grid[nx][ny] === LAND_TYPE.RIVER) {
                  continue;
              }

              if (!visited[nx][ny]) {
                  queue.push([nx, ny])
                  count += 1;
              }
          }
      }

      return {
          queue,
          count
      }
  }

  var answer = -1;

  console.log(bfs(0, 0))

  return answer;
}

console.log(solution(["..FF", "###F", "###."], 4))