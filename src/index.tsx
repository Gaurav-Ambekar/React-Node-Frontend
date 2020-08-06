import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import { customTheme } from './config/theme';
import store from './rtk/store';
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);
