import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("user visits duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

When("user visits google.com", () => {
  cy.visit("https://www.google.com");
});

Then("duckduckgo.com search bar will display", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});

Then("google.com search bar will display", () => {
  cy.get('input').should(
    "have.class", "gLFyf"
  );
});