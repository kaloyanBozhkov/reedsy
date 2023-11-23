/// <reference types="cypress" />

const PORT = process.env.PORT || 5173

describe('Test main', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${PORT}`)
  })
})
