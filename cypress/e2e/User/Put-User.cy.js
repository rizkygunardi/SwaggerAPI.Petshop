/// <reference types="cypress" />

describe("Validate POST with array", () => {
  it("Successfully assert", () => {
    var user = {
      id: 0,
      username: "Gita",
      firstName: "string",
      lastName: "string",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: 0,
    };
    cy.request("PUT", "https://petstore.swagger.io/v2/user/Rizky", user).then(
      (response) => {
        expect(response.status).equal(200);
        expect(user.username).equal(user.username);
        expect(user.email).equal(user.email);
      }
    );
  });
});
