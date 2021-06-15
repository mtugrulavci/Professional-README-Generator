// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return '';
  }
  if (license === "MIT") {
    return   `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `;
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


  ## Usage



${renderLicenseSection(data.license) }



  ## Contributing



  ## Tests



  ## Questions


${data.github}
`;
}

module.exports = generateMarkdown;

