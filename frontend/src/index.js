// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { App } from './components';

ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
