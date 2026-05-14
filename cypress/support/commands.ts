const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'AdminPass123!';

declare global {
  namespace Cypress {
    interface Chainable {
      getBySel(selector: string): Chainable<JQuery<HTMLElement>>;
      resetTestState(): Chainable<void>;
      loginAsAdmin(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('getBySel', (selector: string) => cy.get(`[data-cy="${selector}"]`));

Cypress.Commands.add('resetTestState', () => {
  cy.task('resetFirestore');
  cy.task('seedProducts', 'products');
  cy.task('resetAuth');
  cy.task('seedAuthUsers', 'users');
});

Cypress.Commands.add('loginAsAdmin', () => {
  cy.getBySel('admin-button').click();
  cy.getBySel('login-email').type(ADMIN_EMAIL);
  cy.getBySel('login-password').type(ADMIN_PASSWORD);
  cy.getBySel('login-submit').click();
  cy.getBySel('admin-user-button').should('contain', 'Admin User');
});

export {};
