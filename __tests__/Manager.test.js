// using Manager constructor 
const Manager=require ("../lib/Manager")

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('samapatkini', 90, 'sampat.kini@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('sampatkini', 90, 'sampat.kini@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 