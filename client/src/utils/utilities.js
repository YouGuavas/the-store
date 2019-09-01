
const checkForm = (data) => {
  const {name, price, imageName, description} = data;
  let {isNameValid, isPriceValid, isImageValid, isDescriptionValid} = data;
  if (name && name.match(/^[a-zA-Z -]/) && name.length > 2 && name.length < 30) isNameValid = true;
  if (price && price.match(/^\$?([1-9]{1}[0-9]{0,2}(,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/)) isPriceValid = true;
  if (imageName && imageName.match(/\.(jpe?g|png|gif|bmp|svg)$/)) isImageValid = true;
  if (description && description.match(/^[a-zA-Z -_./?!$%#@&^()]/)) isDescriptionValid = true;
  //regexes...
  //basically validates forms against common patterns
  //ex. name must be between 3 and 30 characters and only spaces, hyphens, english alphabet
  //image must have valid file extension
  return {isNameValid, isPriceValid, isImageValid, isDescriptionValid}; 
}

export {checkForm};