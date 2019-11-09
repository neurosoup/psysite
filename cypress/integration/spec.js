describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to /blog', () => {
    cy.get('nav a')
      .contains('blog')
      .click();
    cy.url().should('include', '/blog');
  });
});
