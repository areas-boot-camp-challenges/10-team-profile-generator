// Import the Employee parent class.
const Employee = require("../Employee")

// Declare the Developer subclass.
class Developer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }
  getGithub() { return this.github }
  getRole() { return "Developer" }
}

// Export the Developer subclass.
module.exports = Developer
