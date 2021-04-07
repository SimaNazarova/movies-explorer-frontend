function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__title" htmlFor="filter-checkbox">
        Короткометражки
      </label>
      <input
        type="checkbox"
        id="filter-checkbox"
        className="filter-checkbox__input"
        checked={props.onFilterCheck}
        onChange={props.handleToggle}
      ></input>
    </div>
  );
}

export default FilterCheckbox;
