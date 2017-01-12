
var color = "red";
var speed = 10;
function go(){
	console.log("go function.");
}

//var car = {color:color,speed:speed}; // ES5 way.  
//var car = {color,speed};             // ES6 way. 
var car = {color,speed,go}; 

console.log(car.color);
console.log(car.speed);

car.go();


var car1 = {
	   color,
	   speed,
	   go1(){
	   	console.log("go1 function");
	   }
	};
car.go1()


var car2 = {
	   color,
	   speed,
	   ["go2"]:function(){
	   	console.log("go2 function");
	   }
	};
car.go2()


var drive = "go3";

var car3 = {
	   color,
	   speed,
	   [drive]:function(){
	   	console.log("go3 function");
	   }
	};
car.go3()



