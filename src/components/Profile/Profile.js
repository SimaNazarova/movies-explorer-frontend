import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header navbar="white" />
      <div className="profile">
        <h2 className="profile__title">Привет, Ирина!</h2>
        <form className="profile__form">
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
              type="email"
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
            />
          </div>
          <button className="profile__button" type="submit">
            Редактировать
          </button>

          <Link to="/" className="profile__exit">
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </>
  );
}

export default Profile;
