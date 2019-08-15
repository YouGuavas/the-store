import React, {Component} from 'react';

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      isNameValid: false,
      isPriceValid: false,
      isImageValid: false,
      isDescriptionValid: false
    }
  }

  handleClick = () => {
    alert('hi');
  }
  render(){
    return(
      <form>
        <h1>Admin</h1>
        <h3>Product</h3><input type='text' id='name'/>
        <h3>Price</h3><input type='text' id='price'/>
        <h3>Image</h3><input type='text' id='image'/>
        <h3>Description</h3><input type='textarea' id='description'/>
        <input type='button' value='submit' onClick={this.handleClick}/>
      </form>
    )
  }
}