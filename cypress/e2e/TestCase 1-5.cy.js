import Login from "../PageObjects/Login"

describe('Registration', () => {

    let randomNumber = Math.random(3)

    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
        cy.get("a[href='/login']").click()
        cy.get("div[class='signup-form'] h2").should('be.visible')
    })

    it('Register User', () => {
        cy.get('[data-qa="signup-name"]').type(`Zaidan${randomNumber}`)
        cy.get('[data-qa="signup-email"]').type(`zaidan${randomNumber}@gmail.com`)
        cy.get('[data-qa="signup-button"]').click()

        // Checking radio button
        cy.get('#id_gender1').should('be.visible')
        cy.get('#id_gender2').should('be.visible')
        cy.get('#id_gender1')
            .check()
            .should('be.checked')
        cy.get('#id_gender2').should('not.be.checked')

        // Checking check button
        cy.get('#newsletter')
            .check()
            .should('be.checked')
        cy.get('#optin')
            .check()
            .should('be.checked')

        // Set Password
        cy.get('[data-qa="password"]').type('432zenius')

        // Set date of birth
        cy.get('[data-qa="days"]')
            .select('1')
            .invoke('val')
            .should('eq', '1')
        cy.get('[data-qa="months"]')
            .select('June')
            .invoke('val')
            .should('eq', '6')
        cy.get('[data-qa="years"]')
            .select('2001')
            .invoke('val')
            .should('eq', '2001')
            
        // Addres information
        cy.get('[data-qa="first_name"]').type(`Zaidan${randomNumber}`)
        cy.get('[data-qa="last_name"]').type(`Rachman+${randomNumber}`)
        cy.get('[data-qa="company"]').type("Zenius")
        cy.get('[data-qa="address"]').type("Jalan No 123")
        cy.get('[data-qa="address2"]').type("Jalan No 321")
        cy.get('[data-qa="country"]')
            .select('India')
            .invoke('val')
            .should('eq', 'India')
        cy.get('[data-qa="state"]').type("Cicaheum")
        cy.get('[data-qa="city"]').type("Bandung")
        cy.get('[data-qa="zipcode"]').type("178878")
        cy.get('[data-qa="mobile_number"]').type("08777632864")
        cy.get('[data-qa="create-account"]').click()

        cy.get('[data-qa="account-created"]')
            .should('be.visible')

        cy.get('[data-qa="continue-button"]').click()

        cy.get(':nth-child(10) > a').should('be.visible')

        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

        cy.get('[data-qa="account-deleted"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()

    })

    it('Login User with correct email and password', ()=> {
        cy.fixture('login').then((data) => {
            const ln = new Login();
            ln.setEmail(data.email)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        // cy.get('[data-qa="login-email"]').type("ztrachman@gmail.com")
        // cy.get('[data-qa="login-password"]').type("432zenius")
        // cy.get('[data-qa="login-button"]').click()
        // cy.get(':nth-child(10) > a').should('be.visible')
    })

    it('Login User with incorrect email and password', ()=> {
        cy.get('[data-qa="login-email"]').type("butokbuton@gmail.com")
        cy.get('[data-qa="login-password"]').type("432zenius")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible')
    })

    it('Logout User', ()=> {
        cy.get('[data-qa="login-email"]').type("ztrachman@gmail.com")
        cy.get('[data-qa="login-password"]').type("432zenius")
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get("div[class='signup-form'] h2").should('be.visible')
    })

    it('Register User with existing email', () => {
        cy.get('[data-qa="signup-name"]').type(`Zaidan${randomNumber}`)
        cy.get('[data-qa="signup-email"]').type('ztrachman@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('be.visible')
    })
})