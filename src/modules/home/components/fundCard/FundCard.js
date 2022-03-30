import { Card, Grid, Typography } from '@material-ui/core';

import MoneyText from '../../../shared/MoneyText';
import PercentageText from '../../../shared/PercentageText';


function FundCard({ name, returns }) {
  return (
    <Card>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={6}>
          <Typography>{ name }</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Retorno de hoy</Typography>
          <Grid>
            <MoneyText value={returns.today}/>
            {'('}
            <PercentageText value={returns.todayPercentage}/>
            {')'}
          </Grid>
          <Typography>Retorno total</Typography>
          <Grid>
            <MoneyText value={returns.total}/>
            {'('}
            <PercentageText value={returns.totalPercentage}/>
            {')'}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

export default FundCard;