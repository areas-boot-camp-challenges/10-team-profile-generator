// Import the Manager subclass.
const Manager = require("../../lib/Employee/Manager")

// Create an object for the tests.
const manager = new Manager("Christian", "000000001", "me@areas.me", "1001")

// Test the Manager properties.
test("Create an object with the manager’s name, ID, email address, and office number.", () => {
  expect( manager.name ).toEqual("Christian")
  expect( manager.id ).toEqual("000000001")
  expect( manager.email ).toEqual("me@areas.me")
  expect( manager.office ).toEqual("1001")
})

// Test the Manager methods.
test("Get the manager’s name, ID, email address, office number, and role.", () => {
  expect( manager.getName() ).toEqual("Christian")
  expect( manager.getId() ).toEqual("000000001")
  expect( manager.getEmail() ).toEqual("me@areas.me")
  expect( manager.getOffice() ).toEqual("1001")
  expect( manager.getRole() ).toEqual("Manager")
})
