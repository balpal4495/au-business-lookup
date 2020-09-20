import React from 'react';
import { Typography } from '@material-ui/core';
import { Router } from '@reach/router';

import { Home } from './components/Home/Home';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Typography variant='h2' component='h2' gutterBottom>
        Business Lookup
      </Typography>

      <Router>
        <Home path='/' />
      </Router>
    </div>
  );
}
export default App;
