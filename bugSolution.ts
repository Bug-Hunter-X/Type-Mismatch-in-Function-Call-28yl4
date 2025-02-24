function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)){
    return a + b;
  }
  else{
    return 0; // Or throw an error, handle appropriately based on your needs
  }
}

let result = addSafe("hello", 10); // Returns 0 or throws an error based on your solution
let result2 = addSafe(10, 20); // Returns 30