var pr = new Promise((resolve,reject)=>{
  throw new Error("user defined error!");
 // promise catch will execute no matter whereever the execption occurs in promise
  if(false){
    resolve("sucess ..!")
  }else{
    reject("I am rejecting it. !")
  }



});

pr.then((data) =>{
    console.log("sucess:",data);   
})
.catch((error)=>{
    console.log("Error::",error.message);
});

// pr.catch((error) =>{
//   console.log("Error:",error);
// });