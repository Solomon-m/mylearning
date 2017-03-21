    var button = document.querySelector('.button');
    var label = document.querySelector('h4');

    var clickStream = Rx.Observable.fromEvent(button, 'click');

    var doubleClickStream = clickStream
        .buffer(() => clickStream.debounce(250)) // we buffer all over the click and we stop buffering after 250 seconds. This buffer returns an array. 
        .map(arr => arr.length) // if this array has length we will filter. 
        .filter(len => len === 2); // if length is equal to 2 between 250 milliseconds, this filter will return the double click events. 

    doubleClickStream.subscribe(event => { // we are listening to doubleClickStream. 
        console.log("Double click...");
        label.textContent = 'double click';
    });

    doubleClickStream  
        .delay(1000) // after 1000 milliseconds delay we are removing label textContent.
        .subscribe(suggestion => {
            label.textContent = '-';
        });