function add(a, b) {
  //Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)) {
    return "Invalid Input: Arguments must be numbers";
  }
  return a + b;
}

function subtract(a, b) {
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)) {
    return "Invalid Input: Arguments must be numbers";
  }
  return a - b; 
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 5)); // Output: 5
console.log(add("5",3)); //Output: 8
console.log(add("hello", 3)); // Output: Invalid Input: Arguments must be numbers