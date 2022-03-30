import React from 'react';
import { mount } from '@cypress/react';
import HistoryItem from './HistoryItem';


describe('HistoryItem', () => {
  const item = {
    amount: 1000,
    reference: 'test',
    transactionDate: new Date()
  }
  it('renders a history item', () => {
    mount(<HistoryItem item={item}/>);
    cy.get('p').contains(item.amount);
    cy.get('p').contains(item.reference);
    cy.get('p').contains(item.transactionDate.toISOString());
  })
})