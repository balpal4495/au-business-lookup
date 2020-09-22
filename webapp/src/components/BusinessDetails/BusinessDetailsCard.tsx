import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { AbnLookupResponse } from '../../shared/types';

interface Props {
  business: AbnLookupResponse;
}
export const BusinessDetailsCard = (props: Props) => {
  const { business } = props;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              Business Name
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.EntityName}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              ABN
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.Abn}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              ABN Status
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.AbnStatus}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              ACN
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.Acn}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              Address Date
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.AddressDate}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              Address Postcode
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.AddressPostcode}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              Address State
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.AddressState}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              Type Code
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.EntityTypeCode}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              Type Name
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.EntityTypeName}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify='center'>
            <Typography variant='h6' component='h1'>
              GST
            </Typography>
          </Grid>
          <Grid container justify='center'>
            <Paper>
              <Typography variant='h6' component='h1'>
                {business.Gst ? business.Gst : 'N/A'}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
