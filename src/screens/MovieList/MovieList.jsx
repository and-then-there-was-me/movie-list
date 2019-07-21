import React from 'react';

import movies from 'assets/movies.json';
import CardMovie from 'components/CardMovie';
import Header from 'components/Header';

import { Content, Root, Toolbar, ToolbarSearch, ToolbarTitle } from './MovieList.styles';

function MovieList() {
  const [search, setSearch] = React.useState('');

  return (
    <Root>
      <Toolbar>
        <ToolbarTitle>MOVIES</ToolbarTitle>

        <ToolbarSearch
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Search movies..."
          value={search}
        />
      </Toolbar>

      <Content>
        { movies.Movies
          .filter(movie => !search || movie.Title.toLowerCase().includes(search.toLowerCase()))
          .map(movie => (
            <CardMovie
              key={movie.MovieID}
              movie={movie}
            />
          ))
        }
      </Content>

      <Header />
    </Root>
  );
}

export default MovieList;
