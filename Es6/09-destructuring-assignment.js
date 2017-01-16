/*
* Destructuring in ES6 allows you to lookup in object for a property.
*/

// var obj = {
// 	color : "red";
// }

// console.log(obj.color); 

var {color} = {
	color:"red"
};
console.log(":color:",color);

// with multiple property lookup in an object
var {color,position} = {
	color:"red",
	position :"forward"
};

console.log("color:",color);
console.log("position:",position);

// From a function return value also we can destruct values. 

function generateObj(){
	return {
		color:"red",
		name:"solomon",
		state:"Chennai",
	}
}

var {name,state} = generateObj();
console.log("name:",name);
console.log("state:",state);

var {name:username,state:city} = generateObj();
// Here still lookup for name and assign it to username 
// And also lookup for state and assign that name to city. 
console.log("username:",username);
console.log("city:",city);


//working with array
var [first,,,fourth,fifth] = ['read','yellow','green','blue','orange'];
console.log(first),
console.log(fourth);
console.log(fifth);

var people = [
     {
     	"firstname":"solomon",
     	"lastname":"mark",
     	"phone":"999999888",
     	"email":"test@test.com",
     	"address":"chennai-96"
     },
     {
     	"firstname":"smith",
     	"lastname":"will",
     	"phone":"9900087688",
     	"email":"bbb@test.com",
     	"address":"chennai-96"
     },
     {
     	"firstname":"tom",
     	"lastname":"jerry",
     	"phone":"99876588",
     	"email":"aaa@test.com",
     	"address":"asia-96"
     },
     {
     	"firstname":"mic",
     	"lastname":"john",
     	"phone":"993322888",
     	"email":"tdsf@test.com",
     	"address":"usa-96"
     }

];
// Going through forEach loop and destructuring only firstname from each item.  
people.forEach(({firstname})=>console.debug("firstname:",firstname));

var [,smith] = people;
function getEmail({email}){
	console.log("Email:",email);
}

getEmail(smith); // bbb@test.com
