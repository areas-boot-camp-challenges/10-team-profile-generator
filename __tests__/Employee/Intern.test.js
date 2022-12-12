// Import the Intern subclass.
const Intern = require("../../lib/Employee/Intern")

// Create an object for the tests.
const intern = new Intern("Christian", "000000001", "me@areas.me", "UC Berkeley")

// Test the Intern properties.
test("Create an object with the intern’s name, ID, email address, and school.", () => {
  expect( intern.name ).toEqual("Christian")
  expect( intern.id ).toEqual("000000001")
  expect( intern.email ).toEqual("me@areas.me")
  expect( intern.school ).toEqual("UC Berkeley")
})

// Test the Intern methods.
test("Get the intern’s name, ID, email address, school, and role.", () => {
  expect( intern.getName() ).toEqual("Christian")
  expect( intern.getId() ).toEqual("000000001")
  expect( intern.getEmail() ).toEqual("me@areas.me")
  expect( intern.getSchool() ).toEqual("UC Berkeley")
  expect( intern.getRole() ).toEqual("Intern")
})
