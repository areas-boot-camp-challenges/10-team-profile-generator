// Import the Employee parent class.
const Employee = require("../lib/Employee")

// Create an object for the tests.
const employee = new Employee("Christian", "000000001", "me@areas.me")

// Test the Employee properties.
test("Create an object with the employee’s name, ID, and email address.", () => {
  expect( employee.name ).toEqual("Christian")
  expect( employee.id ).toEqual("000000001")
  expect( employee.email ).toEqual("me@areas.me")
})

// Test the Employee methods.
test("Get the employee’s name, ID, email address, and role.", () => {
  expect( employee.getName() ).toEqual("Christian")
  expect( employee.getId() ).toEqual("000000001")
  expect( employee.getEmail() ).toEqual("me@areas.me")
  expect( employee.getRole() ).toEqual("Employee")
})
