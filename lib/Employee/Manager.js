// Import the Employee parent class.
const Employee = require("../Employee")

// Declare the Manager subclass.
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email)
    this.office = office
  }
  getOffice() { return this.office }
  getRole() { return "Manager" }
}

// Export the Manager subclass.
module.exports = Manager
