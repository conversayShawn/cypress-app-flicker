describe("Unexpected Cypress App restart on superdomain change from baseUrl", () => {
  before(() => {
    cy.log("BEFORE HOOK");
  });

  beforeEach(() => {
    cy.log("BEFORE-EACH HOOK");
  });

  // RUN EACH TEST INDIVIDUALLY USING `it.only()`, RESTARTING CYPRESS EACH TIME

  it("Cypress App restarts when using a different superdomain", () => {
    // NAVIGATING TO A DIFFERENT SUPERDOMAIN RESTARTS THE CYPRESS APP
    cy.visit("https://www.amazon.com/");
  });

  it.only("Cypress App doesn't restart, but the browser flickers", () => {
    // ADDING `cy.visit('')` AVOIDS APP RESTART BUT CAUSES FLICKERING
    cy.visit("");
    cy.visit("https://www.amazon.com/");
  });

  it("Using `origin()`. App restarts, but browser flickers", () => {
    // USING `cy.origin()` WITHOUT `cy.visit('')` WILL RESTART THE APP
    cy.origin("https://www.amazon.com", () => {
      cy.visit("/");
    });
  });

  it("Using `origin()`. App doesn't restart, browser flickers", () => {
    // APP WON'T RESTART, BUT BROWSER WILL FLICKER
    cy.visit("");
    cy.origin("https://www.amazon.com", () => {
      cy.visit("/");
    });
  });
});
