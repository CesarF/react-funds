import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Typography } from '@material-ui/core';

import {executeTransaction} from '../../redux/actions';
import MoneyText from '../shared/MoneyText';
import ButtonGrid from './components/buttonGrid/ButtonGrid';


const mapToStateProps = ( state ) => ({
  account : state.operationReducer?.account,
  error   : state.operationReducer?.error
});

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({ executeTransaction }, dispatch );
};

const FIRST_STEP = 0;
const SECOND_STEP = 1;

function Deposit({account, error, executeTransaction}) {
  const navigate = useNavigate();

  const [ step, setStep ] = React.useState(0);
  const [ value, setValue ] = React.useState(0);
  const [ isCustom, setIsCustom ] = React.useState( false );
  const selectDepositValue = React.useCallback((selected) => {
    if(!selected) {
      setIsCustom( true );
    }
    else {
      setIsCustom( false );
      setValue( selected );
      setStep( SECOND_STEP );
    }
  },[ setValue, setIsCustom ]);
  const setCustomValue = React.useCallback((e) => {
    setValue(parseInt(e.target.value));
  }, [setValue]);
  const submitCustomValue = React.useCallback(() => {
    if(value) {
      setStep( SECOND_STEP );
    }
  }, [value]);
  const invest = React.useCallback(() => {
    executeTransaction( value );
    navigate('/');
  }, [value]);

  const chooseValueStep = React.useMemo(() => {
    return (
      <Grid>
        <Typography>Importe de inversion</Typography>
        <Typography>Ingresa el importe que quieres invertir</Typography>
        { isCustom
          ? <Grid>
              <TextField onChange={setCustomValue}/>
              <Button onClick={submitCustomValue}>{'>'}</Button>
            </Grid>
          : <MoneyText value={ value }/>
        }
        <ButtonGrid onClick={ selectDepositValue }/>
      </Grid>
    )
  },[value, isCustom]);

  const submitValueStep = React.useMemo(() => {
    return (
      <Grid>
        <Typography>¿Cuanto quieres invertir?</Typography>
        <Typography>Puedes retirar tu dinero en cualquier momento</Typography>
        <MoneyText value={ value }/>
        <Button onClick={invest}>Invertir</Button>
      </Grid>
    )
  }, [value]);

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
    >
      {step === 0
        ? chooseValueStep
        : submitValueStep
      }
    </Grid>
  )
}

export default connect( mapToStateProps, mapDispatchToProps )( Deposit );