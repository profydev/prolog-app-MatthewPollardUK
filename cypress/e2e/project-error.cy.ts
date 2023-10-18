describe("Error Message Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      statusCode: 500,
      response: "",
    }).as("getProjects");
    cy.visit("http://localhost:3000/dashboard");
  });

  it("Displays an error message on API request failure", () => {
    cy.wait("@getProjects");
    cy.get(".error-message", { timeout: 10000 }).should("be.visible");
  });
});
