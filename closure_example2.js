function OuterFunction()
{
    var n1 = 10;

    function innerFunction()
    {
        var n2 = 20;
        console.log("n1 = "+n1);
        
    }
    
    innerFunction();
    console.log("n2 = "+n2);
}

OuterFunction();