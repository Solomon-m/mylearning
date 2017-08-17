// Reusing code. 


var amy = carlike({},1);
amy.move();

var carlike = function(obj,loc){
	obj.loc = loc;
	obj.move = function(){
       this.loc++;          // this will create an object everytime we use carLike function. 
	};						// so we can use obj.loc++ instead of this.loc++. Now obj points to closure obj. 
	return obj;
};

//Class

// var Car = function(loc){
// 	var obj = {loc:loc};
// 	// obj.move = function(){  // this been created everytime and consume memory. 
//  //       this.loc++;          
// 	// };						
// 	return obj;
// };

//     var move = function(){ 
//        this.loc++;          
// 	 };	

// var ben = Car(2);
// ben.move();

//--------

// var Car = function(loc){
// 	var obj = {loc:loc};
// 	extend(obj,methods);					
// 	return obj;
// };

//     var methods = {
//          move: function(){ 
//            this.loc++;          
// 	     }	
// 	 };
	 
// var ben = Car(2);
// ben.move();
// ------

// Instead of create another global object we can use .methods

// var Car = function(loc){
// 	var obj = {loc:loc};
// 	extend(obj,Car.methods);					
// 	return obj;
// };

//     Car.methods = {
//          move: function(){ 
//            this.loc++;          
// 	     }	
// 	 };
	 
// var ben = Car(2);
// ben.move();

// prototype

var Car = function(loc){
	var obj = Object.create(Car.prototype)
	 obj.loc = loc;
	return obj;
};

    Car.prototype.move = function(){
        this.loc++;
    };
	 
var ben = Car(2);
ben.move();


//---------

var Dog =function(){
	return {leg:4,bark:alert};
};

var fido = Dog();
console.log("::",fido instanceof Dog); // false. becuse Dog prototype will not be availble in fido. 




    