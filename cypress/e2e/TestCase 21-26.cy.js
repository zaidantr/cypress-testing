describe('Test Case 21-26', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
    })
    it('Add review on product', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get('.features_items').should('be.visible')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.title().should('eq', 'Automation Exercise - Product Details')
        cy.get('.product-information').should('be.visible')
        cy.get('.active > a').should('be.visible')
        cy.get('#name').type('Zaidan')
        cy.get('#email').type('zasaza@gamil.com')
        cy.get('#review').type('good man')
        cy.get('#button-review').click()
        cy.get('.col-md-12 > .alert-success').should('be.visible')
    })

    it('Add to cart from Recommended items', () => {
        cy.get('.recommended_items > .title').should('be.visible')
        cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('#product-5').should('be.visible')
    })

    it.skip('Verify address details in checkout page', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
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
        cy.get('#address_delivery').invoke('text').then(deliveryText => {
            cy.get('#address_invoice').invoke('text').then(invoiceText => {
              expect(deliveryText.trim()).to.contain(invoiceText.trim());
            });
          });
    })
    
    it.skip('Download Invoice after purchase order', () => {
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

        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(7) > .btn').click()

        cy.get('[data-qa="name-on-card"]').type('Zaidan')
        cy.get('[data-qa="card-number"]').type('012121')
        cy.get('[data-qa="cvc"]').type('321')
        cy.get('[data-qa="expiry-month"]').type('06')
        cy.get('[data-qa="expiry-year"]').type('25')
        cy.get('[data-qa="pay-button"]').click()

        cy.get('[data-qa="order-placed"] > b').should('be.visible')
        cy.get('.col-sm-9 > .btn-default').click()
        cy.get('[data-qa="continue-button"]').click()

        cy.get('.shop-menu > .nav > :nth-child(5)').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })

    it("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
        cy.get('.single-widget > h2')
            .invoke('text')
            .should('eq', 'Subscription')
        cy.scrollTo('bottom')
        cy.get('#scrollUp').click()
        cy.get('.active > :nth-child(1) > h2').should('be.visible') 
    })

    it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
        cy.get('.single-widget > h2')
            .invoke('text')
            .should('eq', 'Subscription')
        cy.scrollTo('bottom')
        cy.scrollTo('top')
        cy.get('.active > :nth-child(1) > h2').should('be.visible') 
    })
})