import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import "./config"
import routes from './routes'
import configureStore from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      {routes}
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
