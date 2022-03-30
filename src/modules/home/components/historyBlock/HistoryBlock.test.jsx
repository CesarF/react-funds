import React from 'react';
import { mount } from '@cypress/react';
import HistoryBlock from './HistoryBlock';


describe('HistoryBlock', () => {
  const items = [
    {
      amount: 1000,
      reference: 'test',
      transactionDate: new Date()
    },
    {
      amount: 1000,
      reference: 'test',
      transactionDate: new Date()
    },
    {
      amount: 1000,
      reference: 'test',
      transactionDate: new Date()
    }
  ]
  it('renders a history block', () => {
    mount(<HistoryBlock history={items}/>);
    cy.get('[data-id=history-block]').should('have.length', items.length);
  })
})