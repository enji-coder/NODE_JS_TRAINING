Person = {
    fullname : function()
    {
       console.log(this.firstname + " "+this.lastname);
    }
}

Student1 = {
    firstname : "Anjali",
    lastname : "Patel",
}

Student2 = {
    firstname : "Shreya",
    lastname : "shah",
}

Person.fullname.call(Student1)
Person.fullname.call(Student2)