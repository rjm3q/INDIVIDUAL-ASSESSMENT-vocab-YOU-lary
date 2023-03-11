import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">Language for Programming</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Language Name" value="${obj.word || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Language Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Language
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  // selectAuthor(`${user.uid}, ${obj.author_id || ''}`);
};

export default addWordForm;
