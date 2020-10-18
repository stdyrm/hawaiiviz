/// <reference types="cypress" />

context("visit page", () => {
	beforeEach(() => {
		cy.visit("/apps/politics/campaign-expenditures");
	});
});

describe("app initialization", () => {
	it("fetches data", () => {
		cy.server();
		cy.get(["data-cy='campaign-treemap'"]);
	});
});
