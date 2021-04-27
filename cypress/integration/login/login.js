import {
    Given, When, Then 
} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../support/pageObject/loginPage"
import {
  BASE_URL, LOGIN_PATH, HOME_PATH
} from "./constants"

const loginPage = new LoginPage();

Given(/^The user is on login page$/, function () {
  cy.fixture('login').then(function(data) {
    this.data = data ;
  })
  cy.visit(`${Cypress.env(BASE_URL)}${Cypress.env(LOGIN_PATH)}`);
  cy.url().should("include", Cypress.env(LOGIN_PATH));
});

When(/^the user tries to login with correct credentials$/, function () {
  const { email, password } = this.data;
  loginPage.getEmail().type(email);
  loginPage.getPassword().type(password);
  loginPage.getButton().click();
});

Then(/^he should be redirected to the homepage$/, function () {
  cy.url().should("include", Cypress.env(HOME_PATH));
})