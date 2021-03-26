import React from "react";
import AuthForm from "../AuthForm/AuthForm";

const Login = () => {
  return (
    <AuthForm
      title="Рады видеть!"
      subtitle="Уже зарегистрированы?"
      button="Войти"
      path="/sign-up"
      subtitleLink="Регистрация"
      className="login"
      aria-label="войти в аккаунт"
    >
      <fieldset className="auth__fieldset">
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
      </fieldset>
      <fieldset className="auth__fieldset">
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
        <span className="auth__error" id="password"></span>
      </fieldset>
    </AuthForm>
  );
};

export default Login;
