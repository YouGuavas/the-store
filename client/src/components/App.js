import React, {Component} from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getProducts} from '../utils/api';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			products: []
		}
	}
	getProducts = () => {
		getProducts().then(products => {
			this.setState({products})
		})
	}
	componentDidMount(){
		this.getProducts();
	}
	render() {
		return(
				<div>{this.state.products.map(item => (JSON.stringify(item)))}</div>
			)
	}
}