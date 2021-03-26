import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import { withRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-page">
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/sign-in">
          <Login />
        </Route>

        <Route path="/sign-up">
          <Register />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/not-found">
          <NotFound />
        </Route>
      </div>
    </div>
  );
}

export default withRouter(App);
