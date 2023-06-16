const subject = ["C","C++","Java"];

const myfav = []; // new array 

subject.forEach(function(item){
    myfav.push(item);
    console.log(item);
})

console.log(myfav);