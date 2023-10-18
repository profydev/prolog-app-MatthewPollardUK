describe("Error Message Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      statusCode: 500,
      response: "",
    }).as("getProjects");
    cy.wait("@getProjects");
  });

  it("Displays an error message on API request failure", () => {
    cy.wait(4000);
    cy.get(".error-message").should("be.visible");
  });
});
