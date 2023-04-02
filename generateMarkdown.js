// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  const licenseBadge = ("MIT License" + "[MIT License](https://choosealicense.com/licenses/mit/)")};
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 const licenseLInk = "[MIT License](https://choosealicense.com/licenses/mit/)"};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 const licenseSection = "This app is created with a MIT License. "};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

 Description

${data.description}

 Table of Contents

1. [Title](#project-title)
2. [Description](#description)
3. [Table of Contents](#table-of-contents)
4. [Installation](#installation)
5. [Usage](#usage)
6. [License](#license)
7. [Contributing](#contributing)
8. [Tests](#tests)
9. [Questions](#questions)

 Installation

${data.install}

 Usage

${data.usage}

 License

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

 Contributing

${data.guidelines}
 Tests

${data.tests}

 Questions

GitHub user: ${data.user}
Email: ${data.email}
`;

}

module.exports = generateMarkdown;
