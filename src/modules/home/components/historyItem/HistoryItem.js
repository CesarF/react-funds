import { Grid, Typography } from '@material-ui/core';

import MoneyText from '../../../shared/MoneyText';


function HistoryItem({ item }){
  return (
    <Grid direction='vertical'>
      <MoneyText value={ item.amount }></MoneyText>
      <Grid>
        <Typography>{ item.reference }</Typography>
        <Typography>{ item.transactionDate }</Typography>
      </Grid>
    </Grid>
  )
}

export default HistoryItem;
