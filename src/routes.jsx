import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ScreenMovie from 'screens/Movie';
import ScreenMovieList from 'screens/MovieList';

const Routes = () => (
  <Switch>
    <Redirect from="/" to="/movies" exact />

    <Route
      path="/movies"
      component={ScreenMovieList}
      exact
    />

    <Route
      path="/movie/:id"
      component={ScreenMovie}
      exact
    />
  </Switch>
);

export default Routes;
