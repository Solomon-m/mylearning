// this is an identifer that gets a value bound to it. Much like a varible. 


var fn = function(a,b){
   console.log(this);
};


var obj = {
	fn:function(a,b){
       console.log(this); // --> 
	}
};

  obj.fn(10,10);
//(this)obj.fn(10,10);

// var func = function(one,two){
// 	console.warn(one,two);
// };
// var red = {}, green = {}, blue ={};

var func = function(one,two){
	console.warn(this,one,two);
};
var r = {}, g = {}, b ={};
r.method = func; // specifically points to red scope. 

func(r,g); // now this points to global scope. 

// By using .call  function we can override the default binding to global. 
func.call(b,g,b); // now this will be bound to the value which we pass via call function's first parameter. here, its r.

r.method.call(b,r,g);
// Use of .call override .method call rules. So this will be bound to blue(b).

setTimeout(func,1000); // func 

// deconstructing setTimeout function
var setTimeout = function(callback,milliseconds){
	waitForSomehow(milliseconds);
	callback(); // callback will be func and its global. 
};   

setTimeout(r.method,1000); // here also r.method will be global func.  

setTimeout(function(){
	r.method(g,b);
},1000); 

// new r.method(g,b) --> a brand new object is being created. 


