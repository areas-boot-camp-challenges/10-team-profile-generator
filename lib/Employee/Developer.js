// Import the Employee parent class.
const Employee = require("../Employee")

// Declare the Developer subclass.
class Developer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email)
    this.gitHub = gitHub
  }
  getRole() {
    return "Developer"
  }
  getIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`
  }
  getGitHubLabel() {
    return "GitHub"
  }
  getGitHub() {
    return `<a class="text-blue-500" href="https://github.com/${this.gitHub}">${this.gitHub}</a>`
  }
}

// Export the Developer subclass.
module.exports = Developer
