// Requirements:
// https://courses.bootcampspot.com/courses/2188/assignments/38645?module_item_id=748634
//
// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles
//
// GIVEN a command-line application that accepts user input:
// [ ] WHEN I am prompted for my team members and their information
//     THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// [ ] WHEN I click on an email address in the HTML
//     THEN my default email program opens and populates the TO field of the email with the address
// [ ] WHEN I click on the GitHub username
//     THEN that GitHub profile opens in a new tab
// [x] WHEN I start the application
//     THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// [x] WHEN I enter the team manager’s name, employee ID, email address, and office number
//     THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// [x] WHEN I select the engineer option
//     THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// [x] WHEN I select the intern option
//     THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// [ ] WHEN I decide to finish building my team
//     THEN I exit the application, and the HTML is generated
//
// Todos:
// [ ] Add unit tests.
// [ ] Add classes and sub-classes.
// [ ] Add HTML template.
// [ ] Add code to use HTML template to generate final HTML file.
// [ ] Refactor the code so there‘s only one prompt (not counting the continue-or-finish prompt) and "manager", "developer", or "intern" is passed as a variable.

// Import the Inquirer and File System modules.
const inquire = require("inquirer")
const fs = require("fs")

// Declare the manager prompts.
const managerPrompts = [
  { message: "Enter the manager’s name.",
    type:    "input",
    name:    "manager-name",
    validate(answer) {
      if (!answer) { return "Please enter the manager’s name." }
      else { return true }
    },
  },
  { message: "Enter the manager’s employee ID.",
    type:    "input",
    name:    "manager-id",
    validate(answer) {
      if (!answer) { return "Please enter the manager’s employee ID." }
      else { return true }
    },
  },
  { message: "Enter the manager’s email address.",
    type:    "input",
    name:    "manager-email",
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(answer)) { return "Please enter a valid email address." }
      else { return true }
    },
  },
  { message: "Enter the manager’s office number.",
    type:    "input",
    name:    "manager-office",
    validate(answer) {
      if (!answer) { return "Please enter the manager’s office number." }
      else { return true }
    },
  },
]

// Start the app and prompt the user for the manager’s information.
function startTheApp() {
  inquire
  .prompt(managerPrompts)
  .then((answers) => {
    console.log(answers) // **
    promptToContinueOrFinish()
  })
}

// Declare the continue or finish prompt.
const continueOrFinishPrompt = [
  { message: "Choose a role to add to the team. Or if you’re done, choose “Finish.”",
    type:    "list",
    choices: ["Developer", "Intern", "Finish"],
    name:    "role",
  },
]

// Prompt the user to continue or finish.
function promptToContinueOrFinish() {
  inquire
  .prompt(continueOrFinishPrompt)
  .then((answer) => {
    console.log(answer) // **
    if (answer.role === "Developer") {
      promptForDeveloperInformation()
    } else if (answer.role === "Intern") {
      promptForInternInformation()
    } else if (answer.role === "Finish") {
      console.log("Done!") // **
    }
  })
}

// Declare the developer prompts.
const developerPrompts = [
  { message: "Enter the developer’s name.",
    type:    "input",
    name:    "developer-name",
    validate(answer) {
      if (!answer) { return "Please enter the developer’s name." }
      else { return true }
    },
  },
  { message: "Enter the developer’s employee ID.",
    type:    "input",
    name:    "developer-id",
    validate(answer) {
      if (!answer) { return "Please enter the developer’s employee ID." }
      else { return true }
    },
  },
  { message: "Enter the developer’s email address.",
    type:    "input",
    name:    "developer-email",
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(answer)) { return "Please enter a valid email address." }
      else { return true }
    },
  },
  { message: "Enter the developer’s GitHub username.",
    type:    "input",
    name:    "developer-github",
    validate(answer) {
      if (!answer) { return "Please enter the developer’s GitHub username." }
      else { return true }
    },
  },
]

// Prompt the user for the developer’s information.
function promptForDeveloperInformation() {
  inquire
  .prompt(developerPrompts)
  .then((answers) => {
    console.log(answers) // **
    promptToContinueOrFinish()
  })
}

// Declare the intern prompts.
const internPrompts = [
  { message: "Enter the intern’s name.",
    type:    "input",
    name:    "intern-name",
    validate(answer) {
      if (!answer) { return "Please enter the intern’s name." }
      else { return true }
    },
  },
  { message: "Enter the intern’s employee ID.",
    type:    "input",
    name:    "intern-id",
    validate(answer) {
      if (!answer) { return "Please enter the intern’s employee ID." }
      else { return true }
    },
  },
  { message: "Enter the intern’s email address.",
    type:    "input",
    name:    "intern-email",
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(answer)) { return "Please enter a valid email address." }
      else { return true }
    },
  },
  { message: "Enter the intern’s school.",
    type:    "input",
    name:    "intern-school",
    validate(answer) {
      if (!answer) { return "Please enter the intern’s school." }
      else { return true }
    },
  },
]

// Prompt the user for the intern’s information.
function promptForInternInformation() {
  inquire
  .prompt(internPrompts)
  .then((answers) => {
    console.log(answers) // **
    promptToContinueOrFinish()
  })
}

startTheApp()
