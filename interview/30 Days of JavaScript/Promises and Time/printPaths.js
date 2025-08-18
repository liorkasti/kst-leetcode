/* 
Given the following code:

(async ()=>{  

  const request = async (path) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(requested to ${path} has been resolved)
            res(${path} has been requested..);
        })  
    });
  };  

  const paths = [
    '/user/5',
    '/user/7',
    '/user/5'
  ];

})();

Without changing the request function content:  

  1. Loop thru paths and call request in parallel
  2. Avoid duplicate requests of the similar paths
  3. Keep the amount of responses as the array length

In the code example above:

Your code should print request function called! only twice (as path #1 and #3 are similar) but print an array of three results:

[
  '/user/5 has been requested..',
  '/user/7 has been requested..'
  '/user/5 has been requested..'
] 
  */

(async () => {
  const request = async (path) => {
    return new Promise((res) => {
      setTimeout(() => {
        console.log(`requested to ${path} has been resolved`);
        res(`${path} has been requested..`);
      });
    });
  };

  const paths = [
    '/user/5',
    '/user/7',
    '/user/5'
  ];

  const uniquePaths = new Map();

  paths.forEach(path => {
    if (!uniquePaths.has(path)) {
      uniquePaths.set(path, request(path));
    }
  });

  const resultPromises = paths.map(path => uniquePaths.get(path));
  
  console.log(await Promise.all(resultPromises));

/*   
// Create a map to hold unique paths and their corresponding promises
  const uniquePaths = new Map();

  paths.forEach(path => {
    if (!uniquePaths.has(path)) {
      uniquePaths.set(path, request(path));
    }
  });

  // Use the map to get all unique promises
  const results = await Promise.all(Array.from(uniquePaths.values()));

  // Map the original paths array to the results, ensuring the original order and duplicates are preserved
  const finalResults = paths.map(path => uniquePaths.get(path));

  // Since Promise.all preserves the order, we need to wait for all promises in finalResults to resolve
  Promise.all(finalResults).then(values => {
    console.log(values); // This will log the array of results as specified
  }); 
  */


// console.log({uniquePaths, results, finalResults});
// console.log("x: ",paths.map(path => uniquePaths.get(path)))
// console.log("No Caching or Deduplication: ",await Promise.all(paths.map((path)=> request(path))));

})();


/*
(async ()=>{  

  const request = async (path) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`requested to ${path} has been resolved`)
            res(`${path} has been requested..`);
        })  
    });
  };  

  const paths = [
    '/user/5',
    '/user/7',
    '/user/5'
  ];

// Use a map to store and reuse resolved promises
const cache = new Map();
  
const requests = paths.map(async (path) => {
  // If the path is already requested, reuse the result
  if (!cache.has(path)) {
    // Store the result of the request in the map
    cache.set(path, request(path));
  }
  // Return the cached result
  return cache.get(path);
});

// Wait for all requests to resolve and print the results
const results = await Promise.all(requests);
// console.log(results); // Output: the array of requested results

  console.log("No Caching or Deduplication: ",await Promise.all(paths.map((path)=> request(path))));
})();
  */