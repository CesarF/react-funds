import * as React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTransactions } from '../../../../redux/actions';
import HistoryItem from '../historyItem/HistoryItem';


export const mapToStateProps = ( state ) => ({
  history : state.operationReducer?.history
});

export const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({ getTransactions }, dispatch );
};

function HistoryBlock({ history, getTransactions }){
  React.useEffect(() => getTransactions(), []);
  return (
    <Grid direction='vertical'>
      { history.map( elem => <HistoryItem item={ elem }/>)}
    </Grid>
  )
}

export default connect( mapToStateProps, mapDispatchToProps )( HistoryBlock );
