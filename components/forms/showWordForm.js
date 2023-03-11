import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const showWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="image">Name</label>
        <input type="text" class="form-control" id="name"  value="${obj.Name || ''}" required>
      </div>
        <label for="title">Description</label>
        <input type="email" class="form-control" id="email" value="${obj.email || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default showWordForm;
