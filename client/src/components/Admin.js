import React, {Component} from 'react';
import {postProduct} from '../utils/api';

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      isNameValid: false,
      isPriceValid: false,
      isImageValid: false,
      isDescriptionValid: false,
      data: []
    }
  }

  handleClick = () => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    //const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const data = {name, price, image: '', description};
    let {isNameValid, isPriceValid, isDescriptionValid} = this.state;
    if (name && name.match(/^[a-zA-Z -]/) && name.length > 2 && name.length < 30) isNameValid = true;
    if (price && price.match(/^\$?([1-9]{1}[0-9]{0,2}(,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/)) isPriceValid = true;
    //if (image && image.match(/\.(jpe?g|png|gif|bmp|svg)$/)) isImageValid = true;
    if (description && description.match(/^[a-zA-Z -_./?!$%#@&^()]/)) isDescriptionValid = true;
    //regexes...
    //basically validates forms against common patterns
    //ex. name must be between 3 and 30 characters and only spaces, hyphens, english alphabet
    //image must have valid file extension
    this.setState({
      isNameValid,
      isPriceValid,
      //isImageValid,
      isDescriptionValid,
      data
    }, () => {
      let isFormValid = false;
      const {isNameValid, isPriceValid, isDescriptionValid, data} = this.state;
      if (isNameValid && isPriceValid && isDescriptionValid ) isFormValid = true;
      //if all fields are valid, form is valid
      !isFormValid && alert('Form is incomplete!')
      isFormValid && postProduct(data);
      //if form is valid, upload data
    })
  }
  render(){
    return(
      <form>
        <h1>Admin</h1>
        <h3>Product</h3><input type='text' id='name'/>
        <h3>Price</h3><input type='text' id='price'/>
        {/*<h3>Image</h3><input type='file' accept='image/*' id='image'/>*/}
        <h3>Description</h3><input type='textarea' id='description'/>
        <input type='button' value='submit' onClick={this.handleClick}/>
      </form>
    )
  }
}