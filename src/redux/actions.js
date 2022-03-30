import { getData } from './services/accountInfo';
import { getTransactionHistory } from './services/accountTransactions';
import { assignFund } from './services/funding';
import { DO_INVEST, DO_WITHDRAW, SET_ACCOUNT, SET_HISTORY } from "./actionTypes";


export const executeTransaction = ( value ) => async ( dispatch ) => {
  try {
    assignFund( 1, value );
    return dispatch({
      type    : DO_INVEST,
      payload : {
        transactionDate: new Date(),
        transactionType: 'DEPOSIT',
        reference: 'Mi portafolio',
        amount: value
      }
      //user id should be loaded from session
    });
  }
  catch( error ) {
    console.error( 'Error: ', error.message );
    dispatch({
      type  : DO_INVEST,
      error : error.message
    });
  }
}

export const getAccountInfo = () => async ( dispatch ) => {
  try {
    return dispatch({
      type    : SET_ACCOUNT,
      payload : getData(1)
      //user id should be loaded from session
    });
  }
  catch( error ) {
    console.error( 'Error: ', error.message );
    dispatch({
      type  : SET_ACCOUNT,
      error : error.message
    });
  }
}

export const getTransactions = () => async ( dispatch, getState ) => {
  try {
    return dispatch({
      type    : SET_HISTORY,
      payload : getState().operationReducer.history.length > 0
        ? getState().operationReducer.history
        : getTransactionHistory(1)
        //user id should be loaded from session
    });
  }
  catch( error ) {
    console.error( 'Error: ', error.message );
    dispatch({
      type  : SET_HISTORY,
      error : error.message
    });
  }
}