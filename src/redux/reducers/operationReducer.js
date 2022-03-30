import { DO_INVEST, DO_WITHDRAW, SET_OPERATION, SET_ACCOUNT, SET_HISTORY } from '../actionTypes';


const INITIAL_STATE = {
  account : {},
  returns : {
    today : 2,
    todayPercentage: 0.13,
    total : 600.3,
    totalPercentage: 5.32
  },
  history : [],
  error   : undefined
};

export default function reduce( state, action ) {
  if( state === undefined ) {
    state = INITIAL_STATE;
  }
  if( action.type === SET_ACCOUNT ) {
    return {
      ...state,
      account: action.payload
    };
  }
  if( action.type === SET_OPERATION ) {
    return {
      ...state,
      operation: action.payload
    };
  }
  if( action.type === SET_HISTORY ) {
    return {
      ...state,
      history: action.payload
    };
  }
  if( action.type === DO_INVEST ) {
    state.history.push( action.payload );
    state.account.balance += action.payload.amount;
    return { ...state }
  }
  return { ...state };
};
