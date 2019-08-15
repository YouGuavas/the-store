import React, {Component} from 'react';
import {getProducts} from '../utils/api';


export default class Main extends Component {
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