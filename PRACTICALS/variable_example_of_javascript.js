function myExample(status)
{
    if(status == "Available")
    {
        var num1 = 10;
        let num2 = 20;
        const num3=100;
        console.log("inside the block = var "+num1);
        console.log("inside the block = let "+num2);
    }
    console.log("outside the block = var "+num1);
    //console.log("outside the block = let "+num2); // error for let
    // console.log("outside the block = const "+num3);  // error for const 
}

myExample("Available")