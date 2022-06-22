class intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }

   school(){
        return this.school;
   }
}