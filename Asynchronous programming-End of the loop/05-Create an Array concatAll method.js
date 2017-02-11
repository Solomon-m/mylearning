var exchanges = [
    [{
        symbol: 'ABC',
        price: 120.99,
        volume: 123
    }, {
        symbol: 'Spark',
        price: 99.99,
        volume: 3
    }, {
        symbol: 'Fat Chance',
        price: 16.99,
        volume: 20
    }],
    [{
        symbol: 'xyz',
        price: 12.99,
        volume: 123
    }, {
        symbol: 'sdf',
        price: 199.99,
        volume: 3
    }, {
        symbol: 'jdfdfj',
        price: 160.99,
        volume: 20
    }]

];

exchanges.forEach( function(exchange, index) {
	exchange.forEach( function(stock, index) {
		console.log("Stocks:",JSON.stringify(stock));
	});
});

// Concat not available in Array, we are adding it.
Array.prototype.concatAll = function(){
   var results = [];
   this.forEach(function(subArray, index) {
      subArray.forEach( function(item, index) {
      	results.push(item);
      });
   });
   return results;
};
exchanges.concatAll();
// concat all array and returns new array.

var stocks = exchanges.concatAll(); // give new array

  stocks.forEach(function(stock, index) {
  	 console.log(":::",JSON.stringify(stock));
  });


