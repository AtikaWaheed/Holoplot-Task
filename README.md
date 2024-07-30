
# Pre reqs:

1- Install NodeJS and NPM

# Running Tests:

1- Go to the root directory of the project.

First Approach: 
    Copy Pakcage jason file and run command `npm install`  // This will install all dependencies

Second Approach: 

2- Let’s start by creating the package.json

        npm init -y         // This will create a package.json file

3- Install Node.js packages

       $ npm install

4- Install Cypress (Refer package jason for version)

      npm install cypress

5- In order to execute all tests, run command

    npx cypress run --spec "/cypress/e2e/performanceTest.cy.js"

# Note: For Live Browser Execution:
    npx cypress open   

    Click on test file which is `flightPageTestCases.js`