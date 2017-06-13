import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store';
import '../public/less/main.less';
import MainLayout from './components/layouts/main-layout';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path ="/" component={MainLayout} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
