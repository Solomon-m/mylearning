
var zed = new Car(1);
zed.move();

var amy = new Van(10);
amy.move();
amy.grab();

// Super Class.
var Car = function(){
	this.loc = loc;
};
Car.prototype.move = function(){
	this.loc++;
};

// super class ends. 
var Van = function(loc){
	Car.call(this,loc);
};

Van.prototype = Object.create(Car.prototype); // correct. 
Van.prototype.constructor = Van;
Van.prototype.grab = function(){
	//some codes
};
Van.prototype = Object.create(Car) // common mistake. we must not create object to super constructor. 
Van.prototype = new Car(); // mistake and not advisable. 

