/// <reference types="cypress" />

describe("Validate Get Login", () => {
  it("Successfully Assert", () => {
    cy.request(
      "GET",
      "https://petstore.swagger.io/v2/user/login?username=Aliceback&password=string"
    ).as("login");
    cy.get("@login").its("status").should("equal", 200);
  });
});
