import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from "common_components/pouch/redux_provider";

import './style/style.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './redux/reducer/reducer';
import config from './redux/config/config';

ReactDOM.render(
    <ReduxProvider
        reducers={reducer}
        config={config}
    >
        <App />
    </ReduxProvider>
    , document.getElementById('root'));
registerServiceWorker();
