describe('Test Case 16 - 20', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
        cy.get("a[href='/login']").click()
        cy.get("div[class='signup-form'] h2").should('be.visible')
    })

    it('Place Order: Login before Checkout', () => {
        cy.get('[data-qa="login-email"]').type("ztrachman@gmail.com")
        cy.get('[data-qa="login-password"]').type("432zenius")
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
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
    })

    it('Remove Products From Cart', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.cart_quantity_delete').click()
        cy.get('#empty_cart').should('be.visible')
    })

    it('View Category Products', () => {
        cy.visit("https://automationexercise.com/")
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.title')
            .invoke('text')
            .should('eq', 'Women - Dress Products')
    })

    it('View & Cart Brand Products', () => {
        cy.get('.nav > :nth-child(2)').click()
        cy.get('.brands_products').should('be.visible')
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.get('.title')
            .invoke('text')
            .should('eq', 'Brand - Polo Products')    
        cy.get('.brands-name > .nav > :nth-child(2) > a').click()
        cy.get('.title')
            .invoke('text')
            .should('eq', 'Brand - H&M Products')    
    })
    
    it('Search Products and Verify Cart After Login', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()

        cy.title().should('eq', 'Automation Exercise - All Products')    
        cy.get('#search_product').type('Blue')
        cy.get('#submit_search').click()
        cy.get('.title')
            .invoke('text')
            .should('eq', 'Searched Products')

        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('#product-1').should('be.visible')
        
        cy.get('.nav > :nth-child(4)').click()
        cy.get('[data-qa="login-email"]').type("ztrachman@gmail.com")
        cy.get('[data-qa="login-password"]').type("432zenius")
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')

        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('#product-1').should('be.visible')

    })
})