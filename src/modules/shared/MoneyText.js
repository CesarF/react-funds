import { Typography } from '@material-ui/core';
import { useMemo } from 'react';


function MoneyText({ value, size }) {
  const elem = useMemo(() => {
    if( size === 'small' || size === undefined ) {
      return { variant: 'body2', component: 'p' };
    }
    if( size === 'medium' ) {
      return { variant: 'h6', component: 'h3' };
    }
    if( size === 'large' ) {
      return { variant: 'h4', component: 'h1' };
    }
  }, [ size ]);
  return(
    <Typography variant={ elem.variant } component={ elem.component }>{'$'}{ value }</Typography>
  )
}
export default MoneyText;