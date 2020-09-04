import React from 'react'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fc0'
    },
    link: '#c60'
  }
});



const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
);

export default Root;