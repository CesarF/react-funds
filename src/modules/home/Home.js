import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

import MoneyText from '../shared/MoneyText';
import FundCard from './components/fundCard/FundCard';
import HistoryBlock from './components/historyBlock/HistoryBlock';
import useHomeStyles from './homeStyles';


function Home({ account, returns }) {
  const classes = useHomeStyles();

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
    >
      <div className={ classes.rootHome }>
        {/* TITLE */}
        <Typography variant='h6' component='h1'>
          Mi Portafolio
        </Typography>
        {/* ACCOUNT FUNDS */}
        <MoneyText
          value={ account.balance }
        />
        {/* SUBTITLE */}
        <Typography variant='h6' component='h1'>
          Planes actuales
        </Typography>
        {/* FONDOS */}
        <FundCard name={ account.fundName } returns={ returns }/>
        {/* BUTTONS */}
        <Grid direction='horizontal'>
          <Link to='/deposit'>Depositar</Link>
          <Button >Retirar</Button>
        </Grid>
        {/* HISTORY */}
        <HistoryBlock />
      </div>
    </Grid>
  )
}

export default Home;