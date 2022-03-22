const Employee = require("../lib/Employee");
const employee = new Employee('Robbie', '12', 'robbie@gmail.com');

test('creates an employee object', () => {
  expect(employee.name).toBe('Robbie');
  expect(employee.id).toBe("12");
  expect(employee.email).toBe('robbie@gmail.com');
});

