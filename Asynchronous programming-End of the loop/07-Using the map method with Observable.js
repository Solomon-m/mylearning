// When we map over an array we will get an array
// When we filter or concatAll on an array we will get array.

// In case of observable, if we map over an Observable we will be getting Observable. 

var Observable = Rx.Observable;

var button = document.getElementById('button');

// In case of forEach in Observable it gives 3 callback function onNext,onError and onCompleted.
var clicks = Observable.fromEvent(button, 'click');

// points is an Observable. 
// when we map over an observable we get observable. When we filter observable we get observable and soon on and so forth.
var points = clicks.map(function(e){
    return {x:e.clientX,y:e.clientY};
}) 

/*
-  When we do forEach over observable, under the hood it calls addEventListener. 
-  Observable are lazy. if we comment out the below code it will not call addEventListener 
   for button unless we call forEach on that observable.
-  This following code ( Observable.fromEvent(button, 'click') ) promises that when you call forEach on 
   it, it will call addEventListener 
-  When we map over clicks it creates Observable (points). Again when we map over points observable it 
   maps over underlying observable (click) and then when data arrives it transforms in map's projection
   function.  
*/
var subscription =
    points.forEach(
    function onNext(e) {
        // If there is any element in observable collection onNext will execute.
        console.log("onNext function::", e);
        // Here we are unsubsribing from an event. 
        // removing listener from click event.
        subscription.dispose();  
    },
    function onError(error) {
        //If any asychronous error that will be piped here. 
        console.error("onError:", error);
    },
    function onCompleted() {
        console.log("onCompleted: arguments:", arguments);
    });