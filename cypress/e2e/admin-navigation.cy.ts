describe('Admin Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.loginAsAdmin();
  });

  it('routes correctly from drawer links', () => {
    cy.getBySel('drawer-link-finance').click();
    cy.url().should('include', '/finance');

    cy.getBySel('drawer-link-inventory').click();
    cy.url().should('include', '/inventory');

    cy.getBySel('drawer-link-pos').click();
    cy.url().should('include', '/pos');

    cy.getBySel('drawer-link-admin').click();
    cy.url().should('include', '/admin');
  });

  it('auto-closes drawer on mobile after navigation', () => {
    cy.viewport(375, 812);
    cy.getBySel('drawer-toggle').click();
    cy.getBySel('drawer-checkbox').should('be.checked');
    cy.getBySel('drawer-link-finance').click();
    cy.getBySel('drawer-checkbox').should('not.be.checked');
    cy.url().should('include', '/finance');
  });

  it('shows authenticated identity in navbar', () => {
    cy.getBySel('admin-user-button').should('contain', 'Admin User');
  });
});
