import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function AuthForm(props) {
  return (
    <section className="auth">
      <Logo logo="auth" />
      <h2 className="auth__title">{props.title}</h2>
      <form className="auth__form" onSubmit={props.onSubmit} noValidate>
        {props.children}
        <button
          className={`auth__button ${props.className}__button ${
            !props.isValid && "auth__button_inactive"
          }`}
          type="submit"
          aria-label={props.ariaLabel}
        >
          {props.button}
        </button>
        <p className="auth__subtitle">
          {props.subtitle}{" "}
          <Link to={props.path} className="auth__subtitle-link">
            {props.subtitleLink}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default AuthForm;
