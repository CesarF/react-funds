export const getTransactionHistory = ( userId, startDate, endDate ) => {
  // do request to backend
  let response = {
    'request_id': 5564313431,
    'transactions': [
      {
        'transaction_id': 542454524,
        'transaction_date': '2020-08-24T14:15:22Z',
        'transaction_type': 'DEPOSIT',
        'reference': 'Deposito 1',
        'amount': 234.44
      },
      {
        'transaction_id': 542454524,
        'transaction_date': '2020-08-24T14:15:22Z',
        'transaction_type': 'WITHDRAWAL',
        'reference': 'Retiro 1',
        'amount': 6000.44
      },
      {
        'transaction_id': 542454524,
        'transaction_date': '2020-08-24T14:15:22Z',
        'transaction_type': 'DEPOSIT',
        'reference': 'Deposito 2',
        'amount': 1000.44
      }
    ]
  };
  return response.transactions.map( elem => ({
    reference: elem.reference,
    amount: elem.amount,
    transactionId: elem.transaction_id,
    transactionDate: elem.transaction_date,
    transactionType: elem.transaction_type,
  }));
}