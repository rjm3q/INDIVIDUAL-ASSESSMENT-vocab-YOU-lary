import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="word">Word</label>
        <input type="text" class="form-control" id="word" aria-describedby="wordTitle" placeholder="Enter Vocab Word" value="${obj.Name || ''}" required>
      </div>
      <div class="form-group">
        <label for="define">Definition</label>
        <textarea class="form-control" placeholder="Vocab Definition" id="define" style="height: 100px">${obj.Definition || ''}</textarea>
      </div>
  `;
  renderToDOM('#form-container', domString);
};

export default addWordForm;
