import 'cypress-file-upload';

describe('Test Case 6-10', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
    })

    it('Contact Us', () => {
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('div.contact-form > .title').should('be.visible')
        cy.get('[data-qa="name"]').type("Zaidan")
        cy.get('[data-qa="email"]').type("ztrachman@gmail.com")
        cy.get('[data-qa="subject"]').type("Biology")
        cy.get('[data-qa="message"]').type("Help Me")
        cy.get("input[name='upload_file']").attachFile('-main.jpg')
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('be.visible')
        cy.visit("https://automationexercise.com/")
    })

    it('Verify Test Cases Page', () => {
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.title().should('eq', 'Automation Practice Website for UI Testing - Test Cases')
    })
    
    it('Verify All Products and product detail page', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get('.features_items').should('be.visible')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.title().should('eq', 'Automation Exercise - Product Details')
        cy.get('.product-information').should('be.visible')
    })

    it('Search product', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.title().should('eq', 'Automation Exercise - All Products')    
        cy.get('#search_product').type('Blue')
        cy.get('#submit_search').click()
        cy.get('.title')
            .invoke('text')
            .should('eq', 'Searched Products')
    })

    it('Verify Subscription in home page', () => {
        cy.get('.single-widget > h2')
            .invoke('text')
            .should('eq', 'Subscription')
        cy.get('#susbscribe_email').type('zaidan@gmail.com')
        cy.get('#subscribe').click()
        cy.get('.alert-success').should('be.visible')

    })
})