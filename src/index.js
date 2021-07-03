import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from 'store/store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  :root{

    --container-width:1230px;

    --color-primary: #1EA4CE;
    --color-primaryDark: #147594;
    --color-secondary: #F2F0FD;
    --color-white: #fff;
    --color-gray: #697488;
    --color-grayLight: #6F6F6F;
    --color-black: #191919;
    --color-shadow: rgba(93, 62, 188, 0.04);

    --color-item: #525252;
    --color-itemSecondary: #A8A8A8;

    --color-radio-border:#DFDEE2;

    --radii-sm: 2px;
    --radii-lg: 12px;
  }

  *,*::before,*::after{
    box-sizing:border-box;
  }

  html,body{
    width:100%;
    min-height:100%;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    margin:0;
    background-color: #FAFAFA;
  }

  a{
    text-decoration:none;
  }

  button{
    border:0;
    cursor: pointer;
  }

  input{
    margin:0;
    padding:0;
  }

  h1,h2,h3,h4,h5{
    margin: 0;
  }

  ul{
    padding-left:0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
