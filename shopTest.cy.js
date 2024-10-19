describe('example shop app', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');

        cy.get('#login2').click();

        let userName = 'Evo1t';
        let userPass = 'secret_sauce';

        // Вводит данные через раз
        cy.get('#loginusername').should('be.visible').type(userName);
        cy.get('#loginpassword').should('be.visible').type(userPass);
        cy.contains('button', 'Log in').click();
    });

    // it('Add to cart', () => {
    //     cy.get('.card a').first().click();
    //     cy.get('.btn-success').click();
    //     cy.contains('a', 'Cart').click();

    //     // Убедитесь, что элемент загружен
    //     cy.get('#tbodyid').should('be.visible').find('tr').should('have.length', 1);
    // });

    it('Test order', () => {
        cy.contains('a', 'Cart').click();
        cy.contains('button', 'Place Order').click();

        let name = 'Evo1t';
        let country = 'Россия';
        let city = 'Ижевск';
        let creditCard = '4532 1234 5678 9010';
        let month = 'Май';
        let year = '2025';

        cy.get('#name').should('be.visible').type(name);
        cy.get('#country').should('be.visible').type(country);
        cy.get('#city').should('be.visible').type(city);
        cy.get('#card').should('be.visible').type(creditCard);
        cy.get('#month').should('be.visible').type(month);
        cy.get('#year').should('be.visible').type(year);
        cy.contains('button', 'Purchase').click();
        cy.contains('button', 'OK').click();

        // Не нажимет на кнопку Close
        cy.get('.modal-footer button[data-dismiss="modal"]').click();
    });

});
