
var gold = {a:1};
console.log(gold.a);
console.log(gold.z) // undefined. 

var blue = extend({},gold); // not native js function. 
blue.b = 2;
console.log(blue.a);//1
console.log(blue.b); // 2
console.log(blue.z) // undefined. 

var rose = Object.create(gold);
rose.b = 2;
console.log(rose.a); // 1

// if is not available in rose Interpreter follow the object chain and looks up in gold object. 

// rose --> gold --> toString()