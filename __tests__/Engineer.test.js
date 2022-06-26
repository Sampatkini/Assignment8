// using Engineer constructor 
import Engineer from '../lib/Intern';

// creating Engineer object  
test('creates an Engineer object', () => {
    const Engineer = new Engineer('jhonpaul', 90, 'jhon.paul@gmail.com', 'SFSU');
    
    expect(Engineer) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const Engineer = new Engineer('jhonpaul', 90, 'jhon.paul@gmail.com', 'SFSU');
    
    expect(Engineer.getSchool()).toEqual(expect.stringContaining(Engineer.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const Engineer = new Engineer('jhonpaul', 90, 'jhon.paul@gmail.com', 'SFSU');

    expect(Engineer.getRole()).toEqual("Engineer");
}); 