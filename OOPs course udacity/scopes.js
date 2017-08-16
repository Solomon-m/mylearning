let getRandomWord = () =>{
  let things = ['Rock', 'Paper', 'Scissor','FULL','Ball'];
  return thing = things[Math.floor(Math.random()*things.length)];
}




var hero = getRandomWord()
var newSaga = function(){
	var foil = getRandomWord();
	var saga = function(){
		var deed = getRandomWord();
		console.warn(hero+deed+foil);
	};
	saga();
	saga();
};
newSaga();
newSaga();