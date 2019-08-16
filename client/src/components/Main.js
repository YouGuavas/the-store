import React, {Component} from 'react';
import {getProducts} from '../utils/api';
import Nav from './Nav';
import image from '../images/300.jpg';


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
      <div className='container-fluid'>
        <Nav />
        <div className='row'>
      {
        this.state.products.map((item, index) => 
          (
            <div key={index} className='container card col-sm-3 product'>
              <h5 className='card-title'>{item.name}</h5>
              <img className='row img-thumbnail img-fluid mx-auto' src={image}/>
              <div className='card-body'>
                <h6 className='card-subtitle'>{item.price}</h6>
                <p className='card-text'>{item.description}</p>
              </div>
            </div>
          )
        )
      }
      </div>
      </div>
    )
  }
}