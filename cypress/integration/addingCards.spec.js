

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8080')
    });
  
    it('verify we can add new components', () => {
        cy.get('.profile-component').shadow().find('.profile-card').should('have.length', 1);
        cy.get('#addCards').should('have.text', 'Add profile cards').click();
        cy.get('.profile-component').shadow().find('.profile-card').should('have.length', 2);
        cy.get('.profile-component').shadow().find('.profile-card').last().find('#name').should('contain', 'Firstname Middlename Lastname')
        cy.get('.profile-component').shadow().find('.profile-card').last().find('#email').should('contain', 'emailtest@gmail.com')
        cy.get('.profile-component').shadow().find('.profile-card').last().find('#phone').should('contain', '6181234567')
    });
  
  
  });
  