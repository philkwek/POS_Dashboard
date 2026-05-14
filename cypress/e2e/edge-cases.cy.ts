describe('Edge Cases and Failure Paths', () => {
  it('handles Firestore read failure on storefront without crashing', () => {
    cy.intercept('**/google.firestore.v1.Firestore/**', { forceNetworkError: true });
    cy.visit('/');
    cy.getBySel('storefront-loading').should('not.exist');
    cy.getBySel('storefront-grid').should('exist');
  });

  it('handles Firestore read failure on product detail', () => {
    cy.intercept('**/google.firestore.v1.Firestore/**', { forceNetworkError: true });
    cy.visit('/single-image-item');
    cy.getBySel('product-loading').should('not.exist');
    cy.getBySel('product-not-found').should('be.visible');
  });

  it('renders item details when additionalImages is missing', () => {
    cy.visit('/single-image-item');
    cy.getBySel('product-detail').should('exist');
    cy.getBySel('product-carousel').should('exist');
    cy.getBySel('carousel-next').should('not.exist');
  });

  it('renders long and special characters safely', () => {
    cy.visit('/edge-text-item', {
      onBeforeLoad(win) {
        (win as Window & { __alertCalls: number }).__alertCalls = 0;
        win.alert = () => {
          (win as Window & { __alertCalls: number }).__alertCalls += 1;
        };
      },
    });
    cy.getBySel('product-name').should('contain', 'Special <> & "Quoted" Product');
    cy.getBySel('product-description').should('contain', '<script>alert(\'xss\')</script>');
    cy.window().its('__alertCalls').should('eq', 0);
  });

  it('redirects safely when local session is cleared on a protected page', () => {
    cy.visit('/');
    cy.loginAsAdmin();
    cy.visit('/finance');
    cy.url().should('include', '/finance');

    cy.window().then((win) => {
      win.localStorage.clear();
      win.sessionStorage.clear();

      const request = win.indexedDB.deleteDatabase('firebaseLocalStorageDb');
      return new Cypress.Promise<void>((resolve) => {
        request.onsuccess = () => resolve();
        request.onerror = () => resolve();
        request.onblocked = () => resolve();
      });
    });

    cy.reload();
    cy.url().should('match', /\/$/);
  });
});
