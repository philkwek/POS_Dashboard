describe('Public Storefront', () => {
  it('shows and dismisses loading state before rendering products', () => {
    cy.intercept('**/google.firestore.v1.Firestore/**', (req) => {
      req.on('response', (res) => {
        res.setDelay(800);
      });
    });
    cy.visit('/');
    cy.getBySel('storefront-loading').should('exist');
    cy.getBySel('storefront-loading').should('not.exist');
    cy.getBySel('storefront-grid').should('exist');
  });

  it('renders deterministic product cards after load', () => {
    cy.visit('/');
    cy.getBySel('storefront-grid').find('[data-cy^="store-item-card-"]').should('have.length', 4);
    cy.getBySel('store-item-card-single-image-item').should('contain', 'Starter Pack');
  });

  it('handles empty products collection gracefully', () => {
    cy.task('resetFirestore');
    cy.visit('/');
    cy.getBySel('storefront-loading').should('not.exist');
    cy.getBySel('storefront-grid').find('[data-cy^="store-item-card-"]').should('have.length', 0);
  });

  it('navigates from product card to product details page', () => {
    cy.visit('/');
    cy.getBySel('store-item-card-multi-image-item').click();
    cy.url().should('include', '/multi-image-item');
    cy.getBySel('product-name').should('contain', 'Collector Box');
  });
});
