import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './views/Home';
import store from './store';

const App = () => {
  return(
     <Provider store={ store }>
       <Home />
     </Provider>
  )
}

export default App;
