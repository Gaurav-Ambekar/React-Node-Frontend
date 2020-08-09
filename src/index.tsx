import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routing/Routes';
import { customTheme } from './config/theme';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import axiosInstance from './helpers/axiosInstance';
const fetcher = (url: string) => axiosInstance(url).then((res) => res.data);
ReactDOM.render(
  // <React.StrictMode>
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <BrowserRouter>
      <SWRConfig value={{ fetcher }}>
        <Routes />
      </SWRConfig>
    </BrowserRouter>
  </ThemeProvider>,
  // </React.StrictMode>
  document.getElementById('root')
);
