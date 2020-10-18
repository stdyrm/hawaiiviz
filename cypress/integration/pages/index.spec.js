/// <reference types="cypress" />
/// @ts-check

context("Routes", () => {
	beforeEach(() => {
		cy.visit("/");
	});
});

describe("visiting homepage", () => {
	it("the home page loads", () => {
		cy.contains('[data-cy="hawaiiviz"]', "This is the main body");
	});
});