/// <reference types="cypress" />

describe("Validate Get User Swagger", () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  it("Successfully assert", () => {
    cy.request({
      failOnStatusCode: false,
      method: "DELETE",
      url:
        "https://petstore.swagger.io/v2/store/order/" + getRndInteger(1, 100),
    }).as("store");
    cy.get("@store").its("status").should("equal", 204);
    cy.get("@store").its("body.id").should("equal", 2);
  });
});
