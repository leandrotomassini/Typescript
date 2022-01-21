export {};

let user: [number, string];
user = [1, 'pepe'];

console.log('user', user);
console.log('username', user[1]);
console.log('username', user[0]);

// Tuplas con varios valores
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('user-info', userInfo);

// Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'a']);
array.push([2, 'b']);
array.push([4, 'c']);

console.log('array ', array);

// Uso de funciones de Array
// lensQueen -> lensQueen001

array[2][1];
array[3][1].concat('001');