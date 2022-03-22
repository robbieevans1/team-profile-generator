
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('robbie', '1231', 'robbie@gmail.com', 'evansrb');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('robbie');
    expect(engineer.id).toBe('1231');
    expect(engineer.email).toBe('robbie@gmail.com');
    expect(engineer.githubUsername).toBe('evansrb');
});