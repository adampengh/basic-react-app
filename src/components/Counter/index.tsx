import { RootState } from '../../redux/store'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../..//redux/hooks'
import { decrement, increment } from '../../redux/reducers/counter'
import { Button, Grid, Input, TextField } from '@mui/material'

export function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <Grid container>
      <Grid item alignContent={'center'} alignItems={'center'} display={'flex'}>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          variant='contained'
          color='primary'
        >
          Increment
        </Button>
        <TextField id="outlined-basic" variant="outlined" value={count} sx={{
          margin: '0 10px',
          '& input': {
            padding: '8px 14px',
            maxWidth: 40,
            textAlign: 'center',
          }
         }} />
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          variant='contained'
          color='primary'
        >
          Decrement
        </Button>
      </Grid>
    </Grid>
  )
}
