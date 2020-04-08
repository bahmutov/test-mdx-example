import React from 'react'
import App from './App'
import {mount} from 'cypress-react-unit-test'

describe('App', () => {
  // https://github.com/bahmutov/test-mdx-example/issues/1
  it.only('renders', () => {
    mount(<App />)
    cy.get('[data-cy=demo]')
      .should('have.text', 'This is my demo')
  })
})
