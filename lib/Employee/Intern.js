// Import the Employee parent class.
const Employee = require("../Employee")

// Declare the Intern subclass.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
  getSchool() { return this.school }
  getRole() { return "Intern" }
}

// Export the Intern subclass.
module.exports = Intern
