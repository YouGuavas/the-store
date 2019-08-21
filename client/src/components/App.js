import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './Main';
import Admin from './Admin';

export default class App extends Component {
	render() {
		return(
			<Router>
				<div>
					<Route exact path='/' component={Main} />
					<Route path='/admin' component={Admin} />
				</div>
			</Router>
			)
	}
}