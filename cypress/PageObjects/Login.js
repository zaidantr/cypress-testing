class Login {

    txtEmail = '[data-qa="login-email"]'
    txtPassword = '[data-qa="login-password"]'
    btnSubmit = '[data-qa="login-button"]'
    verifyMessage = ':nth-child(10) > a'

    setEmail(email) {
        cy.get(this.txtEmail).type(email);
    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }
    clickSubmit() {
        cy.get(this.btnSubmit).click();
    }
    verifyLogin() {
        cy.get(this.verifyMessage).should('be.visible')    
    }

}

export default Login;