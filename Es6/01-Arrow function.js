var greeting = function(message, name) { // Es5 function
    return message + " " + name;
}


// Arrow function
var greeting1 = (message, name) => { // es6 function
    return message + " " + name;
}

var greeting2 = (message, name) => message + " " + name;
// dont need return key word message with name will automatically return 

var greeting3 = message => "Hello";

var deliverBoy = {
	name :"solomon",
	handleMessage: function(message,handler){
		// handler is callback function.
		handler(message);
	},
	receive:function(){
		// 1
		//var self = this;
		// this.handleMessage('Hello',function(message){
		// 	console.log(message+that.name);
		// })

        //2 
        // this.handleMessage('Hello',function(message){
		// 	console.log(message+this.name);
		// }.bind(this))
        
        //3 Arrow function
        // this.handleMessage('Hello',=>(message){
		// 	console.log(message+this.name);
		// })
        
        // this will be available by default in es6 (lexical scope)
        
        this.handleMessage('Hello', message => console.log(message+this.name))
         // one line arrow function 
	}
}

deliverBoy.receive();

