// Generators:
//reference https://ponyfoo.com/articles/es6-generators-in-depth and egghead videos. 
/*
  Generators are a new feature in ES6. You declare a generator function which returns generator
objects  that can then be iterated using any of Array.from(), [...obj], or for value of obj loops.
Generator functions allow you to declare a special kind of iterator. These iterators can suspend execution 
while retaining their context.
*/

function* generator () {
  yield 'f'
  yield 'o'
  yield 'o'
}

var genObj = generator();
// Array.from(genObj)
// [...genObj]
// genObj.next()  

// genObj is iteator. 

/*
  When you create a generator object you’ll get an iterator that uses the generator to produce its sequence.
 Whenever a yield expression is reached, that value is emitted by the iterator and function execution is suspended.
*/

function* test(){
  let one = yield "one";
  yield one +"two";
  yield "three";
}
let t = test()
t.next(); // you cant pass any value to new born generator. 
t.next("passing some value : ");  // you will get 'passing some value : two'.
t.next(); // three

function* multiplier (value) {
  yield value * 2
  yield value * 3
  yield value * 4
  yield value * 5
  yield value * 6
  yield value * 7
  yield value * 8
  yield value * 9
  yield value * 10
}

var multiply =  multiplier();
multiply.next();
/*
  If you’re confused as to why the '!' is printed even though there are no more yield expressions after it, that’s because g.next() doesn’t know that.
 The way it works is that each time its called, it executes the method until a yield expression is reached, emits its value and suspends execution.
 The next time g.next() is called, _execution is resumed _from where it left off (the last yield expression), until the next yield expression is reached.
 When no yield expression is reached, the generator returns { done: true }, signaling that the sequence has ended. 
 At this point, the console.log('!') statement has been already executed, though.

 It’s also worth noting that context is preserved across suspensions and resumptions. 
That means generators can be stateful. Generators are, in fact, the underlying implementation for async/await semantics coming in ES7.
*/


function genie (questions) { // genie takes a generator
  var g = questions() // 
  while (true) {
    let question = g.next()
    if (question.done) {
      break
    }
    console.log(question.value)
  }
}


// genie(function* questions () {
//   yield '[Me] Will ES6 die a painful death?'
//   yield '[Me] How youuu doing?'
// })

// Asynchornous call

function genie (questions) {
  var g = questions()
  pull() 

  function pull () {  // will work like next function after doing ajax call.
    let question = g.next()
    if (question.done) {
      return
    }
    ask(question.value, pull)
  }

  function ask (q, next) {
    //xhr('https://computer.genie/?q=' + encodeURIComponent(q), succesCB)
    $.ajax('http://ron-swanson-quotes.herokuapp.com/v2/quotes',succesCB);
    //http://ron-swanson-quotes.herokuapp.com/v2/quotes
    function succesCB (err, res, body) {
      if (err) {
        // we have to use g.throw function.
        //g.throw(err)
      }
      console.log(q)
      next()
    }
  }
}


// Usage of return in generators

function* numbers () {
  yield 1
  yield 2
  yield 3
}
var g = numbers()
console.log(g.next())
// <- { done: false, value: 1 }
console.log(g.return())
//console.log(g.return("test")) we can also return value using return. 
// <- { done: true }
console.log(g.next())
// <- { done: true }, as we know




