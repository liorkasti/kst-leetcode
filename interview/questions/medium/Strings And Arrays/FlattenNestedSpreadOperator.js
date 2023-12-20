let nestedList = [[1,1],2,[1,1]];
// let flattenList = [...nestedList[0],...nestedList[1],...nestedList[2]]
//OR: 
let flattenList = nestedList.reduce((acc, val) => [...acc, ...val], []);

console.log(flattenList);