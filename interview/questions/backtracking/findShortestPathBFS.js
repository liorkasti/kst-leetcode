const matrix = [
	[1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
	[0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
	[0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
	[1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
	[1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
	[0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	[1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
	[0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
];
const destination = [7, 5];
const memo = {};

function isReachable(matrix) {
	/*     let memo = {};
		return function innerIsReachable(x, y, endX, endY) {
			if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length) {
				return false;
			}
			if (matrix[x][y] === 0) {
				return false;
			}
			if (x === endX && y === endY) {
				return true;
			}
			if (memo[x + ',' + y]) {
				return memo[x + ',' + y];
			}
			memo[x + ',' + y] = innerIsReachable(x + 1, y, endX, endY) || 
								innerIsReachable(x - 1, y, endX, endY) ||
								innerIsReachable(x, y + 1, endX, endY) ||
								innerIsReachable(x, y - 1, endX, endY);
			return memo[x + ',' + y];
		}
	}
	
	let matrix = [[1,1,1], [1,0,1], [1,1,1]];
	let isPossible = isReachable(matrix);
	console.log(isPossible(0,0,2,2)); // true
	console.log(isPossible(0,0,1,2)); // false */

	const findShortestPath = (matrix, destination, x = 0, y = 0, steps = 0) => {
		if (x === destination[0] && y === destination[1]) {
			return steps;
		}

		if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || matrix[x][y] !== 1) {
			return Infinity;
		}

		if (memo[[x, y]] !== undefined) {
			return memo[[x, y]];
		}

		const path1 = findShortestPath(matrix, destination, x - 1, y, steps + 1);
		const path2 = findShortestPath(matrix, destination, x + 1, y, steps + 1);
		const path3 = findShortestPath(matrix, destination, x, y - 1, steps + 1);
		const path4 = findShortestPath(matrix, destination, x, y + 1, steps + 1);
		const minPath = Math.min(path1, path2, path3, path4);

		memo[[x, y]] = minPath;

		return minPath;
	}
}
console.log(findShortestPath(matrix, destination));


//The time complexity of Dijkstra's algorithm is O((n+m) log n) where n is the number of nodes and m is the number of edges in the graph.
function dijkstra(graph, start) {
	// initialize distance object
	let distances = {};
	for (let node in graph) {
	  distances[node] = Infinity;
	}
	distances[start] = 0;
  
	// initialize priority queue
	let priorityQueue = new PriorityQueue();
	priorityQueue.enqueue(start, 0);
  
	// initialize previous object
	let previous = {};
  
	// while queue is not empty
	while (!priorityQueue.isEmpty()) {
	  // dequeue node from queue
	  let currentNode = priorityQueue.dequeue().value;
  
	  // for each neighbor of the current node
	  for (let neighbor in graph[currentNode]) {
		// calculate new distance to neighbor
		let distance = distances[currentNode] + graph[currentNode][neighbor];
  
		// if new distance is shorter than current distance
		if (distance < distances[neighbor]) {
		  // update distance
		  distances[neighbor] = distance;
  
		  // update previous
		  previous[neighbor] = currentNode;
  
		  // enqueue neighbor with new distance
		  priorityQueue.enqueue(neighbor, distance);
		}
	  }
	}
  
	return { distances, previous };
  }
  