/// <reference types="cypress" />

describe("Validate Get Logout", () => {
  it("Successfully Assert", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/user/logout").as(
      "logout"
    );
    cy.get("@logout").its("status").should("equal", 200);
  });
});
