import { getData } from './services/accountInfo';
import { getTransactionHistory } from './services/accountTransactions';
import { DO_INVEST, DO_WITHDRAW, SET_OPERATION, SET_ACCOUNT, SET_HISTORY } from "./actionTypes";
import { assignFund } from './services/funding';


export const executeTransaction = ( value ) => async ( dispatch ) => {
  try {
    assignFund( 1, value );
    return dispatch({
      type    : DO_INVEST,
      payload : {
        transactionDate: new Date().toISOString(),
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

/*export const setToInvest = () => async ( dispatch ) => {
  return dispatch({ type: SET_OPERATION, payload: INVEST })
}

export const setToRemove = () => async ( dispatch ) => {
  return dispatch({ type: SET_OPERATION, payload: REMOVE })
}*/