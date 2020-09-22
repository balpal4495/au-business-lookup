import React from 'react';
import { Typography } from '@material-ui/core';
import { Router, navigate } from '@reach/router';

import { Search } from './components/Search/Search';
import { BusinessDetailsScreen } from './components/BusinessDetails/BusinessDetailsScreen';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Typography className='App-Logo' variant='h4' component='h2' gutterBottom onClick={() => navigate('/')}>
        Business Lookup
      </Typography>

      <Router>
        <Search path='/' />
        <BusinessDetailsScreen path='/business/:abn' />
      </Router>
    </div>
  );
}
export default App;
