import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import movies from 'assets/movies.json';
import Header from 'components/Header';

import Session from './Session';
import { Card, Cinema, Content, PromoImage, Root, SessionsHeader } from './Movie.styles';

const ScreenMovie = (props) => {
  const currentMovie = movies.Movies.find(movie => movie.MovieID === props.match.params.id);

  if (!currentMovie) {
    return <Redirect to="/movies" />;
  }

  return (
    <Root>
      <Card>
        <PromoImage
          alt="Movie Promo"
          src={currentMovie.MoviePromoImage}
        />

        <Content>
          <h4>{ currentMovie.Title }</h4>

          <h6>
            { currentMovie.Classification }
            ,&nbsp;
            { currentMovie.MovieDuration }
          </h6>

          <br />

          <p>
            { _.unescape(currentMovie.Synopsis) }
          </p>
        </Content>
      </Card>

      <div>
        <SessionsHeader>
          <h2>SESSION TIMES</h2>

          <Cinema>{ currentMovie.CinemaName }</Cinema>
        </SessionsHeader>

        <div>
          { currentMovie.Sessions.map(session => (
            <Session key={session.Date} session={session} />
          ))}
        </div>
      </div>

      <Header />
    </Root>
  );
};

ScreenMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ScreenMovie;
