const chalk = require('chalk');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return '';
  }
  if (license === "MIT") {
    return   `  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
   `
    ;
  }
  if (license === "ISC") {
    return   `   
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
   `   ;
  }
  if (license === "IBM") {
    return   `   
  [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
   `   ;
  }
  if (license === "Mozilla Public License 2.0") {
    return   `   
  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
   `   ;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return '';
  }
  return `
  * [License](#license)
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return '';
  }
  return `
  ## License
      ${renderLicenseBadge(license)}
      ${license}
  `;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title :
      ${data.projectName}
  ## Description
      ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
     ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
     ${data.dependencies}

  ## Usage



${renderLicenseSection(data.license) }



  ## Contributing
   ${data.contributing}


  ## Tests



  ## Questions
  Github User Name

  [${data.github}](https://github.com/${data.github})

  ${chalk.blue("Email Address :")}
  ${data.email}



`;
}

module.exports = generateMarkdown;

