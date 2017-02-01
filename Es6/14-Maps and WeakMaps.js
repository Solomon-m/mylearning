/* Map */

// Map obj are key value pairs. 
// object will have default keys like prototype whether user add them or not. 
// In object key should be string where in map it can be anything. 
// Map have some method to impulate them. 

var mymap = new Map();

/*
set(),get(),size(),clear(),has()
*/

mymap.set("name","solomon");
mymap.set("address","chennai");
//mymap.get("name");
// mymap.has('name') //true
//mymap.has('age') // false
//mymap.size  // 2


/*
  Iterators:
  keys(),entries(),values()
*/

for(let [key,value] of mymap.entries()){
// entries() give the first item in the array. 
console.log("key:",key,"::value:",value)
}

/* WeakMap */
//- In weakmap no reference are held to key and this allow weakmap to automatic garbage collector. 
//    because this weakmap are enumerable. we cant iterator or weakmap

var mymap = new WeakMap();

var obj = {}
var func = function(){};

mymap.set(obj,"solomon"); // we can use iterator method 
mymap.set(func,"chennai");// we can use iterator method 

mymap.set("one","one") // it cant be string. 
