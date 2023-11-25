describe('Test BooksTable', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load 5 books', () => {
    // can test this since it's a static app :)
    cy.contains('span', 'Page 1 of 115')
    cy.get('tbody tr').should('have.length', 5)
  })

  it('should load book summary on row click, and unload it on second click', () => {
    // can test this since it's a static app :)
    cy.contains('Summary').should('not.exist')
    const row = cy.get('tbody tr').first()
    row.contains('The Prince').click()
    cy.contains('Summary').should('exist')
    row.click()
    cy.contains('Summary').should('not.exist')
  })

  it('should change table pages and handle nav btns disabling', () => {
    cy.contains('span', 'Page 1 of')
    cy.get('[aria-label="go to previous page"]').should('have.attr', 'disabled')
    cy.get('[aria-label="go to next page"]').click()
    cy.get('[aria-label="go to previous page"]').should('not.have.attr', 'disabled')
    cy.contains('span', 'Page 2 of')
    cy.get('[aria-label="go to previous page"]').click()
    cy.get('[aria-label="go to previous page"]').should('have.attr', 'disabled')
    cy.contains('span', 'Page 1 of')
  })
})
