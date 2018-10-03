import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faCheckSquare,
	faCoffee,
	faTasks,
	faCalculator,
	faDatabase,
	faDesktop
} from '@fortawesome/free-solid-svg-icons';

library.add(
	fab,
	faTasks,
	faCalculator,
	faDatabase,
	faDesktop,
	faCheckSquare,
	faCoffee
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
