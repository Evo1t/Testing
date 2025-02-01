describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/');

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('click on the button ', () => {
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

      cy.getCookie('your_cookie_name').should('exist');
    });

    it('Проверка разных alert', () => {
        cy.get('.card').eq(2).click();
        cy.contains('li', 'Alert').click();

        cy.on('window:alert', (text) => {
            if (text === 'You clicked a button') {
                expect(text).to.equal('You clicked a button');
            } else if (text === 'This alert appeared after 5 seconds') {
                expect(text).to.equal('This alert appeared after 5 seconds');
            } 
        });

        cy.contains('button', 'Click me').first().click();

        cy.clock();
        cy.get('[id="timerAlertButton"]').click();
        cy.tick(5000);

        cy.get('[id="confirmButton"]').click();
        cy.get('[id="confirmResult"]').should('have.text', 'You selected Ok');

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Какой-то рандомный текст для проверки.');
        });
        cy.get('[id="promtButton"]').click();
        cy.get('[id="promptResult"]').should('have.text', 'You entered Какой-то рандомный текст для проверки.');
    });

    it('Проверка разных checkboxs', () => {
        cy.get('.card').first().click()
        cy.contains('li', 'Check Box').click();

        cy.get('.rct-checkbox').click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'home',
                'desktop',
                'notes',
                'commands',
                'documents',
                'workspace',
                'react',
                'angular',
                'veu',
                'office',
                'public',
                'private',
                'classified',
                'general',
                'downloads',
                'wordFile',
                'excelFile'
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });


        cy.get('.rct-collapse-btn').click();
        cy.get('.rct-checkbox').eq(2).click();
        cy.get('.rct-checkbox').eq(3).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'desktop',
                'notes',
                'commands'
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });

        cy.get('.rct-checkbox').eq(1).click();
        cy.get('.rct-checkbox').eq(2).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'documents',
                'workspace',
                'react',
                'angular',
                'veu',
                'office',
                'public',
                'private'
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });

        cy.get('.rct-checkbox').eq(1).click();
        cy.get('.rct-checkbox').eq(2).click();
        cy.get('.rct-checkbox').eq(3).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'downloads',
                'wordFile',
                'excelFile'
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });

        // cy.get('.rct-checkbox').eq(1).click();
        cy.get('.rct-checkbox').eq(2).click();
        cy.get('.rct-checkbox').eq(3).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'desktop',
                'notes',
                'commands',
                'documents',
                'workspace',
                'react',
                'angular',
                'veu',
                'office',
                'public',
                'private',
                'classified',
                'general',
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });

        cy.get('.rct-checkbox').eq(2).click();
        cy.get('.rct-checkbox').eq(3).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'desktop',
                'notes',
                'commands',
                'downloads',
                'wordFile',
                'excelFile'
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });

        cy.get('.rct-checkbox').eq(1).click();
        cy.get('.rct-checkbox').eq(2).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'documents',
                'workspace',
                'react',
                'angular',
                'veu',
                'office',
                'public',
                'private',
                'classified',
                'general',
                'downloads',
                'wordFile',
                'excelFile'
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });

        cy.get('.rct-collapse-btn').eq(1).click();
        cy.get('.rct-checkbox').eq(-1).click();
        cy.get('.rct-checkbox').eq(-2).click();
        cy.get('.rct-checkbox').eq(2).click();
        cy.get('.rct-checkbox').eq(3).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'desktop',
                'notes',
                'commands',
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });
        cy.get('.rct-checkbox').eq(1).click();
        cy.get('.rct-collapse-btn').eq(1).click();
        cy.get('.rct-collapse-btn').eq(2).click();
        cy.get('.rct-checkbox').eq(3).click();
        cy.get('.rct-checkbox').eq(4).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'documents',
                'workspace',
                'react',
                'angular',
                'veu',
                'office',
                'public',
                'private',
                'classified',
                'general',
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });

        cy.get('.rct-checkbox').eq(2).click();
        cy.get('.rct-collapse-btn').eq(2).click();
        cy.get('.rct-collapse-btn').eq(3).click();
        cy.get('.rct-checkbox').eq(4).click();
        cy.get('.rct-checkbox').eq(5).click();
        cy.get('#result').within(() => {
            const textsToCheck = [
                'downloads',
                'wordFile',
                'excelFile',
            ];
            textsToCheck.forEach(text => {
                cy.contains(text).should('exist');
            });
        });
    });
})
