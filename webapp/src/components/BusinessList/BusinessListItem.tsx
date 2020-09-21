import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { Business } from '../../shared/types';

interface Props {
  business: Business;
}

export const BusinessListItem = (props: Props) => {
  const { business } = props;

  return (
    <>
      <Paper elevation={3}>
        <Card variant='outlined'>
          <CardContent>
            <Typography color='textSecondary'>
              Business Name
            </Typography>
            <Typography variant='h5' component='h2'>
              {business.Name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
};
