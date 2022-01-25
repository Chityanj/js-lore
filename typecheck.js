function getType(obj) {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1) // Slice becasue we want just ouptut if it is array object null etc without it our output will be [object array] like this or [object object]
    .toLowerCase(); // Convert Array to array 
}

console.log(getType([]); //checking for array so output would be array 
console.log(getType((null));
