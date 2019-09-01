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
      image: null,
      name: '',
      price: '',
      description: ''
    }
  }
  postProduct = (data) => {
    postProduct(data).then((res) => {
      const fields = ['name', 'price', 'image', 'description'];
      fields.map(field => {
        document.getElementById(field).value = '';
        return field;
      })
    });
  }
  handleText = (e) => {
    const key = e.target.id;
    this.setState({
      [key]: e.target.value
    })
  }
  handleChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  }
  handleClick = () => {
    const {name, price, description, image} = this.state;
    let imageName;
    if (image) imageName = image.name;
    let {isNameValid, isPriceValid, isImageValid, isDescriptionValid} = this.state;
    const fieldValidity = checkForm({name, price, imageName, description, isNameValid, isPriceValid, isImageValid, isDescriptionValid});
    this.setState({
      isNameValid: fieldValidity.isNameValid,
      isPriceValid: fieldValidity.isPriceValid,
      isImageValid: fieldValidity.isImageValid,
      isDescriptionValid: fieldValidity.isDescriptionValid
    }, () => {
      let isFormValid = false;
      const {isNameValid, isPriceValid, isImageValid, isDescriptionValid, name, price, image, description} = this.state;
      const data = new FormData();
      const dataArray = [['name', name], ['price', price], ['image', image], ['description', description]];
      if (isNameValid && isPriceValid && isImageValid && isDescriptionValid ) isFormValid = true;
      //if all fields are valid, form is valid
      !isFormValid && alert('Form is incomplete!')
      dataArray.map(item => {
        data.append(item[0], item[1]);
        return null;
      });
      isFormValid && this.postProduct(data);
      //if form is valid, upload data
    })
  }
  render(){
    return(
      <form>
        <h1>Admin</h1>
        <h3>Product</h3><input type='text' id='name' onChange={this.handleText}/>
        <h3>Price</h3><input type='text' id='price' onChange={this.handleText}/>
        <h3>Image</h3><input type='file' accept='image/*' id='image' onChange={this.handleChange}/>
        <h3>Description</h3><input type='textarea' id='description' onChange={this.handleText}/>
        <input type='button' value='submit' onClick={this.handleClick}/>
      </form>
    )
  }
}