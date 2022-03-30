import { Typography } from '@material-ui/core';


function PercentageText({ value }){
  return(
    <Typography variant='body1'>{ value }{'%'}</Typography>
  )
}
export default PercentageText;