/// <reference types="cypress" />

describe("Validate Post User Swagger", () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  it("Successfully assert", () => {
    var user = {
      id: getRndInteger(10, 200),
      petId: 0,
      quantity: 0,
      shipDate: "2023-02-20T06:27:12.135+0000",
      status: "placed",
      complete: true,
    };
    cy.request(
      "POST",
      "https://petstore.swagger.io/v2/store/order/",
      user
    ).then((response) => {
      expect(response.status).equal(200);
      expect(user.id).equal(user.id);
      expect(user.complete).equal(user.complete);
    });
  });
});
