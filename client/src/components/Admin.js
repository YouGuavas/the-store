import React, {Component} from 'react';
import {postProduct} from '../utils/api';
import {checkForm} from '../utils/utilities';

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
  postProduct = (data) => {
    postProduct(data).then((res) => {
      console.log(res);
      const fields = ['name', 'price', 'description'];
      fields.map(field => {
        console.log(field);
        document.getElementById(field).value = '';
      })
    });
  }
  handleClick = () => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const imageField = document.getElementById('image');
    const image = imageField.value;
    const imageFiles = imageField.files[0];
    const description = document.getElementById('description').value;
    const data = {name, price, image: {name: image, imageData: imageFiles}, description};
    
    let {isNameValid, isPriceValid, isImageValid, isDescriptionValid} = this.state;
    const fieldValidity = checkForm({name, price, image, description, isNameValid, isPriceValid, isImageValid, isDescriptionValid});
    console.log(fieldValidity);
    this.setState({
      isNameValid: fieldValidity.isNameValid,
      isPriceValid: fieldValidity.isPriceValid,
      isImageValid: fieldValidity.isImageValid,
      isDescriptionValid: fieldValidity.isDescriptionValid,
      data
    }, () => {
      let isFormValid = false;
      console.log(this.state);
      const {isNameValid, isPriceValid, isImageValid, isDescriptionValid, data} = this.state;
      if (isNameValid && isPriceValid && isImageValid && isDescriptionValid ) isFormValid = true;
      //if all fields are valid, form is valid
      !isFormValid && alert('Form is incomplete!')
      isFormValid && this.postProduct(data);
      //if form is valid, upload data
    })
  }
  render(){
    return(
      <form>
        <h1>Admin</h1>
        <h3>Product</h3><input type='text' id='name'/>
        <h3>Price</h3><input type='text' id='price'/>
        <h3>Image</h3><input type='file' accept='image/*' id='image'/>
        <h3>Description</h3><input type='textarea' id='description'/>
        <input type='button' value='submit' onClick={this.handleClick}/>
      </form>
    )
  }
}