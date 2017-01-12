
/*
  - Shorthand properties allows you to push properties inside an object in es6.This is oppsite to Destructuring
    in ES6 where destructuring is used to get properties from object. 

  - Destructuring assignment syntax in javascript expression that  makes it possible to extract data 
  from arrays or objects into distinct variables.

*/
let firstname = "solomon";
let lastname = "mark";

let person = {firstname, lastname};
console.log("Person :",person);

let address = "Chennai";

let details = {person,address};

console.log("details:",details);


