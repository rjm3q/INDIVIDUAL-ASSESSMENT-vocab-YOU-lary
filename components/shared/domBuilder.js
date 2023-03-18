import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-word">FILTER</div>
  <div id="add-button">ADD BUTTON</div>
  <div id="wordBox">WORDS</div> 
  <div id="form-container">FORMS</div>
  <div id="view">VIEWS</div> 
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
