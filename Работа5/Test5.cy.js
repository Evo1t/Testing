describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('log out from account', () => {
    cy.get('.card').first().click()
    cy.contains('li', 'Buttons').click();

    cy.get('#doubleClickBtn').rightclick();
    cy.get('#doubleClickBtn').click();

    cy.get('p[id="dynamicClickMessage"]').should('not.exist');

    cy.get('#rightClickBtn').click();
    cy.get('#rightClickBtn').dblclick();

    cy.get('p[id="rightClickMessage]').should('not.exist');

    cy.get('#doubleClickBtn').dblclick();
    cy.get('#rightClickBtn').rightclick();
    cy.get('button').last().click();

    cy.get('p[id="doubleClickMessage"]').should('have.text', 'You have done a double click');
    cy.get('p[id="rightClickMessage"]').should('have.text', 'You have done a right click');
    cy.get('p[id="dynamicClickMessage"]').should('have.text', 'You have done a dynamic click');
  });
})