# Getting started with the project

Install all the dependencies - npm install

## Create your login data

Goto cypress/fixtures, add a new file called login.json
sample json is 
{
    "email": "a@exmple.com,
    "password": "password
}

### To run the cypress with GUI

On your terminal, type "npm run cypress:open"

#### To run cypress headless 

On your terminal, type "npm run cypress-run-cucumber"

##### Git ignore some files

Add a new file to the root of the project called .gitignore

add these files to gitignore

node_modules/
cypress/fixtures/login.json