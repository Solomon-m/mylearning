function greet(greeting,name){
    console.log(greeting+ "::" name);
}
//greet('Hello', 'solomon');

function greet1(greeting,name ='solomon'){
	// if you are not passing name it will take solomon. 
	console.log(greeting," ::",name);
}

greet1('hello');


function receive(complete){
	complete();
}

function receive(cb = function(){console.log("This is defalut function...!") }){
	// passing a function (callback func) as default value to this function.
	// we have to call receive function with callback function. if we are not providing cb func it will take default function. 
	cb();
}

function receive(cb = ()=> console.log("This is default callback function...!")){
	cb();
}

// wired way //
let receive = (cb = ()=> console.log("This is default callback function.")) => cb();