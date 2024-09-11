let arr = [1, 2, 3, 4, 5];
/* Data Structure that performs set(), get(), setAll() in O(1)
Implement a Data Structure that capable of getting an array of numbers and have init([array]), setAll(value), getIndex(index), and setIndex(index,value) functions usage all with O(1) complexity
setAll(value)->setAll(5)->[5,5,5,5,5]
getIndex(index)->value->getIndex(2)=>3
setIndex(index,value)->setIndex(0,12)->[12,...] 
*/
import React, { useState } from "react";

const ConstantTimeDataStructure = () => {
  const [data, setData] = useState(new Map());
  const [allValues, setAllValues] = useState(null);

  const set = (key, value) => {
    const newData = new Map(data);
    newData.set(key, value);
    setData(newData);
  };

  const get = (key) => {
    if (allValues !== null) {
      return allValues;
    }
    return data.get(key);
  };

  const setAll = (value) => {
    setAllValues(value);
  };

  const handleSetAllClick = () => {
    console.log('Setting all values to "commonValue"');
    dataStructureRef.current.setAll("commonValue");
  };

  const handleSetClick = () => {
    console.log('Setting key "testKey" to value "testValue"');
    dataStructureRef.current.set("testKey", "testValue");
  };

  const handleGetClick = () => {
    console.log('Getting value for key "testKey"');
    const value = dataStructureRef.current.get("testKey");
    console.log("Value:", value);
  };

  const dataStructureRef = React.useRef();

  return (
    <div>
      <p>Data Structure: {JSON.stringify([...data])}</p>
      <p>All Values: {allValues !== null ? allValues : "N/A"}</p>
      <button onClick={() => set("exampleKey", "exampleValue")}>Set</button>
      <button onClick={() => setAll("allValuesExample")}>Set All</button>
      <button onClick={() => console.log(get("exampleKey"))}>Get</button>
      <h2>Tester Component</h2>
      <button onClick={handleSetAllClick}>Set All</button>
      <button onClick={handleSetClick}>Set</button>
      <button onClick={handleGetClick}>Get</button>
      <ConstantTimeDataStructure ref={dataStructureRef} />
    </div>
  );
};
export default ConstantTimeDataStructure;
