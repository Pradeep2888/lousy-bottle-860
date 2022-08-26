import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {theme} from "./theme/theme.config"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppContext from './Context/AppContext';
import LoginAuth from './Context/LoginAuth';
import { BrowserRouter } from 'react-router-dom';
import TripAuth from './Context/TripAuth';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  
    <ChakraProvider theme={theme}>
      <BrowserRouter>
    <AppContext>
      <LoginAuth>
        <TripAuth>
    <App />
    </TripAuth>
    </LoginAuth>
    </AppContext>
    </BrowserRouter>
    </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
