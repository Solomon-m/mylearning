var stocks = [
{symbol:'ABC',price:120.99,volume:123},
{symbol:'Spark',price:99.99,volume:3},
{symbol:'Fat Chance',price:16.99,volume:20}
];

// Both map and filter dont change the array the create new array. 

var filteredStockSymbols =
    stocks.filter(function(stock) { // predicate function
        return stock.price >= 100; // if true it returns that item.
    }).
map(function(stock) { // takes value and transforms into new value.
    return stock.symbol;
})

filteredStockSymbols.forEach(function(symbol, index) {
    // statements
    console.log("symbol:", symbol);
});