const Employee = require('./Employee.js')
module.exports= class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }

   getGithub(){
        return this.officeNumber;
   }
}

