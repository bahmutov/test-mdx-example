import React from 'react'
/* eslint-disable import/no-webpack-loader-syntax */
import Content from '!babel-loader!mdx-loader!./content.mdx'
// import {importMDX} from 'mdx.macro'

describe('content.mdx', () => {
  let Component

  /* eslint-disable-next-line */
  // before(() => {
  //   return importMDX('./content.mdx').then((x) => {
  //     debugger
  //   })
  // })

  it('renders', () => {
    cy.mount(<Content />)
  })
})
