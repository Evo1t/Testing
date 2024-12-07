describe('example shop app', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/');

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });


    });

    it('log out from account', () => {
        cy.get('.card').eq(-1).click()
        cy.get('[id="login"]').click()

        let userName = 'User'
        let userPassword = '4MrwM*l('

        cy.get('[id="userName"]').type(`${userName}`)
        cy.get('[id="password"]').type(`${userPassword}`)
        cy.get('[id="login"]').click()

        cy.get('.form-label').last().should('have.text', 'User');

        cy.contains('button', 'Log out').as('logoutButton').click();

        cy.get('@logoutButton').should('not.exist')

        cy.get('[id="userName"]').clear();
        cy.get('[id="password"]').clear();
    });

    it('incorrect account password', () => {
        cy.get('.card').eq(-1).click()
        cy.get('[id="login"]').click()

        let userName = 'User'
        let userPassword = 'incorrect'

        cy.get('[id="userName"]').type(`${userName}`)
        cy.get('[id="password"]').type(`${userPassword}`)
        cy.get('[id="login"]').click()

        cy.get('[id="name"]').should('have.text', 'Invalid username or password!');
    });

    it('incorrect account username', () => {
        cy.get('.card').eq(-1).click()
        cy.get('[id="login"]').click()

        let userName = 'incorrect'
        let userPassword = 'notExistent'

        cy.get('[id="userName"]').type(`${userName}`)
        cy.get('[id="password"]').type(`${userPassword}`)
        cy.get('[id="login"]').click()

        cy.get('[id="name"]').should('have.text', 'Invalid username or password!');
    });


    it('not-existent account', () => {
        cy.get('.card').eq(-1).click()
        cy.get('[id="login"]').click()


        let notExistentUserName = 'notExistent'
        let notExistentuserPassword = 'notExistent'

        cy.get('[id="userName"]').type(`${notExistentUserName}`)
        cy.get('[id="password"]').type(`${notExistentuserPassword}`)
        cy.get('[id="login"]').click()

        cy.get('[id="name"]').should('have.text', 'Invalid username or password!');
    });

    // it('Text Box', () => {
    //     cy.get('.card').first().click()
    //     cy.get('[id="item-0"]').first().click();

    //     let userName = 'User'
    //     let email = 'fdgdfgdf@gmail.com'
    //     let currrentAdress = '408960, Сахалинская область, город Шаховская, наб. Гагарина, 53'
    //     let permanentAdress = '408960, Сахалинская область, город Шаховская, наб. Гагарина, 53'

    //     cy.get('[id="userName"]').type(`${userName}`)
    //     cy.get('[id="userEmail"]').type(`${email}`)
    //     cy.get('[id="currentAddress"]').type(`${currrentAdress}`)
    //     cy.get('[id="permanentAddress"]').type(`${permanentAdress}`)
    //     cy.get('[id="submit"]').click()


    //     cy.get('[id="name"]').should('have.text', `Name:User`);
    //     cy.get('[id="email"]').should('have.text', `Email:fdgdfgdf@gmail.com`);
    //     cy.get('[id="currentAddress"]').should('contain', 'Current Address :408960, Сахалинская область, город Шаховская, наб. Гагарина, 53');
    //     cy.get('[id="permanentAddress"]').should('have.text', `Permananet Address :408960, Сахалинская область, город Шаховская, наб. Гагарина, 53`);

    // });

    // it('Web Tables', () => {
    //     cy.get('.card').first().click();
    //     cy.contains('li', 'Web Tables').click();
    //     cy.get('[id="addNewRecordButton"]').click();

    //     let firstName = 'User';
    //     let lastName = 'Admin';
    //     let Email = 'fdgdfgdf@gmail.com';
    //     let Age = '15';
    //     let Salary = '50000';
    //     let Department = 'Бухгалтерия';

    //     cy.get('[id="firstName"]').type(firstName);
    //     cy.get('[id="lastName"]').type(lastName);
    //     cy.get('[id="userEmail"]').type(Email);
    //     cy.get('[id="age"]').type(Age);
    //     cy.get('[id="salary"]').type(Salary);
    //     cy.get('[id="department"]').type(Department);
    //     cy.get('[id="submit"]').click();

    //     cy.get('.rt-tr-group').eq(3).within(() => {
    //         cy.get('.rt-td').eq(0).should('have.text', firstName);
    //         cy.get('.rt-td').eq(1).should('have.text', lastName);
    //         cy.get('.rt-td').eq(2).should('have.text', Age);
    //         cy.get('.rt-td').eq(3).should('have.text', Email);
    //         cy.get('.rt-td').eq(4).should('have.text', Salary);
    //         cy.get('.rt-td').eq(5).should('have.text', Department);
    //     });
    // });

    // it('Practice Form', () => {
    //     cy.get('.card').eq(1).click();
    //     cy.contains('li', 'Practice Form').click();

    //     let firstName = 'User';
    //     let lastName = 'Admin';
    //     let Email = 'fdgdfgdf@gmail.com';
    //     let userNumber = '157567567';
    //     let subjects = 'Physics';
    //     let currrentAdress = '408960, Сахалинская область, город Шаховская, наб. Гагарина, 53'
    //     let state = 'NCR';
    //     let city = 'Delhi';

    //     cy.get('[id="firstName"]').type(firstName);
    //     cy.get('[id="lastName"]').type(lastName);
    //     cy.get('[id="userEmail"]').type(Email);
    //     cy.get('label[class="custom-control-label"]').first().click();
    //     cy.get('[id="userNumber"]').type(userNumber);
    //     cy.get('label[class="custom-control-label"]').eq(5).click();
    //     cy.get('[id="subjectsContainer"]').within(() => {
    //         cy.get('.subjects-auto-complete__control').click({ force: true });

    //         cy.get('#subjectsInput').type(subjects + '{enter}');
    //     });
    //     cy.get('[id="currentAddress"]').type(currrentAdress);

    //     cy.get('#stateCity-wrapper').within(() => {
    //         cy.get('#state .css-yk16xz-control').click({ force: true });

    //         cy.get('#react-select-3-input').type(state + '{enter}');
    //     });

    //     cy.get('#stateCity-wrapper').within(() => {
    //         cy.get('#city .css-yk16xz-control').click({ force: true });

    //         cy.get('#react-select-4-input').type(city + '{enter}');
    //     });
    //     cy.get('[id="submit"]').click();

    //     const expectedValues = [
    //         'User Admin',
    //         'fdgdfgdf@gmail.com',
    //         'Male',
    //         '157567567',
    //         '07 December,2024',
    //         'Physics',
    //         'Music',
    //         '',
    //         '408960, Сахалинская область, город Шаховская, наб. Гагарина, 53',
    //         'NCR Delhi'
    //     ];

    //     cy.get('table tbody tr').each(($row, index) => {
    //         const value = $row.find('td').eq(1).text().trim();
    //         cy.log(`Expected: ${expectedValues[index]}, Actual: ${value}`);
    //         expect(value).to.equal(expectedValues[index]);
    //     });

    //     cy.get('[id="closeLargeModal"]').click();

    // });


    // it('sorted', () => {
    //     cy.get('.card').eq(-1).click();
    //     cy.contains('div[class="rt-resizable-header-content"]', 'Author').click();

    //     cy.get('.rt-td').eq(2).then(($authors) => {
    //         const authors = [];
    //         $authors.each((index, element) => {
    //             authors.push(element.innerText);
    //         });

    //         const originalAuthors = [...authors];

    //         originalAuthors.forEach(author => {
    //             cy.log(author);
    //         });

    //         const sortedAuthors = [...authors].sort();

    //         sortedAuthors.forEach(author => {
    //             cy.log(author);
    //         });

    //         expect(authors).to.deep.equal(sortedAuthors);
    //     });
    // });
});