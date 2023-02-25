/// <reference types="cypress" />

describe("Validate Get Inventory", () => {
  it("Successfully Assert", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/store/inventory").as(
      "store"
    );
    cy.get("@store").its("status").should("equal", 200);
  });
});
