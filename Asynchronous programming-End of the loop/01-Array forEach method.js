

// With forloop:
function getStocksymbols(stocks) {

    var symbols = [],
        counter, stock;

    for (counter = 0; counter < stocks.length; counter++) {
        stock = stocks[counter];
        symbols.push(stock.symbol);

    }
    return symbols;
}



var data = [
{symbol:'ABC',price:120.99,volume:123},
{symbol:'Spark',price:99.99,volume:3},
{symbol:'Fat Chance',price:16.99,volume:20}
];

console.log(":::getStocksymbols:", getStocksymbols(data));


// With forEach loop:
// ForEach loop works asychronously. 
// forEach accepts a closure and pass in the item to closure.

function getStocksymbols(stocks) {
    var symbols = [],
        counter, stock;
    stocks.forEach(function(stock, index, sourceArray) {
        //console.log("item:",stock); // each item in array
        //console.log("index:",index); // index 
        // console.log("sourceArray:",sourceArray); // sourceArray.
        symbols.push(stock.symbol);
    });
    return symbols;
}



