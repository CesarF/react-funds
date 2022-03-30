import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography } from '@material-ui/core';

import { getAccountInfo } from './redux/actions';
import Home from './modules/home/Home';
import Deposit from './modules/deposit/Deposit';


const mapToStateProps = ( state ) => ({
  account : state.operationReducer?.account,
  returns : state.operationReducer?.returns,
  error   : state.operationReducer?.error
});

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({ getAccountInfo }, dispatch );
};

function App({ account, returns, error, getAccountInfo }) {
  const [ loading, setLoading ] = React.useState(true);
  React.useEffect(() => getAccountInfo(), []);
  React.useEffect(() => {
    if(loading) {
      setLoading(false);
    }
  }, [ account, error ]);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Developed by CesarF
        </p>
      </header>
      <main>
        {loading
          ? <Typography>Loading</Typography>
          : ( 
            <Routes>
              <Route path='/' element={<Home account={ account } returns={ returns }/>} />
              <Route path='deposit' element={<Deposit />} />
            </Routes>
          )
        }
      </main>
    </div>
  );
}

export default connect( mapToStateProps, mapDispatchToProps )( App );
