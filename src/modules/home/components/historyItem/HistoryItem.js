import { Grid, Typography } from '@material-ui/core';

import MoneyText from '../../../shared/MoneyText';


function HistoryItem({ item }){
  console.error( item );
  return (
    <Grid direction='vertical'>
      <MoneyText value={ item.amount }></MoneyText>
      <Grid>
        <Typography variant='body1'>{ item.reference }</Typography>
        <Typography variant='body1'>{ item.transactionDate.toISOString() }</Typography>
      </Grid>
    </Grid>
  )
}

export default HistoryItem;
