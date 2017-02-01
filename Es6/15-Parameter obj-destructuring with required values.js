function ajaxRequest({
	type = "get",
	url= 'http:google.com',
	data = {}
}){
   console.log(JSON.stringify(arguments))
}

ajaxRequest({"type":"post"})
//{"type":"post","url":"http:google.com","data":{}}

function requiredParameter(arg){
	throw new Error(`Missing parameter ${arg}`);
}




function ajaxRequest({
	type = "get",
	url= requiredParameter('url'), // valiading requiredParameter in function parameter object
	data = {}
}){
   console.log(JSON.stringify(arguments))
}

ajaxRequest({"type":"post"}) // this will through 'Missing parameter url'
