const Manager = require('../lib/Manager');
const manager = new Manager('robbie', '1234', 'robbie@gmail.com', '8046464666');

test('test if we can create constructor values for the manager object', () => {
    expect(manager.name).toBe('robbie');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('robbie@gmail.com');
    expect(manager.officeNumber).toBe('8044644666');
});