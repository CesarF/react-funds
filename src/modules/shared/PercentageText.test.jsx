import React from 'react';
import { mount } from '@cypress/react';
import PercentageText from './PercentageText';


describe('PercentageText', () => {
  it('renders the percentage text component', () => {
    mount(<PercentageText value={5}/>)
    cy.get('p').contains('5%')
  })
})