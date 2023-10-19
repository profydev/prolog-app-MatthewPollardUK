describe("page that loads data", () => {
  it("should show the loading spinner when loading the data then hide it afterwards", () => {
    // Create a route alias for the network request
    cy.intercept("GET", "http://localhost:3000/dashboard").as(
      "dashboardRequest",
    );

    // Visit the page
    cy.visit("http://localhost:3000/dashboard");

    // Wait for the network request to complete
    cy.wait("@dashboardRequest");

    // Check for the loading spinner
    cy.get(".donut").should("be.visible");

    // Resolve the trigger Promise (if needed)
    // sendResponse();

    // Check that the loading spinner disappears and the project list is visible
    cy.get(".donut").should("not.exist");
    cy.get(".project-list").should("be.visible");
  });
});
