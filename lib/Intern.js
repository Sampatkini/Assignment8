const Employee = requre('./Employee.js')
module.exports=class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }

   school(){
        return this.school;
   }
}

