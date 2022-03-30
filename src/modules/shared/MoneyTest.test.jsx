import React from 'react';
import { mount } from '@cypress/react';
import MoneyText from './MoneyText';


describe('MoneyText', () => {
  it('renders the money text component', () => {
    mount(<MoneyText value={5}/>)
    cy.get('p').contains('$5')
  })
})