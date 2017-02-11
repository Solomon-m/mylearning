// Unlike map function filter function apply some filer in an array and returns only match items in that array. 

function getStocksOver(stocks,minPrice){

   return stocks.filter(function(stock){
      return stock.price >= minPrice;
   });
  // var results = []; // create a new array an returns it. 
  // stocks.forEach( function(stock, index) {
  // 	  if(stock.price >= minPrice){
  // 	  	results.push(stock);
  // 	  }
  // });
  // return results;
} 

// Overriding filter function from Array. 
// Without this function above code will give same result. 
Array.prototype.filter = function(predicate){
   // predicate function accept a value and returns true or flase.
   var results =[];
   this.forEach( function(item, index) {
   	// statements
   	if(predicate(item)){
   		results.push(item)
   	}
   }); 
   return results;
};


var data = [
{symbol:'ABC',price:120.99,volume:123},
{symbol:'Spark',price:99.99,volume:3},
{symbol:'Fat Chance',price:16.99,volume:20}
];
console.log(getStocksOver(data,100))
