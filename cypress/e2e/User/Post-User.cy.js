/// <reference types="cypress" />

describe("Validate POST user", () => {
  it("Successfully assert", () => {
    var user = {
      id: 0,
      username: "Aliceback",
      firstName: "Rizky",
      lastName: "Gunardi",
      email: "rg@email.com",
      password: "string",
      phone: "string",
      userStatus: 0,
    };
    cy.request("POST", "https://petstore.swagger.io/v2/user", user).then(
      (response) => {
        expect(response.status).equal(200);
        expect(user.username).equal(user.username);
        expect(user.email).equal(user.email);
      }
    );
  });
});
