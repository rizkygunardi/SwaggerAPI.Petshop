/// <reference types="cypress" />

describe("Validate Get Username", () => {
  it("Successfully Assert", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/user/Aliceback").as(
      "username"
    );
    cy.get("@username").its("status").should("equal", 200);
    cy.get("@username").its("body.email").should("equal", "rg@email.com");
  });
});
