const a = 10;
a = 20; 
// const variable are read-only variable.
//like let const variable also block scope.
// const varible are constant. we can change that once we declare. 
console.log("a :",a);

if(true){
	const foo = 'bar';
	//like let const variable also block scope. 
}

console.log("foo:",foo); // foo is undefiend. 

const person = {
 name:'solomon'
}

person.address = "chennai" // possible 
person.name = "anbu"; // changing also possible 


// but we can't change the structure of person since its const. 

person = {} // will throw error.