// Requirements:
// https://courses.bootcampspot.com/courses/2188/assignments/38645?module_item_id=748634
//
// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles
//
// GIVEN a command-line application that accepts user input:
// [x] WHEN I am prompted for my team members and their information
//     THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// [x] WHEN I click on an email address in the HTML
//     THEN my default email program opens and populates the TO field of the email with the address
// [x] WHEN I click on the GitHub username
//     THEN that GitHub profile opens in a new tab
// [x] WHEN I start the application
//     THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// [x] WHEN I enter the team manager’s name, employee ID, email address, and office number
//     THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// [x] WHEN I select the engineer option
//     THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// [x] WHEN I select the intern option
//     THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// [x] WHEN I decide to finish building my team
//     THEN I exit the application, and the HTML is generated

// Import the Inquirer and File System modules.
const inquire = require("inquirer")
const fs = require("fs")

// Import the Manager, Developer, and Intern subclasses.
const Manager = require("./lib/Employee/Manager")
const Developer = require("./lib/Employee/Developer")
const Intern = require("./lib/Employee/Intern")

// Generate prompts specific to a given role.
function generatePrompts(role) {
  let uniquePrompt
  let uniquePromptName
  if (role === "Manager") {
    uniquePrompt = "office number"
    uniquePromptName = "office"
  } else if (role === "Developer") {
    uniquePrompt = "GitHub username"
    uniquePromptName = "github"
  } else if (role === "Intern") {
    uniquePrompt = "school"
    uniquePromptName = "school"
  }
  role = role.toLowerCase()
  const prompts = [
    { message: `Enter the ${role}’s name.`,
      type:    "input",
      name:    "name",
      validate(answer) {
        if (!answer) { return `Please enter the ${role}’s name.` }
        else { return true }
      },
    },
    { message: `Enter the ${role}’s employee ID.`,
      type:    "input",
      name:    "id",
      validate(answer) {
        if (!answer) { return `Please enter the ${role}’s employee ID.` }
        else { return true }
      },
    },
    { message: `Enter the ${role}’s email address.`,
      type:    "input",
      name:    "email",
      validate(answer) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(answer)) { return `Please enter a valid email address.`}
        else { return true }
      },
    },
    { message: `Enter the ${role}’s ${uniquePrompt}.`,
      type:    "input",
      name:    `${uniquePromptName}`,
      validate(answer) {
        if (!answer) { return `Please enter the ${role}’s ${uniquePrompt}.` }
        else { return true }
      },
    },
  ]
  return prompts
}

// Declare the continue or finish prompt.
const continueOrFinishPrompt = [
  { message: "Choose a role to add to the team. Or if you’re done, choose “Finish.”",
    type:    "list",
    choices: ["Developer", "Intern", "Finish"],
    name:    "role",
  },
]

// Declare an object that stores HTML for the final index.html file.
const html = {
  managersHTML: [],
  developersHTML: [],
  internsHTML: [],
}

// Start the app and prompt the user for the manager’s information.
function startAndPromptForManagerInformation() {
  inquire.prompt(generatePrompts("Manager"))
  .then((answers) => {
    // Use the Manager subclass to create a manager object.
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    // Read the employee.html template file.
    let managerHTML = fs.readFileSync("./src/employee.html", "utf8")
    // Replace all placeholders with the user’s answers and appropriate values.
    for (const [key, value] of Object.entries(manager)) { managerHTML = managerHTML.replaceAll(`{${key}}`, value) }
    managerHTML = managerHTML.replace("{role}", manager.getRole())
    managerHTML = managerHTML.replace("{icon}", manager.getIcon())
    managerHTML = managerHTML.replace("{unique-answer-label}", manager.getOfficeLabel())
    managerHTML = managerHTML.replace("{unique-answer}", manager.getOffice())
    // Push the manager HTML to the html object.
    html.managersHTML.push(managerHTML)
    // Print a success message.
    console.log("Great! On to the next step:")
    // Pass the updated html object to the function that prompts the user to continue or finish, and call the function.
    promptToContinueOrFinish(html)
  })
}

// Prompt the user to continue or finish.
function promptToContinueOrFinish(html) {
  inquire.prompt(continueOrFinishPrompt)
  .then((answer) => {
    if (answer.role === "Developer") { promptForDeveloperInformation() }
    else if (answer.role === "Intern") { promptForInternInformation() }
    else if (answer.role === "Finish") {
      // Read the index.html template file.
      let finalHTML = fs.readFileSync("./src/index.html", "utf8")
      // Replace all placeholders with the HTML in the html object.
      finalHTML = finalHTML.replace("{managers}", html.managersHTML.join("\n"))
      finalHTML = finalHTML.replace("{developers}", html.developersHTML.join("\n"))
      finalHTML = finalHTML.replace("{interns}", html.internsHTML.join("\n"))
      // Write the new index.html file to the dist folder.
      fs.writeFileSync("./dist/index.html", finalHTML)
      // Print a thank-you message.
      console.log("Thank you for using the Team Profile Generator. Your HTML and CSS file are in the dist/ folder!")
    }
  })
}

// Prompt the user for the developer’s information.
function promptForDeveloperInformation() {
  inquire.prompt(generatePrompts("Developer"))
  .then((answers) => {
    // Use the Developer subclass to create a developer object.
    const developer = new Developer(answers.name, answers.id, answers.email, answers.github)
    // Read the employee.html template file.
    let developerHTML = fs.readFileSync("./src/employee.html", "utf8")
    // Replace all placeholders with the user’s answers and appropriate values.
    for (const [key, value] of Object.entries(developer)) { developerHTML = developerHTML.replaceAll(`{${key}}`, value) }
    developerHTML = developerHTML.replace("{role}", developer.getRole())
    developerHTML = developerHTML.replace("{icon}", developer.getIcon())
    developerHTML = developerHTML.replace("{unique-answer-label}", developer.getGitHubLabel())
    developerHTML = developerHTML.replace("{unique-answer}", developer.getGitHub())
    // Push the developer HTML to the html object.
    html.developersHTML.push(developerHTML)
    // Print a brief summary and success message.
    console.log(`Total developers: ${html.managersHTML.length}. Total interns: ${html.internsHTML.length}.`)
    console.log("Great! On to the next step:")
    // Pass the updated html object to the function that prompts the user to continue or finish, and call the function.
    promptToContinueOrFinish(html)
  })
}

// Prompt the user for the intern’s information.
function promptForInternInformation() {
  inquire.prompt(generatePrompts("Intern"))
  .then((answers) => {
    // Use the Intern subclass to create a intern object.
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    // Read the employee.html template file.
    let internHTML = fs.readFileSync("./src/employee.html", "utf8")
    // Replace all placeholders with the user’s answers and appropriate values.
    for (const [key, value] of Object.entries(intern)) { internHTML = internHTML.replaceAll(`{${key}}`, value) }
    internHTML = internHTML.replace("{role}", intern.getRole())
    internHTML = internHTML.replace("{icon}", intern.getIcon())
    internHTML = internHTML.replace("{unique-answer-label}", intern.getSchoolLabel())
    internHTML = internHTML.replace("{unique-answer}", intern.getSchool())
    // Push the intern HTML to the html object.
    html.internsHTML.push(internHTML)
    // Print a brief summary and success message.
    console.log(`Total developers: ${html.managersHTML.length}. Total interns: ${html.internsHTML.length}.`)
    console.log("Great! On to the next step:")
    // Pass the updated html object to the function that prompts the user to continue or finish, and call the function.
    promptToContinueOrFinish(html)
  })
}

startAndPromptForManagerInformation()
