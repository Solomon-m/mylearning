// var message = "hi";
// {
// 	var message = "bye";
// }
// console.log(message);

//let 
let message1 = "hi";
{
	let message1 = "bye";
}
console.log(message1);

// Example 1 ------start
/*var fs = [];
for (var i = 0; i < 10; i++) {
    fs.push(() => {
        console.log(i)
    })
}

fs.forEach((f) => {
    f()
});
*/

var fs = [];
for (let i = 0; i < 10; i++) {
    // here let creates new i. 
    fs.push(() => {
        console.log(i)
    })
}

fs.forEach((f) => {
    f()
});
// Example 1 ------end

// Example 2 ------start

function varFunc(n){
	var previous = 0;
	var current = 1;
	var i;
	var temp;
	for(i=0;i<n;i++){
		temp = previous;
		previous = current;
		current = temp +current;
		console.log(i,":: temp",temp,"::previous:",previous,"::current:",current);
	}
}

// Itreation 1 
 // temp = previous => temp = 0
 // previous = current => previous 1
 // current = temp+


function letFunc(n){
	let previous = 0;
	let current =1;
	for(let i=0;i<n;i++){
		let temp = previous;
		previous = current;
		current  = temp + current;
		console.log(i,":: temp",temp,"::previous:",previous,"::current:",current);
	}
}
