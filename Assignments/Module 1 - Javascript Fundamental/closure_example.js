var i = 10 // creating variable 

function myfun()
{
    var j = 20;
    console.log(i);  // closure can access parent or outside the variable inside 
    console.log(j);
}

myfun();