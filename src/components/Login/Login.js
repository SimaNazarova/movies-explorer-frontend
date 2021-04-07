import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import useFormWithValidation from "../../utils/validation";

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
    resetForm();
  };

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  return (
    <AuthForm
      title="Рады видеть!"
      subtitle="Уже зарегистрированы?"
      button="Войти"
      path="/sign-up"
      subtitleLink="Регистрация"
      className="login"
      aria-label="войти в аккаунт"
      onSubmit={handleSubmit}
      isValid={isValid}
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
          onChange={handleChange}
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        />
        <span className="auth__error" id="email">
          {errors.email}
        </span>
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
          onChange={handleChange}
        />
        <span className="auth__error" id="password">
          {errors.password}
        </span>
      </fieldset>
    </AuthForm>
  );
};

export default Login;
