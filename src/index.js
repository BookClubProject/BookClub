import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EditorStore from './Store/Store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store = {EditorStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

 
);
reportWebVitals();
