import React from 'react';
import ReactDOM from 'react-dom';
// import AppRouter from './routes/AppRouter'
import AppProducto from './container/AppProducto';
import { Provider } from 'react-redux'
import { store } from './store/store'
ReactDOM.render(
  <React.StrictMode>
    {/* <AppRouter /> */}
    <Provider store={store}>
      <AppProducto />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

