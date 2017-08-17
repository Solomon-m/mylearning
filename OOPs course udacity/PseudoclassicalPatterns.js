
	var Car = function(loc) {
	    var obj = Object.create(Car.prototype)
	    obj.loc = loc;
	    return obj;
	};

	Car.prototype.move = function() {
	    this.loc++;
	};

	var ben = Car(2);
	ben.move();


	// With new key word. 



	var Car = function(loc) {
		// var obj = Object.create(Car.prototype) --> Interpreter itself add this code 
		// like this --> this = Object.create(Car.prototype);
	    this.loc = loc;
	    // and also it returns  
	    // return this;
	};

	Car.prototype.move = function() {
	    this.loc++;
	};

	var ben = new Car(2);
	ben.move();