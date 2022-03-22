const Intern = require('../lib/Intern');
const intern = new Intern('robbie', '1235', 'robbie@gmail.com', 'Richmond');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('robbie');
    expect(intern.id).toBe('1235');
    expect(intern.email).toBe('robbie@gmail.com');
    expect(intern.school).toBe('Richmond');
});