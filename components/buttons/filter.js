import renderToDOM from '../../utils/renderToDom';

const filterBar = () => {
  const domString = `<label for="filter-language-select-input" class="form-label">Select language</label>
    <select id="filter-language-select-input" class="form-select" aria-label="language select">
      <option selected value="All">All</option>
      <option value="JavaScript"}">JS</option>
      <option value="HTML"}">HTML</option>
      <option value="CSS"}">CSS</option>
      <option value="Other"}">Other</option>
    </select>`;
  renderToDOM('#filter-box', domString);
};

export default filterBar;
