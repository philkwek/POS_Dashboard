const protectedRoutes = ['/finance', '/inventory', '/pos', '/admin'];

describe('Auth and Protected Routes', () => {
  protectedRoutes.forEach((route) => {
    it(`redirects unauthenticated users from ${route} to /`, () => {
      cy.visit(route);
      cy.url().should('match', /\/$/);
      cy.getBySel('storefront-grid').should('exist');
    });
  });

  it('opens and closes login modal', () => {
    cy.visit('/');
    cy.getBySel('admin-button').click();
    cy.getBySel('login-modal').should('be.visible');
    cy.getBySel('login-close').click();
    cy.getBySel('login-modal').should('not.exist');
  });

  it('shows invalid credential feedback', () => {
    cy.visit('/');
    cy.getBySel('admin-button').click();

    cy.on('window:alert', (text) => {
      expect(text).to.eq('Invalid credentials');
    });

    cy.getBySel('login-email').type('invalid@example.com');
    cy.getBySel('login-password').type('wrong-password');
    cy.getBySel('login-submit').click();
    cy.getBySel('login-modal').should('be.visible');
  });

  it('logs in successfully and reveals protected navigation', () => {
    cy.visit('/');
    cy.loginAsAdmin();
    cy.getBySel('drawer-toggle').should('exist');
    cy.getBySel('drawer-link-finance').should('exist');
  });

  it('supports logout cancel and confirm flows', () => {
    cy.visit('/');
    cy.loginAsAdmin();

    cy.getBySel('admin-user-button').click();
    cy.getBySel('logout-modal').should('be.visible');
    cy.getBySel('logout-cancel').click();
    cy.getBySel('logout-modal').should('not.exist');

    cy.getBySel('admin-user-button').click();
    cy.getBySel('logout-confirm').click();
    cy.getBySel('admin-button').should('be.visible');
  });
});
