describe('example shop app', () => {
    beforeEach(() => {

        // // Перехватить запрос к adsbygoogle.js и вернуть пустой ответ
        // cy.intercept('GET', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
        //     statusCode: 204, // Возвращаем статус 204 No Content
        // }).as('adsbygoogle');

        // Ваши тесты
        cy.visit('https://demoqa.com/');

        // // Дождитесь завершения всех запросов
        // cy.wait('@adsbygoogle'); // Ожидание перехваченного запроса, если это необходимо

        cy.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });


    });

    //-----------------------------------------------------------------------------------------------------------

    // it('log out from account', () => {
    // cy.get('.card').eq(-1).click()
    // cy.get('[id="login"]').click()


    // let userName = 'User'
    // let userPassword = '4MrwM*l('

    // cy.get('[id="userName"]').type(`${userName}`)
    // cy.get('[id="password"]').type(`${userPassword}`)
    // cy.get('[id="login"]').click()

    // cy.get('.form-label').last().should('have.text', 'User');

    // cy.contains('button', 'Log out').as('logoutButton').click();

    // cy.get('@logoutButton').should('not.exist')
    // });

    //-----------------------------------------------------------------------------------------------------------

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

    //-----------------------------------------------------------------------------------------------------------

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

    //-----------------------------------------------------------------------------------------------------------

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
    //         // Кликаем на контейнер, чтобы открыть выпадающий список
    //         cy.get('.subjects-auto-complete__control').click({ force: true });

    //         // Вводим значение для предмета
    //         cy.get('#subjectsInput').type(subjects + '{enter}'); // Вводим текст и нажимаем Enter
    //     });
    //     cy.get('[id="currentAddress"]').type(currrentAdress);

    //     cy.get('#stateCity-wrapper').within(() => {
    //         // Кликаем на контейнер для State, чтобы открыть выпадающий список
    //         cy.get('#state .css-yk16xz-control').click({ force: true });

    //         // Вводим значение для State и нажимаем Enter
    //         cy.get('#react-select-3-input').type(state + '{enter}');
    //     });

    //     // Вводим значение для City
    //     cy.get('#stateCity-wrapper').within(() => {
    //         // Кликаем на контейнер для City, чтобы открыть выпадающий список
    //         cy.get('#city .css-yk16xz-control').click({ force: true });

    //         // Вводим значение для City и нажимаем Enter
    //         cy.get('#react-select-4-input').type(city + '{enter}');
    //     });
    //     cy.get('[id="submit"]').click();


    //     // Предположим, что у вас есть ожидаемые значения
    //     // Ожидаемые значения
    //     const expectedValues = [
    //         'User Admin',          // Student Name
    //         'fdgdfgdf@gmail.com', // Student Email
    //         'Male',                // Gender
    //         '157567567',         // Mobile
    //         '16 November,2024',   // Date of Birth
    //         'Physics',            // Subjects
    //         'Music',              // Hobbies
    //         '',                   // Picture
    //         '408960, Сахалинская область, город Шаховская, наб. Гагарина, 53',         // Address
    //         'NCR Delhi'          // State and City
    //     ];

    //     // Проверяем значения в строках таблицы
    //     cy.get('table tbody tr').each(($row, index) => {
    //         // Получаем текст из второй ячейки (td) текущей строки
    //         const value = $row.find('td').eq(1).text().trim(); // Извлекаем текст и убираем лишние пробелы
    //         // Сравниваем с ожидаемым значением
    //         expect(value).to.equal(expectedValues[index]);
    //     });

    //     cy.get('[id="closeLargeModal"]').click();

    // });

    //-----------------------------------------------------------------------------------------------------------

    it('sorted', () => {
        cy.get('.card').eq(-1).click();
        cy.contains('div[class="rt-resizable-header-content"]', 'Author').click();
    
        // Получаем все имена авторов из таблицы
        cy.get('.rt-td').eq(2).then(($authors) => {
            const authors = [];
            $authors.each((index, element) => {
                authors.push(element.innerText);
            });
    
            // Сохраняем оригинальный массив авторов
            const originalAuthors = [...authors];
    
            // Выводим оригинальные авторы в консоль
            originalAuthors.forEach(author => {
                cy.log(author);
            });
    
            // Сортируем массив авторов
            const sortedAuthors = [...authors].sort();
    
            // Выводим отсортированные авторы в консоль
            sortedAuthors.forEach(author => {
                cy.log(author);
            });
    
            // Проверяем, что отсортированный массив совпадает с оригинальным
            expect(authors).to.deep.equal(sortedAuthors);
        });
    });    
});
