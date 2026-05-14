describe('Product Details', () => {
  it('renders details when arriving from storefront route state', () => {
    cy.visit('/');
    cy.getBySel('store-item-card-single-image-item').click();
    cy.getBySel('product-detail').should('exist');
    cy.getBySel('product-name').should('contain', 'Starter Pack');
  });

  it('loads details from Firestore on direct URL access', () => {
    cy.visit('/multi-image-item');
    cy.getBySel('product-loading').should('not.exist');
    cy.getBySel('product-name').should('contain', 'Collector Box');
  });

  it('shows not found for missing product IDs', () => {
    cy.visit('/does-not-exist');
    cy.getBySel('product-loading').should('not.exist');
    cy.getBySel('product-not-found').should('be.visible');
  });

  it('supports back-to-store navigation', () => {
    cy.visit('/single-image-item');
    cy.getBySel('back-to-store').click();
    cy.url().should('match', /\/$/);
    cy.getBySel('storefront-grid').should('exist');
  });

  it('renders carousel controls only for multi-image products', () => {
    cy.visit('/single-image-item');
    cy.getBySel('carousel-next').should('not.exist');

    cy.visit('/multi-image-item');
    cy.getBySel('carousel-next').first().click();
    cy.getBySel('carousel-index-2').click();
  });

  it('resolves product detail after browser refresh', () => {
    cy.visit('/multi-image-item');
    cy.reload();
    cy.getBySel('product-loading').should('not.exist');
    cy.getBySel('product-name').should('contain', 'Collector Box');
  });

  it('does not keep stale product data when route params change in-app', () => {
    cy.visit('/single-image-item');
    cy.getBySel('product-name').should('contain', 'Starter Pack');

    cy.window().then((win) => {
      win.history.pushState({}, '', '/multi-image-item');
      win.dispatchEvent(new win.PopStateEvent('popstate'));
    });

    cy.getBySel('product-name').should('contain', 'Collector Box');
  });
});
