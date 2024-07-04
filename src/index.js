// import React from "react";
// import ReactDOM from 'react-dom'
// import { Provider } from "./context/context";


// import App from './App'
// import './index.css'

// ReactDOM.render(
// <Provider>
// <App/>
// </Provider>,
//  document.getElementById('root'));
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "./context/context";
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Provider>
    <App />
  </Provider>
);