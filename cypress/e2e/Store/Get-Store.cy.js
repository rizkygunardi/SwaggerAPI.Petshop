/// <reference types="cypress" />

describe("Validate Get User Swagger", () => {
  it("Successfully assert", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/store/order/2").as(
      "store"
    );
    cy.get("@store").its("status").should("equal", 200);
    cy.get("@store").its("body.id").should("equal", 2);
  });
});
