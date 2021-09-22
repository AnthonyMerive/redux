import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'

// import AppRouter from './routes/AppRouter'
// import AppProducto from './container/AppProducto';
import AppCitas from './container/AppCitas'

import './index.css'

ReactDOM.render(
  <React.StrictMode>

    {/* <AppRouter /> */}

    {/* <Provider store={store}>
      <AppProducto />
    </Provider> */}

    <Provider store={store}>
    <AppCitas />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

