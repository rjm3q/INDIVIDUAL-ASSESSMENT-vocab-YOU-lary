import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const showWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter A Vocabulary" value="${obj.Name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.Definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      <label for="category">Language</label>
        <select class="form-control" placeholder="Select Category" id="language" name="vocabCategory" value="${obj.Type || ''}" required>
        <option value="">Select a Language</option>
          <option value="HTML" ${obj.Type === 'HTML' ? 'selected' : ''}>HTML</option>
          <option value="CSS" ${obj.Type === 'CSS' ? 'selected' : ''}>CSS</option>
          <option value="JavaScript" ${obj.Type === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
        </select>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;
  renderToDOM('#form-container', domString);
};

export default showWordForm;
