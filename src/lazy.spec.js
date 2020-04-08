describe('dynamic import', () => {
  it('loads', () => {
    cy.wrap(import('./lazy-add'))
      .invoke('default', 2, 3).should('equal', 5)
  })
})
