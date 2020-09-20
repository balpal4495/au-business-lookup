import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import './Home.css'

export const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div className='App-Home'>
      <Grid container spacing={1} direction='row'>
        <Grid item xs={4}>
          <Typography>
            Please enter the name of the business you are searching for and
            click search to view results
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
            spacing={1}
          >
            <TextField
              id='business-name-search'
              label='Business Name'
              variant='outlined'
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid container justify='flex-end' alignItems='flex-start'>
            <Button size='large' variant='contained' color='primary'>
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
