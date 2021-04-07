import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  function handleClickGoBack() {
    history.goBack();
    history.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__error-text">Cтраница не найдена</p>
      <button onClick={handleClickGoBack} className="not-found__link-back">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
