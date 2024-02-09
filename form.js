const renderLicenseBadge = license => {
    let badge;
    if (license === 'MIT') {
      return badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    else if (license === 'Apache License 2.0') {
      return badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (license === 'GNU General Public License v3.0') {
      return badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    else {
      return ''
    }
    
  }
  
  const renderLicenseSection = license => {
    if (license === 'No License') {
      return ''
    }
    else {
      return `## License 
  Please refer to license page by clicking on the badge to learn more
  - ${renderLicenseBadge(license)}.`
    }
  }

const form = ({title, description, description2, description3, description4, github, install, usage, credits, credits2, credits3, license, screenName1, screenshot1, screenName2, screenshot2, email}) => 
`# ${title}
- [![${renderLicenseBadge(license)}]

## Description
- ${description}
- ${description2}
- ${description3}
- ${description4}

* [${title}](https://github.com/${github}/ "Named link title")

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
- ${install}

## Usage
- ${usage}
* [${title}](github.com/${github}/ "Named link title")

## Credits
- ${credits}
- ${credits2}
- ${credits3}

- ${renderLicenseSection(license)}

## Screenshots

- ${screenName1}

![Alt text](./assets/images/${screenshot1}?raw=true "Optional Title")

- ${screenName2}

![Alt text](./assets/images/${screenshot2}?raw=true "Optional Title")

## Questions

- Github Profile: https://github.com/${github}
- Please feel free to email me at: ${email} with any additional questions.`

module.exports = form;