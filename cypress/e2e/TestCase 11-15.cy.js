describe('Test Case 11-15', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
    })

    it('Verify Subscription in Cart page', () => {
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.single-widget > h2')
            .invoke('text')
            .should('eq', 'Subscription')
        cy.get('#susbscribe_email').type('zaidan@gmail.com')
        cy.get('#subscribe').click()
        cy.get('.alert-success').should('be.visible')
    })

    it('Add Products in Cart', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('tbody > tr').should('have.length', '2')
        const selectors = ['.cart_price', '.cart_quantity', '.cart_total_price'];
        selectors.forEach(selector => {
          cy.get('tbody > tr')
            .find(selector)
            .invoke('text')
            .then(text => {
              cy.log(text);
            });
        });
        
    })

    it('Verify Product quantity in Cart', () => {
        const quantity = 4
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity')
            .clear()
            .type(`${quantity}`)
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get("tr[id='product-1'] button[class='disabled']")
            .invoke('text')
            .then((text) => {
                cy.log(text)
            })
    })

    it('Place Order: Register while Checkout', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()

        // Register section START
        let randomNumber = Math.random(3)
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
        //Register section END

        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(7) > .btn').click()

        cy.get('[data-qa="name-on-card"]').type('Zaidan')
        cy.get('[data-qa="card-number"]').type('012121')
        cy.get('[data-qa="cvc"]').type('321')
        cy.get('[data-qa="expiry-month"]').type('06')
        cy.get('[data-qa="expiry-year"]').type('25')
        cy.get('[data-qa="pay-button"]').click()

        cy.get('[data-qa="order-placed"] > b').should('be.visible')

        cy.get('[data-qa="order-placed"] > b').click()

        cy.get('.shop-menu > .nav > :nth-child(5)').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })

    it('Place Order: Register before Checkout', () => {
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        // Register section START
        let randomNumber = Math.random(3)
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
        //Register section END
        // Proceed CO
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(7) > .btn').click()

        cy.get('[data-qa="name-on-card"]').type('Zaidan')
        cy.get('[data-qa="card-number"]').type('012121')
        cy.get('[data-qa="cvc"]').type('321')
        cy.get('[data-qa="expiry-month"]').type('06')
        cy.get('[data-qa="expiry-year"]').type('25')
        cy.get('[data-qa="pay-button"]').click()

        cy.get('[data-qa="order-placed"] > b').should('be.visible')

        cy.get('[data-qa="order-placed"] > b').click()

        cy.get('.shop-menu > .nav > :nth-child(5)').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })
})