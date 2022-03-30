export const getData = ( userId ) => {
  // do request to backend
  let response = {
    'request_id': 5564313431,
    'account_status': 'ACTIVE',
    'fund_name': 'FONDO CESAR',
    'currency': 'COP',
    'balance': 3376.34,
    'invested_balance': 453.23,
    'available_withdrawal': 2367.23
  };
  return {
    ...response,
    requestId          : response.request_id,
    accountStatus      : response.account_status,
    fundName           : response.fund_name,
    investedBalance    : response.invested_balance,
    availableWithdrawal: response.available_withdrawal
  }
}