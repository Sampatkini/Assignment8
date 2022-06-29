const Engineer=require('../lib/Engineer')
describe("engineer",()=>{
    test("testing to get corriect name",()=>{
        const exampal=new Engineer("sam",12,"sam@gmail.com","sam12");
        expect(exampal.getName()).toEqual("sam")

    })
    test("testing to get corriect id",()=>{
        const exampal=new Engineer("sam",12,"sam@gmail.com","sam12");
        expect(exampal.getId()).toEqual(12)
    })
    test("tseting to get corriect email",()=>{
        const exampal=new Engineer("sam",12,"sam@gmail.com","sam12");
        expect(exampal.getEmail()).toEqual("sam@gmail.com");
    })
    test("testing to get corriect github",()=>{
        const exampal=new Engineer("sam",12,"sam@gmail.com","sam12");
        expect(exampal.getGithub()).toEqual("sam12");
    })
})