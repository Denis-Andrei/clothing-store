import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'; 

import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <PersistGate persistor={persistor}>
                    <ScrollToTop>
                        <App />
                    </ScrollToTop>
                </PersistGate>
            </HashRouter>
        </Provider>        
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
