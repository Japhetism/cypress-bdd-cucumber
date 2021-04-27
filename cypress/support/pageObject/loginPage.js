class LoginPage {

    getEmail() {
        return cy.get("#login-email");
    }

    getPassword() {
        return cy.get("#login-password");
    }

    getButton() {
        return cy.get("#loginButton");
    }
}

export default LoginPage;