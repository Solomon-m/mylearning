const Observable = Rx.Observable;

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

const start$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(1000);
const stop$ = Observable.fromEvent(stopButton, 'click');

const intervalThatStops$ = interval$
    .takeUntil(stop$);

start$
    .switchMapTo(intervalThatStops$)
    .scan((acc)=> {
    	console.log("count in accumaltor func:",acc);
    	// This is accumaltor function which takes some value 
      return {count: acc.count + 1}
     },{count: 0})
    .subscribe((x)=> console.log(x));






