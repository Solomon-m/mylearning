const Observable = Rx.Observable;

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = Observable.fromEvent(startButton, 'click'); // start 
const interval$ = Observable.interval(1000); // interval 
const stop$ = Observable.fromEvent(stopButton, 'click'); // stop button. 

const intervalThatStops$ = interval$
    .takeUntil(stop$);

start$
    .switchMapTo(intervalThatStops$)
    .subscribe((x)=> console.log(x));


 // start when start button clicked and switch to interval stream and it will execute untill stop button click happens. 
   






