import renderToDOM from '../../utils/renderToDom';
// change the author button and id
const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title" href="#">Pathetic Humans Attempt to Catalog words</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="show-all">View all</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="add-word">Add your own</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="cssFilter">CSS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="htmlFilter">HTML</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="jsFilter">JavaScript</a>
      </li>
        </ul>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
