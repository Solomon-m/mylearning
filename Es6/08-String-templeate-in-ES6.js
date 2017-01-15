var salutation = "hello";
var firstname = "solomon";
var gretting = salutation+" "+ firstname;
console.log(gretting);

// String in ES6 can be manipulated by surronding by grave symbol (`)

var gretting1 = `${salutation},solomon`;
console.log(gretting1);

var gretting2 = `${salutation},mark ${firstname}`;
console.log(gretting2)


console.debug(`This is sample for string templating.`)
console.debug(`This 
               is
               example 
               for 
               string
               templating.`)


// We can do expression inside this grave string templates

var x = 1; var y = 2; 
var equation = `${x} + ${y} = ${x+y}`
console.log(equation);

var message = `It's ${new Date().getHours()} I'm hungry`;
console.log(message); // It's 19 I'm hungry

 function tag(strings,...values){
   //console.log(":",arguments);
   // i/p : var message1 = tag`It's ${new Date().getHours()} I'm hungry${new Date().getMinutes()} ${name} this is string after bastin ${name1}`;
   // o/p : [Array[5], 23, 23, "Bastin", "Bastin Mohan"] 
   /*
   * In function's 'arguments' we will be getting all the strings [` this is strings `] as 1st parameter
   *  and all the variables [ ${ } ) ] in following indexes. 
   */ 


   //console.log("strings:",strings);
   //console.log("values:",values);
   //i/p : var message1 = tag`It's ${new Date().getHours()} I'm hungry${new Date().getMinutes()} ${name} this is string after bastin ${name1}`;
   // strings : ["It's ", " I'm hungry", " ", " this is string after bastin ", "", raw: Array[5]]
   // values : [23, 25, "Bastin", "Bastin Mohan"]

 }

var message1 = tag`It's ${new Date().getHours()} I'm hungry`;