// function solution(rows, columns, queries) {
//   var answer = [];
//   const makeNewArray = () =>
//     new Array(rows).fill(null).map((o, idx) => new Array(columns).fill(null).map((n, i) => idx * columns + n + i + 1));
//   let array = makeNewArray();

//   queries.forEach((query) => {
//     const [x1, y1, x2, y2] = query;

//     let min = null;

//     let arrayCopy = JSON.parse(JSON.stringify(array));

//     let getMax = (x, y) => Math.max(x, y);
//     let getMin = (x, y) => Math.min(x, y);

//     for (let x = getMin(x1, x2) - 1; x <= getMax(x1, x2) - 1; x += 1) {
//       for (let y = getMin(y1, y2) - 1; y <= getMax(y1, y2) - 1; y += 1) {
//         if (x !== getMin(x1, x2) - 1 && x !== getMax(x1, x2) - 1) {
//           continue;
//         }

//         min = min === null ? array[x][y] : Math.min(min, array[x][y]);

//         if (x === getMin(x1, x2) - 1) {
//           if (y === getMax(y1, y2) - 1) {
//             arrayCopy[x + 1][y] = array[x][y];
//           } else {
//             arrayCopy[x][y + 1] = array[x][y];
//           }
//         }

//         if (y === getMax(y1, y2) - 1) {
//           if (x === getMax(x1, x2) - 1) {
//             arrayCopy[x][y - 1] = array[x][y];
//           } else {
//             arrayCopy[x + 1][y] = array[x][y];
//           }
//         }

//         if (x === getMax(x1, x2) - 1) {
//           if (y === getMin(y1, y2) - 1) {
//             arrayCopy[x - 1][y] = array[x][y];
//           } else {
//             arrayCopy[x][y - 1] = array[x][y];
//           }
//         }

//         if (y === getMin(y1, y2) - 1) {
//           if (x === getMin(x1, x2) - 1) {
//             arrayCopy[x][y + 1] = array[x][y];
//           } else {
//             arrayCopy[x - 1][y] = array[x][y];
//           }
//         }
//       }
//     }

//     array = arrayCopy;
//     answer.push(min);
//   });

//   return answer;
// }

// 첫풀이.

function solution(rows, columns, queries) {
  var answer = [];
  let array = new Array(rows)
    .fill(null)
    .map((o, idx) => new Array(columns).fill(null).map((n, i) => idx * columns + n + i + 1));

  queries.forEach((query) => {
    let arrCopy = JSON.parse(JSON.stringify(array));

    let minX = Math.min(query[0], query[2]) - 1;
    let maxX = Math.max(query[0], query[2]) - 1;
    let minY = Math.min(query[1], query[3]) - 1;
    let maxY = Math.max(query[1], query[3]) - 1;

    let minNumber = null;
    const setMinNumber = (n) => (minNumber = !minNumber || minNumber > n ? n : minNumber);

    for (let y = minY; y < maxY; y += 1) {
      setMinNumber(array[minX][y]);
      arrCopy[minX][y + 1] = array[minX][y];
    }

    for (let x = minX; x < maxX; x += 1) {
      setMinNumber(array[x][maxY]);
      arrCopy[x + 1][maxY] = array[x][maxY];
    }

    for (let y = maxY; y > minY; y -= 1) {
      setMinNumber(array[maxX][y]);
      arrCopy[maxX][y - 1] = array[maxX][y];
    }

    for (let x = maxX; x > minX; x -= 1) {
      setMinNumber(array[x][minY]);
      arrCopy[x - 1][minY] = array[x][minY];
    }

    answer.push(minNumber);
    array = arrCopy;
  });

  return answer;
}
