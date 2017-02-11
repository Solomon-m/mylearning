var data = [
{symbol:'ABC',price:120.99,volume:123},
{symbol:'Spark',price:99.99,volume:3},
{symbol:'Fat Chance',price:16.99,volume:20}
];
function getStocksymbols (stocks){
	return stocks.map(function(stock){
       return stock.symbol;
	})
  // var symbols = [],counter,stock;
  // stocks.forEach(function(stock, index, sourceArray) {
  	
  // 	symbols.push(stock.symbol);
  // });
  // return symbols;
}
// We are overriding map function which already available in Array. 
// Map function apply some tranformation to an and gets a new array.  
// without the following function getStockssymbols function will return the same result. 

Array.prototype.map = function(projection){
  
   var results = [];
   this.forEach( function(item, index) {
   	results.push(projection(item));
   	
   });
   return results;
};


console.log(":::getStocksymbols:",getStocksymbols(data));