import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const showWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="form-group" id="form-group">
      <label for="title">Word</label>
      <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Word Here" value="${obj.Name || ''}" required>
    </div>
    <div class="form-group" id="form-group">
      <label for="definition">Definition</label>
      <input type="text" class="form-control" id="definition" aria-describedby="bookTitle" placeholder="Enter Definition" value="${obj.Definition || ''}" required>
    </div>
    <div id="form-group">
      <label for="word-type">Select a Category</label>
      <select class="form-control" id="word-type" required>
        <option value="">Select an option</option>
        <option value="JavaScript">JavaScript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-button">Submit Word
    </button>
    <a id="add-a-category" href="#">Add a Category</a>
  </form>`;
  renderToDOM('#form-container', domString);
};

export default showWordForm;
