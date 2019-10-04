import { hot } from 'react-hot-loader'; //this module is for dev only.
import React from 'react';
import { HelloMessage } from './Demo/hello-message';
import { Pantone } from './Pantone/Pantone';
import { PantoneTheme } from './Pantone/PantoneTheme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../themes/base.js';


const App = () => {
  return (
    <div>
      <h1>
        <HelloMessage name="SuperTubes" />
      </h1>
      <Pantone bgColor="#56d9f6" color="#303030">#56d9f6</Pantone>
      <Pantone bgColor="#00b3e3" color="#303030">#00b3e3</Pantone>
      <Pantone bgColor="#143044">#143033</Pantone>
      <hr />
      <h1>Buttons</h1>
      <ThemeProvider theme={ theme.buttons }>
        <PantoneTheme theme={ theme.buttons.primary }>OK</PantoneTheme>
        <PantoneTheme theme={ theme.buttons.secondary }>Cancel</PantoneTheme>
      </ThemeProvider>
    </div>
  );
};

export default hot(module)(App);
