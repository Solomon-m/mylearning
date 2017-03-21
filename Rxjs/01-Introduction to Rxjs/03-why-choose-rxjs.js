
// It allows you to specify the dynamic behaviour of a value completely
// at the time of declaration. 

var streamA = Rx.Observable.of(3, 4);
var streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b));