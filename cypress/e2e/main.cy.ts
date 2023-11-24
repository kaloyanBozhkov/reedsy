import { URL } from './utils'

describe('Test main', () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  it('should load books', () => {
    cy.contains('span', 'Page 1 of 515')
  })
})
