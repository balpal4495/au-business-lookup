import React from 'react';
import { Typography } from '@material-ui/core';
import { Router } from '@reach/router';

import { Search } from './components/Search/Search';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Typography variant='h2' component='h2' gutterBottom>
        Business Lookup
      </Typography>

      <Router>
        <Search path='/' />
      </Router>
    </div>
  );
}
export default App;
