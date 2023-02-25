/// <reference types="cypress" />

describe("Validate POST with list", () => {
  it("Successfully assert", () => {
    var user = [
      {
        id: 0,
        username: "string",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0,
      },
    ];
    cy.request(
      "POST",
      "https://petstore.swagger.io/v2/user/createWithList",
      user
    ).then((response) => {
      expect(response.status).equal(200);
      expect(user.username).equal(user.username);
      expect(user.email).equal(user.email);
    });
  });
});
