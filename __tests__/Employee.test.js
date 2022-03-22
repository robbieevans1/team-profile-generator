const Employee = require("../lib/Employee");

test('creates an employee object', () => {
  const employee = new Employee('name', 'id', 'email');

  expect(employee.name).toBe('Robbie');
  expect(employee.id).toBe("98723457");
  expect(employee.email).toBe('rob@gmail.com');
});

