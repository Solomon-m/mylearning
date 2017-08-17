var Car = function(loc){
	var obj = {loc:loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj;
};

var amy = Car(1);
amy.move();
var ben = Car(10);
ben.move();


// Cop car and Van

// Super Class. 
var Car = function(loc){
	var obj = {loc:loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj;
};

//Sub-Class. 

var Van = function(){
	var obj = Car(loc);
	obj.grab = function(){
     // some code
	};
	return obj;
};

var Cop = function(loc){
	var obj = Car(log);
	obj.call = function(){
		//some code
	};
	return obj;
};