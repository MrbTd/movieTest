import React from 'react'
import { Box, Grid } from '@mui/material';
import SessionOne from './components/SessionOne'
import SessionTwo from './components/SessionTwo'
import SessionThree from './components/SessionThree'

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="row">
        <Grid item xs sx={{ minHeight: '100vh', borderRightWidth: 0.1, borderRightColor: '#DCDFEB', borderRightStyle: 'solid' }}>
          <SessionOne />
        </Grid>
        <Grid item xs={8}>
          <SessionTwo />
        </Grid>
        <Grid item xs sx={{ minHeight: '100vh', borderLeftWidth: 0.1, borderLeftColor: '#DCDFEB', borderLeftStyle: 'solid' }}>
          <SessionThree />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App