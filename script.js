console.log('Beginning');

const sortarray = (a,b) => a - b;

let array = new Array(4, 1, 9);

let newarray = array.sort((a,b) => sortarray(a,b));

console.log(newarray);
