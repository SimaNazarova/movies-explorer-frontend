import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../utils/validation";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
  } = useFormWithValidation();

  const isInputValid =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  return (
    <>
      <Header navbar="logged" loggedIn={props.loggedIn} />
      <div className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <span className="auth__error" id="name">
            {errors.name}
          </span>
          <div className="profile__form-name">
            <label
              className="profile__input-label profile__input-label-name"
              htmlFor="name"
            >
              Имя
            </label>
            <input
              className="profile__input profile__input-name"
              name="name"
              id="name"
              required
              type="text"
              value={values.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="profile__form-email">
            <label
              className="profile__input-label profile__input-label-email"
              htmlFor="email"
            >
              Почта
            </label>

            <input
              className="profile__input profile__input-email"
              name="email"
              required
              id="email"
              type="email"
              value={values.email || ""}
              onChange={handleChange}
            />
          </div>
          <span className="auth__error" id="email">
            {errors.email}
          </span>
          <button
            className={`profile__button ${
              !isInputValid && "profile__button_inactive"
            }`}
            type="submit"
          >
            Редактировать
          </button>

          <Link to="/" className="profile__exit" onClick={props.handleSignOut}>
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </>
  );
}

export default Profile;
