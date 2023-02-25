/// <reference types="cypress" />

describe("Validate POST with array", () => {
  it("Successfully assert", () => {
    var user = [
      {
        id: 0,
        username: "heheheh",
        firstName: "string2",
        lastName: "string3",
        email: "string@email.com",
        password: "string",
        phone: "string",
        userStatus: 0,
      },
    ];
    cy.request(
      "POST",
      "https://petstore.swagger.io/v2/user/createWithArray",
      user
    ).then((response) => {
      expect(response.status).equal(200);
      expect(user.username).equal(user.username);
      expect(user.email).equal(user.email);
    });
  });
});
