// Observable is collection that arrives over a time. 
var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
 button.addEventListener('click',handler);
 function handler(){
 	console.log("clicked!");
    button.removeEventListener('click',handler);
 };
 */

//Normal forEach loop
// try {
//     [1, 2, 3].forEach(function(element, index) {
//         // All data in this array is already there. 
//         // forEach works syschronously. 
//         console.log("elements:", element);
//     });
//     console.log("done");
// } catch (e) {
//     console.error("Error", e);
// }


// Observable  
// try {
//     var clicks = Observable.fromEvent(button, 'click');
//     // With Observable forEach executes Asychronously.
//     // This code isnt going to execute untill we click button. 
//     clicks.forEach(function(item, index) { 
//         console.log("button clicked...!");
//     });
//     console.log("done..!"); // This code will execute immediately.
//     // When a error occurs following catch block will not execute. 
// } catch (e) {
//     console.error("Error:", e);
// }

// In case of forEach in Observable it gives 3 callback function onNext,onError and onCompleted.
var clicks = Observable.fromEvent(button, 'click');

var subscription = clicks.forEach(
    function onNext(e) {
        // If there is any element in observable collection onNext will execute.
        console.log("onNext function::", e);
        subscription.dispose(); // removing listener from click event. 
    },
    function onError(error) {
        //If any asychronous error that will be piped here. 
        console.error("onError:", error);
    },
    function onCompleted() {
        console.log("onCompleted: arguments:", arguments);
    });