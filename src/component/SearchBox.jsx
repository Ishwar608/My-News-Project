import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

export default function SearchBox({search,inputHandler,inputSubmit}) {
  return (
    <Grid component="form" onSubmit={inputSubmit}>
      <TextField
        sx={{width:'40%'}}
        label='Search'
        placeholder='Search'
        margin='normal'
        variant="outlined"
        value={search}
        onChange={(e)=>inputHandler(e.target.value)}
      />
      <Button type='submit' color='primary' variant="contained" sx={{ m: 2, mt: 3 }} >Search</Button>
    </Grid>
  )
}
