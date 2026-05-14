# Cypress Frontend Test Matrix

| User-critical flow | Cypress suite | Coverage |
| --- | --- | --- |
| Storefront load and render | `cypress/e2e/storefront.cy.ts` | Loading state, deterministic rendering, empty products, card navigation |
| Product details | `cypress/e2e/product-detail.cy.ts` | Route-state rendering, direct URL fetch, missing product, back navigation, carousel behavior, refresh recovery, route param changes |
| Auth and route protection | `cypress/e2e/auth-protected.cy.ts` | Protected-route redirects, login modal behavior, invalid credentials, successful login, logout cancel/confirm |
| Admin drawer navigation | `cypress/e2e/admin-navigation.cy.ts` | Drawer route links, mobile auto-close logic, authenticated identity label |
| Edge and failure handling | `cypress/e2e/edge-cases.cy.ts` | Firestore failures, optional field handling, special-character rendering, session-cleared redirect safety |

## Smoke vs Full Regression

- **Smoke (PR):** `npm run e2e:smoke`
  - `storefront.cy.ts`
  - `auth-protected.cy.ts`
- **Full regression (main/release):** `npm run e2e`
  - Runs all Cypress suites in `cypress/e2e/**/*.cy.ts`
