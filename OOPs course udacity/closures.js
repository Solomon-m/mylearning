let getRandomWord = () =>{
  let things = ['Rock', 'Paper', 'Scissor','FULL','Ball'];
  return thing = things[Math.floor(Math.random()*things.length)];
}




// global context (1) --> green
var sagas= [];
var hero = getRandomWord()
var newSaga = function(){ // inner context (2) --> red
	var foil = getRandomWord();
	sagas.push(function(){   // inner context (3) --> blue
        var deed= getRandomWord();
        console.warn(hero+deed+foil);
	}); // inner context (3) --> blue

}; // inner context (2) --> red
newSaga();
sagas[0]();
sagas[0]();
newSaga();
sagas[0]();
sagas[1]();
sagas[0]();



// global context (1) --> green