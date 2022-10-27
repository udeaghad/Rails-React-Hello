import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/configureStore';

ReactDOM.render( 
  <Router>  
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root'),
);