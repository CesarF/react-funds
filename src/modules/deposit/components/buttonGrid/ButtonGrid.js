import { useCallback } from 'react';
import { Button, Grid } from '@material-ui/core';


const btnOptions = [
  [50, 100, 250],
  [500, 1000, undefined],
]

function ButtonGrid({ onClick }){

  const btnClick = useCallback((elem) => {
    onClick( elem );
  }, [ onClick ]);
  return (
    <Grid
      container
      direction='column'
      justify='space-between'
    >
      { btnOptions.map( row => 
        <Grid
          container
          direction='row'
        >
          { row.map( value =>
            <Grid
              item
              xs={ 3 }
            >
              { value === undefined 
                ? <Button onClick={ () => btnClick( value ) }>{'$...'}</Button>
                : <Button onClick={ () => btnClick( value ) }>{'$'}{ value }</Button>
              }
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  )
}

export default ButtonGrid;