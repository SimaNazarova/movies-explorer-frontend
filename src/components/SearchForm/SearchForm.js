import findButton from "../../images/findButton.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

const SearchForm = (props) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData(e.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearchSubmit(data);
  }

  return (
    <form className="search-form movies" onSubmit={handleSubmit}>
      <div className="search-form__text-input">
        <input
          placeholder="Фильм"
          className="search-form__input"
          required
          onChange={handleChange}
        ></input>
        <button type="submit" className="search-form__button">
          <img
            className="search-form__find-icon"
            src={findButton}
            alt="найти"
          />
        </button>
      </div>
      <FilterCheckbox
        onFilterCheck={props.onFilterCheck}
        handleToggle={props.handleToggle}
      />
    </form>
  );
};

export default SearchForm;
