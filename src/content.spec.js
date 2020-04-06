import React from 'react'
/* eslint-disable import/no-webpack-loader-syntax */
import Content from '!babel-loader!mdx-loader!./content.mdx'
import {mount} from 'cypress-react-unit-test'

describe('content.mdx', () => {
  it('renders', () => {
    mount(<Content />)
    cy.get('[data-cy=demo]')
      .should('have.text', 'This is my demo')
  })
})
