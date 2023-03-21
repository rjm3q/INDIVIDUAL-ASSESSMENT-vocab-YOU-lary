const clearDom = () => {
  document.querySelector('#wordBox').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#app').innerHTML = '';
};

export default clearDom;
