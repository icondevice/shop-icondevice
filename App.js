import React from 'react';

import { Provider } from 'mobx-react';
import Routes from './src/routes';
import store from './src/mst/stores';


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;