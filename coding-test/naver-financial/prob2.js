function solution(cities, roads, cars, customers) {
  const graph = new Array(cities.length).fill(null).map((o) => new Array(cities.length).fill(0));

  roads.forEach((road) => {
    const [c1, c2, km] = road.split(' ');

    graph[cities.indexOf(c1)][cities.indexOf(c2)] = Number(km);
    graph[cities.indexOf(c2)][cities.indexOf(c1)] = Number(km);
  });

  const getLoadableCars = (weight) => {
    // 무게 싣을 수 있는 차들 리턴
    const availableCars = cars.filter((car) => {
      const [s, w, p] = car.split(' ');
      return w >= weight;
    });

    return availableCars;
  };

  const getInvoice = (car, cityFrom, cityTo) => {
    const visited = [];

    return (() => {
      const queue = [cityFrom];
      visited.push(cityFrom);
      const sequence = [];

      while (queue.length > 0) {
        const city = queue.shift();
        const searched = [];

        graph[cities.indexOf(city)].forEach((km, index) => {
          const _city = cities[index];
          if (visited.includes(_city)) {
            return;
          }

          queue.push(_city);
          visited.push(_city);
          searched.push({
            city: _city,
            km,
          });
        });

        sequence.push(searched);
      }

      const filtered = sequence.filter((o, i) => cities.indexOf(o.city) < i)
      
      return {
        car,
        price: filtered.reduce((acc, cur, idx) => {
          return acc + ( cur.km || 0 ) * Number(car.split(" ")[2])
        }, 0)
      };
    })();
  };

  customers.forEach((c) => {
    const [$from, $to, $weight] = c.split(' '); // a, c, 30
    const cars = getLoadableCars($weight);

    cars.forEach((car, index) => {
      const invoice = getInvoice(car, $from, $to);

      console.log(invoice);
    });
  });
}

/**
 * unsolved
 */