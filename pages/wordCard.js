import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#wordBox', domString);
};

const showWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word">Input Word</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.Name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.Type}</h6>
        <p class"card-text">${item.Definition}</p>
        <i class="fas fa-edit btn btn-info" id="update-word--${item.firebaseKey}">Update Items</i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-word--${item.firebaseKey}">Delete Items</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#wordBox', domString);
};

export { showWords, emptyWords };
