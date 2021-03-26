import findButton from "../../images/findButton.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form movies">
      <div className="search-form__text-input">
        <input placeholder="Фильм" className="search-form__input"></input>
        <button type="submit" className="search-form__button">
          <img
            className="search-form__find-icon"
            src={findButton}
            alt="найти"
          />
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
