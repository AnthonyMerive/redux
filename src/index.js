import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'

import AppRouter from './routes/AppRouter'
// import AppProducto from './container/AppProducto';
// import AppCitas from './container/AppCitas'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <AppRouter />
    </Provider>

    {/* <Provider store={store}>
      <AppProducto />
    </Provider> */}

    {/*ejercicio 2*/}

    {/* <Provider store={store}>
    <AppCitas />
    </Provider> */}



  </React.StrictMode>,
  document.getElementById('root')
);

