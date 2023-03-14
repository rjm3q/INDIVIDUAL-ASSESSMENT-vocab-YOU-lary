import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const showWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">Word</label>
        <input type="text" class="form-control" id="name"  value="${obj.Name || ''}" required>
      </div>
      <div class="form-group"> 
        <input type="text class="form-control" id="definition" value="${obj.Definition || ''}" required>
      </div>
      <div class="form-group"> 
        <input type="text class="form-control" id="type" value="${obj.Type || ''}" required>
      </div>
      <button id="submit-word" type="submit" class="btn btn-primary mt-3">Submit Word</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default showWordForm;
