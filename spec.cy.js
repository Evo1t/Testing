describe('example shop app', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');
    cy.get('.card').eq(-1).click()
    cy.get('[id="login"]').click()


    let userName = 'User'
    let userPassword = '4MrwM*l('

    cy.get('[id="userName"]').type(`${userName}`)
    cy.get('[id="password"]').type(`${userPassword}`)
    cy.get('[id="login"]').click()

    
  });

  it('displays two todo items by default', () => {
    cy.get('.form-label').last().should('have.text', 'User');

    cy.contains('button', 'Log out').as('logoutButton').click();
  
    cy.get('@logoutButton').should('not.exist')
  });
});
