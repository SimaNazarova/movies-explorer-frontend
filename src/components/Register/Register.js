import React from "react";
import AuthForm from "../AuthForm/AuthForm";

import useFormWithValidation from "../../utils/validation";

const Register = (props) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(values.name, values.email, values.password);
    resetForm();
  };

  return (
    <AuthForm
      title="Добро пожаловать!"
      subtitle="Уже зарегистрированы?"
      button="Зарегистрироваться"
      path="/sign-in"
      subtitleLink="Войти"
      className="register"
      aria-label="зарегистрироваться"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="auth__input-label" htmlFor="name">
        Имя
      </label>
      <input
        className="auth__input"
        name="name"
        id="name"
        required
        type="text"
        onChange={handleChange}
        minLength="2"
      />
      <span className="auth__error" id="name">
        {errors.name}
      </span>
      <label className="auth__input-label" htmlFor="email">
        Email
      </label>
      <input
        className="auth__input"
        name="email"
        required
        id="email"
        type="email"
        onChange={handleChange}
        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
      />
      <span className="auth__error" id="email">
        {errors.email}
      </span>
      <label className="auth__input-label" htmlFor="password">
        Пароль
      </label>
      <input
        className="auth__input"
        name="password"
        type="password"
        minLength="6"
        required
        id="password"
        onChange={handleChange}
      />
      <span className="auth__error" id="password">
        {errors.password}
      </span>
    </AuthForm>
  );
};

export default Register;
