/// <reference types="cypress" />


describe('example shop app', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

        let userName = 'standard_user'
        let userPass = 'secret_sauce'

        cy.get('[data-test="username"]').type(`${userName}`)
        cy.get('[data-test="password"]').type(`${userPass}`)
        cy.get('[data-test="login-button"]').click()
    })

    it('Sorting by price (low to high)', () => {

        cy.get('[data-test="product-sort-container"]').select('Price (low to high)');

        const myArray = [];
        cy.get('.inventory_item_price')
            .each(($el) => {
                const text = $el.text().replace('$', '');
                myArray.push(parseFloat(text));
            })
            .then(() => {
                const sortedArray = [...myArray].sort((a, b) => a - b);
                let i = 0;
                while (i < myArray.length) {
                    expect(myArray[i]).to.equal(sortedArray[i]);
                    i++;
                }
            });
    })

    it('Sorting by price (high to low)', () => {
        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')

        const myArray2 = [];
        cy.get('.inventory_item_price')
            .each(($el) => {
                const text = $el.text().replace('$', '');
                myArray2.push(parseFloat(text));
            })
            .then(() => {
                const sortedArray = [...myArray2].sort((a, b) => b - a);
                let i = 0;
                while (i > myArray2.length) {
                    expect(myArray2[i]).to.equal(sortedArray[i]);
                    i++;
                }
            });
    })

    it('Adding two items to the cart and creating an order', () => {
        cy.get('.inventory_item')
            .first()
            .find('button.btn_primary')
            .click();

        cy.get('.inventory_item')
            .eq(1)
            .find('button.btn_primary')
            .click();

        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('.cart_item').should('have.length', 2);

        cy.get('button.checkout_button').click();

        let firstName = 'visual_user'
        let lastName = 'secret_sauce'
        let zip = 'zip'


        cy.get('[data-test="firstName"]').type(`${firstName}`)
        cy.get('[data-test="lastName"]').type(`${lastName}`)
        cy.get('[data-test="postalCode"]').type(`${zip}`)

        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();
    })
})

