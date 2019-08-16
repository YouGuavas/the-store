import React, {Component} from 'react';
import {getProducts} from '../utils/api';
import Nav from './Nav';


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
      <div>
        <Nav />
      {
        this.state.products.map((item, index) => 
          (
            <span key={index} className='col-sm'>
              <h5>{item.name}</h5>
              <span>{item.price}</span>
              <p>{item.description}</p>
            </span>
          )
        )
      }
      </div>
    )
  }
}