import { getWords, makeWords, updateWords, oneThing } from '../../api/promise';
import { showWords } from '../../pages/words';
import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit')) {
      const payload = {
        Name: document.querySelector('#Name').value,
        Description: document.querySelector('#desc').value,
        Type: document.querySelector('#Type').value,
        Time: document.querySelector('#time').value,
      };
      makeWords(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateWords(patchPayload).then(() => {
          getWords(uid).then(showWords);
        });
      });
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        Name: document.querySelector('#Name').value,
        Description: document.querySelector('#desc').value,
        Type: document.querySelector('#Type').value,
        Time: document.querySelector('#time').value,
        firebaseKey,
      };
      payload.firebaseKey = firebaseKey;
      oneThing(firebaseKey).then() => {
        updateWords(payload).then(() => {
          getWords(uid).then(showWords);
        });
    }
    }
  document.querySelector('#form-display').addEventListener('click', (e) => {
    if (e.target.id.includes('add-a-thing')) {
      clearDOM();
      const domString = `
      <div id="add-category-div>
        <label for="new-category">New Thing</label>
        <input id="new-category">
        <button id="new-category-btn">Do the thing!!</button>
      </div>
      `;

      renderToDOM(domString, '#form-display');
    }
  });
};

export default formEvents;
