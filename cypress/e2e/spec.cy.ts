/// <reference types="cypress" />

describe("Just visits app", () => {
  it("should visit the app", () => {
    cy.visit(Cypress.config().baseUrl || "");
    const $button = cy.get("[aria-label='increment button']");
    $button.click();
    $button.click();
    cy.get("[aria-label='increment button']").should("contain", "2");
  });
});
