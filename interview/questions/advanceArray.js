let arr = [1, 2, 3, 4, 5];
/* Data Structure that performs set(), get(), setAll() in O(1)
Implement a Data Structure that capable of getting an array of numbers and have init([array]), setAll(value), getIndex(index), and setIndex(index,value) functions usage all with O(1) complexity
setAll(value)->setAll(5)->[5,5,5,5,5]
getIndex(index)->value->getIndex(2)=>3
setIndex(index,value)->setIndex(0,12)->[12,...] 
*/
class advanceDS {
  constructor() {
    this.data = {}; // Object for storing key-value pairs
    this.allValues = []; // Array to store all values
    this.allValueIndex = {}; // Object to map value indices
  }

  set(key, value) {
    if (!this.data.hasOwnProperty(key)) {
      this.allValues.push(value); // Add value to the array
      this.allValueIndex[key] = this.allValues.length - 1; // Store value index
    } else {
      const index = this.allValueIndex[key]; // Get index of existing value
      this.allValues[index] = value; // Update value in the array
    }
    this.data[key] = value; // Update key-value pair in the object
  }

  get(key) {
    if (this.data.hasOwnProperty(key)) {
      return this.data[key]; // Retrieve value from the object
    }
    return undefined; // Return undefined if key doesn't exist
  }

  setAll(value) {
    this.allValues = new Array(Object.keys(this.data).length).fill(value); // Update all values in the array
    Object.keys(this.data).forEach((key, index) => {
      this.data[key] = value; // Update all key-value pairs in the object
      this.allValueIndex[key] = index; // Update value indices
    });
  }
}

// Instantiate Constant Advance Data Structure
const ds = new advanceDS();

// Test set() and get()
ds.set("key1", "value1");
console.log(ds.get("key1")); // Output: value1

// Test set() to update existing key
ds.set("key1", "updatedValue1");
console.log(ds.get("key1")); // Output: updatedValue1

// Test setAll() and get() after setAll()
ds.set("key2", "value2");
ds.setAll("newValue");
console.log(ds.get("key1")); // Output: newValue
console.log(ds.get("key2")); // Output: newValue

// Adding key-value pairs
ds.set("a", 10);
ds.set("b", 20);
ds.set("c", 30);

// Retrieving values
console.log(ds.get("a")); // Output: 10
console.log(ds.get("b")); // Output: 20
console.log(ds.get("c")); // Output: 30

// Setting new values
ds.set("a", 100);
ds.set("d", 40);

// Retrieving updated values
console.log(ds.get("a")); // Output: 100
console.log(ds.get("d")); // Output: 40

// Setting all values to 50
ds.setAll(50);

// Retrieving all updated values
console.log(ds.get("a")); // Output: 50
console.log(ds.get("b")); // Output: 50
console.log(ds.get("c")); // Output: 50
console.log(ds.get("d")); // Output: 50

// Retrieving updated values
ds.set("a", 100);
ds.set("d", 40);

console.log("ds", ds);
