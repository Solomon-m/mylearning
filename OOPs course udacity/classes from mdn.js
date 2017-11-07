// class in js 
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes

// Class declarations. 
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Class Expressions. 

// unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};


// Prototype methods

class Rectangle{
   constructor(height,weight){
       this.height = height;
       this.weight = weight;
     }
   get area(){
      return this.calcArea();
    }
   calcArea(){
       return this.height * this.weight;
   }
};


// Static methods. 
// - static methods cannot be called with instance of class. 
// - classname.staticMethodname() 
class Point{
   constructor(x,y){
       this.x = x;
       this.y = y;
    }
   static distance(a,b){
       const dx = a.x - b.x; 
       const dy = a.y - b.y;
      return Math.hypot(dx,dy);
    
     }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

// Sub classing with extends

// super class
  class Animal {
      constructor() {
          this.name = name;
      }

      speak() {
          console.log("::" + this.name + "makes a noise");
      }
  }

  //sub class
  class Dog extends Animal {
      speak() {
          console.log("Dog:" + this.name + "barks");
      }
  }

  /////
  // Species pattern
  class MyArray extends Array {

      static get[Symbol.species]() {
          return Array;
      }

  }

  var tt = new MyArray(1, 2, 3, 4, 5)
  var mapped = tt.map(x => x * x);
  console.log(mapped instanceof MyArray); // false
  console.log(mapped instanceof Array); // true

  ///////
  // Super class calls with super

  class Cat {
      constructor(name) {
          this.name = name;
      }
      speak() {
          console.log("::" + this.name + " makes some noises.");
      }
  }

  class Lion extends Cat {
      speak() {
          super.speak();
          console.log("Lion:speak :" + this.name + " roars");
      }
  }
  let l = new Lion("solomon");
  l.speak();
  // solomon makes some noises. --> from super class (Cat)
  //Lion:speak :solomon roars --> from dervied class (Lion)

//============================================================
// class Declarations

///  step1

	class One {
		    constructor(one) {
		        this.one = one;
		    }

		    showDetails() {
		        console.warn("one :"+this.one);
		    }
		}

		var Two = class extends One {
		    constructor(two) {
		        super(two);
		        this.two = two;
		    }
		    showDetails() {
		        super.showDetails();
		        console.warn("two:" + this.two);
		    }

		}

	class Three extends Two {
	    constructor(three) {
	        super(three);
	        this.three = three;
	    }
       
	    showDetails() {
	        super.showDetails();
	        console.log("three :" + this.three);
	    }

	    static myStaticfunc(obj) {
	        obj.staticflag = true;
	        return obj;
	    }

	}

	/// step 2

	class One {
		    constructor(one) {
		        this.one = one;
		    }

		    showDetails() {
		        console.warn("one :"+this.one);
		    }
		}

		var Two = class extends One {
		    constructor(one,two) {
		        super(one);
		        this.two = two;
		    }
		    showDetails() {
		        super.showDetails();
		        console.warn("two:" + this.two);
		    }

		}

	class Three extends Two {
	    constructor(one,two,three) {
	        super(one,two);
	        this.three = three;
	    }
       
	    showDetails() {
	        super.showDetails();
	        console.log("three :" + this.three);
	    }

	    static myStaticfunc(obj) {
	        obj.staticflag = true;
	        return obj;
	    }

	}






