import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const Register = () => {
  return (
    <AuthForm
      title="Добро пожаловать!"
      subtitle="Уже зарегистрированы?"
      button="Зарегистрироваться"
      path="/sign-in"
      subtitleLink="Войти"
      className="register"
      aria-label="зарегистрироваться"
    >
      <label className="auth__input-label" htmlFor="name">
        Имя
      </label>
      <input
        className="auth__input"
        name="name"
        id="name"
        required
        type="email"
      />
      <span className="auth__error" id="name"></span>
      <label className="auth__input-label" htmlFor="email">
        Email
      </label>
      <input
        className="auth__input"
        name="email"
        required
        id="email"
        type="email"
      />
      <span className="auth__error" id="email"></span>
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
      />
      <span className="auth__error" id="password">
        Что-то пошло не так
      </span>
    </AuthForm>
  );
};

export default Register;
