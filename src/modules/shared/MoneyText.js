import { Typography } from '@material-ui/core';


function MoneyText({ value }) {
  return(
    <Typography>{'$ '}{ value }</Typography>
  )
}
export default MoneyText;