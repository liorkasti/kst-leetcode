<<<<<<< HEAD
/**
 * 1828. Queries on Number of Points Inside a Circle
 * You are given an array points where points[i] = [xi, yi] 
 * is the coordinates of the ith point on a 2D plane. Multiple 
 * points can have the same coordinates.
 * You are also given an array queries where queries[j] = [xj, yj, rj] 
 * describes a circle centered at (xj, yj) with a radius of rj.
 * For each query queries[j], compute the number of points inside the jth circle. 
 * Points on the border of the circle are considered inside.
 * Return an array answer, where answer[j] is the answer to the jth query.
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
function countPoints(points, queries) {
    // For each query, check all points and calculate
    // number of points having distance <= radius.
    return queries.map(([qx, qy, qr]) => {
      return points.reduce((acc, [px, py]) => {
        if (isInside(px, py, qx, qy, qr)) ++acc;
        return acc;
      }, 0);
    });
  }
  
  function isInside(px, py, cx, cy, radius) {
    return distance(px, py, cx, cy) <= radius;
  }
  
  // Euclidean distance
  // https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions
  function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
  }

  points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
  points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]
=======
/**
 * 1828. Queries on Number of Points Inside a Circle
 * You are given an array points where points[i] = [xi, yi] 
 * is the coordinates of the ith point on a 2D plane. Multiple 
 * points can have the same coordinates.
 * You are also given an array queries where queries[j] = [xj, yj, rj] 
 * describes a circle centered at (xj, yj) with a radius of rj.
 * For each query queries[j], compute the number of points inside the jth circle. 
 * Points on the border of the circle are considered inside.
 * Return an array answer, where answer[j] is the answer to the jth query.
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
function countPoints(points, queries) {
    // For each query, check all points and calculate
    // number of points having distance <= radius.
    return queries.map(([qx, qy, qr]) => {
      return points.reduce((acc, [px, py]) => {
        if (isInside(px, py, qx, qy, qr)) ++acc;
        return acc;
      }, 0);
    });
  }
  
  function isInside(px, py, cx, cy, radius) {
    return distance(px, py, cx, cy) <= radius;
  }
  
  // Euclidean distance
  // https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions
  function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
  }

  points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
  points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]
>>>>>>> origin/master
  console.log('countPoints(points, queries) :>> ', countPoints(points, queries));