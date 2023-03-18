import renderToDOM from '../../utils/renderToDom';

const filterBar = () => {
  const domString = `<div id="filtering">
  <label for="filter-value">Filter by:</label>
  <select class="form-control" id="filter-value" required>
    <option value=""></option>
    <option value="all">All</option>
    <option value="JavaScript">JavaScript</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
  </select>
  <span id="filter-btn-div">
  <button type="button" class="btn btn-primary" id="filter-btn">Filter!</button>
  </span>
</div>
<div id="ordering">
  <label for="order-value">Order by:</label>
  <select class="form-control" id="order-value" required>
    <option value=""></option>
    <option value="A-Z">A-Z</option>
    <option value="Newest">Newest</option>
    <option value="Oldest">Oldest</option>
  </select>
  <span id="filter-btn-div">
  <button type="button" class="btn btn-primary" id="order-btn">Order!</button>
  </span>
</div>
`;
  renderToDOM('#filter-word', domString);
};

export default filterBar;
