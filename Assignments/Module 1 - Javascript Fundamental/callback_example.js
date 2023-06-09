function myFun()
{
    console.log("Hello welcome to node.js");
}
function addition(num1,num2,callback)
{
    console.log(num1 + num2);   
    callback();
}

addition(10,20,myFun)

addition(2,3,function(){
    console.log("hey i am Anonymous function ")
})
