class manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }

   getGithub(){
        return this.officeNumber;
   }
}