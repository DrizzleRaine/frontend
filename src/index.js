import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';

import db from './store'
import Main from './components/Main';
import Login from './components/Login';

ReactDOM.render(<Router history={db.history}>
	<section>
		<Route exact path="/" component={Main} />
		<Route path="/login" component={Login} />
	</section>
</Router>, document.getElementById('root'));
