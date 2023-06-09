Person = {
    fullname : function(subjects) {
        console.log(this.firstname +" "+ this.lastname +" "+subjects)
    }
}

Stu1 = {
    firstname : "Anjali",
    lastname : "Patel",
}

Person.fullname.apply(Stu1,["flutter","Python"]);