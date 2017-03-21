
/** 
   - Rxjs is mainly programming  with event stream. 
   - Event stream is scequence of event happens over the time. 
   - An Array (eg: source) is available in memory. Where as an Event stream is Asychornous, it can be available over
     the time. 
*/   
console.clear();

var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13']; // This is an Array. All of its items are available in memory now. 

var result = source;
console.log("result :",result);

// Asychornously prints items every 400ms. 
var sourceE = Rx.Observable.interval(400).take(9).map(i=>['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]{
	console.log("what is i:",i);
});
sourceE.subscribe(x=>console.log(x)); 


// Adding only number from above array. 

var result = source
    .map(x => parseInt(x)) // takes source and does parseInt finally return new array.  [1, 1, NaN, 2, 3, 5, NaN, 8, 13]
    .filter(x => !isNaN(x)) // Here we are filter that array. We are take the item which is not an number. [1, 1, 2, 3, 5, 8, 13]
    .reduce((x, y) => { // Here we are adding every item. x is previous item and y is current item.  result: 33. 
        console.log("x::", x, ":y:", y);
        return x + y;
    });

    // x::1: y: 1
    // x::2: y: 2
    // x::4: y: 3
    // x::7: y: 5
    // x::12: y: 8
    // x::20: y: 13

    // result : 33

// Adding only number from above soureE which is Observable. it can occur over the time. 

 var result = sourceE
    .map(x => parseInt(x)) // takes source and does parseInt finally return new array.  [1, 1, NaN, 2, 3, 5, NaN, 8, 13]
    .filter(x => !isNaN(x)) // Here we are filter that array. We are take the item which is not an number. [1, 1, 2, 3, 5, 8, 13]
    .reduce((x, y) => { // Here we are adding every item. x is previous item and y is current item.  result: 33. 
        console.log("x::", x, ":y:", y);
        return x + y;
    });

result.subscribe(x=>console.log(x))
	// x::1: y: 1
	// x::2: y: 2
	// x::4: y: 3
	// x::7: y: 5
	// x::12: y: 8
	// x::20: y: 13

	//  33 sum of those numbers.
