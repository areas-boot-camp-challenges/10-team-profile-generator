// Import the Developer subclass.
const Developer = require("../../lib/Employee/Developer")

// Create an object for the tests.
const developer = new Developer("Christian", "000000001", "me@areas.me", "christianareas")

// Test the Developer properties.
test("Create an object with the developer’s name, ID, email address, and GitHub username.", () => {
  expect( developer.name ).toEqual("Christian")
  expect( developer.id ).toEqual("000000001")
  expect( developer.email ).toEqual("me@areas.me")
  expect( developer.github ).toEqual("christianareas")
})

// Test the Developer methods.
test("Get the developer’s name, ID, email address, GitHub username, and role.", () => {
  expect( developer.getName() ).toEqual("Christian")
  expect( developer.getId() ).toEqual("000000001")
  expect( developer.getEmail() ).toEqual("me@areas.me")
  expect( developer.getGithub() ).toEqual("christianareas")
  expect( developer.getRole() ).toEqual("Developer")
})
