/// <reference types="cypress" />

describe("Validat Delete User", () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  it("Successfully assert", () => {
    cy.request({
      failOnStatusCode: false,
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/string",
    }).as("store");
    cy.get("@store").its("status").should("equal", 200);
  });
});
