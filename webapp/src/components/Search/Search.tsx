import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import {
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import './Search.css';
import { useCallback } from 'react';
import { Business } from '../../shared/types';
import { searchByName } from '../../services/businessLookupApi';

export const Search: React.FC<RouteComponentProps> = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchErrorMessage, setSearchErrorMessage] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [businesses, setBusinesses] = useState<Business[]>([]);

  // const handleSearchSubmit = () => {
  //   setSearchErrorMessage('');
  //   if (searchText.length === 0) {
  //     setSearchErrorMessage(
  //       'Please enter a business name before clicking search'
  //     );
  //   }
  // };

  const handleSearchSubmit = useCallback(async () => {
    setSearchErrorMessage('');
    setBusinesses([]);
    if (searchText.length > 0) {
      setIsProcessing(true);
      const res = await searchByName(searchText);
      if (res) {
        console.log('res', res);
        setIsProcessing(false);
        setBusinesses(res.Names);
      }
    } else {
      setSearchErrorMessage(
        'Please enter a business name before clicking search'
      );
      setIsProcessing(false);
    }
  }, [searchText]);

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProcessing(false);
    setSearchErrorMessage('');
    setSearchText(e.target.value);
  };

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
              onChange={handleSearchOnChange}
              value={searchText}
              error={searchErrorMessage.length > 0}
              helperText={searchErrorMessage}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid container justify='flex-end' alignItems='flex-start'>
            <Button
              size='large'
              variant='contained'
              color='primary'
              onClick={handleSearchSubmit}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {isProcessing && <LinearProgress />}
      <Grid container direction='row'>
        <Grid item xs={10}>
          {businesses.length > 0 && <div>found {businesses.length}</div>}
        </Grid>
      </Grid>
    </div>
  );
};
