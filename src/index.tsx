import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {ThemeProvider} from "styled-components"
import 'typeface-lato';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';


import { createGlobalStyle } from 'styled-components';
import { appTheme } from 'theme/theme';

const container = document.getElementById('root')!;
const root = createRoot(container);
 
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato';
  }
  label {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 10px; 
    display: block;
  }
`;
 
export default GlobalStyle;

 
root.render(
  <> 
    <GlobalStyle />
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>
);

  // </React.StrictMode>
  // <React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
