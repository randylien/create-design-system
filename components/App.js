import { hot } from 'react-hot-loader';
import React from 'react';
import { HelloMessage } from './hello-message';

const App = () => {
  return (
    <h1>
      <HelloMessage name="SuperTubes" />
    </h1>
  );
};

export default hot(module)(App);
