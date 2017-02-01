function hello(){
	console.log("arguments:",arguments) // array like argument
	// argument is a like parameter but it does not have methods available in array prototype 
	console.log("arguments:",arguments.length) // 3
	arguments.array.forEach( function(element, index,arrayParameter) {
		console.log("element :",element,"::index:",index,":arrayParameter:",arrayParameter);
	});
}

hello(1,2,3)


function store(){
	var aisle={
		"fruit":[],
		"vegetable":[]
	}
	return{
		add:function(category){
        var items = [].splice.call(arguments,1);
        console.log("items:",items);
        items.forEach( function(value, index,array) {
        	aisle[category].push(value);
        });
		},
		aisle:aisle
	}
}

// var somedata = new store()
// somedata.add('fruit','apple')
// somedata.add('vegetable','carrot')



function store(){
	var aisle={
		"fruit":[],
		"vegetable":[]
	}
	return{
		add:function(category,...items){  // rest parameter 
        //var items = [].splice.call(arguments,1);
       // console.log("items:",items);
        items.forEach( function(value, index,array) {
        	aisle[category].push(value);
        });
		},
		aisle:aisle
	}
}


var somedata = new store();
somedata.add('fruit','apple');
somedata.add('vegetable','carrot');
console.log("somedata ::",somedata.aisle)