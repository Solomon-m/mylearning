/*
 ...args
 - Spread operator is used to take an array and spread it into individual item
*/


console.log([1,2,3,4,5]);
console.log(...[1,2,3,4,5]);

let first = [1,2,3];
let second = [4,5,6];

first.push(second); 
first.push(...second);


function addnumbers(a,b,c){
	let results = a+b+c;
	console.log("results:",results);
}

addnumbers(...first);