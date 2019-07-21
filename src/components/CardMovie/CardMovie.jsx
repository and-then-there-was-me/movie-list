import PropTypes from 'prop-types';
import React from 'react';

import { Button, Card, Content, LinkImage, LinkTo, PromoImage } from './CardMovie.styles';

const CardMovie = props => (
  <Card>
    <LinkImage to={`/movie/${props.movie.MovieID}`}>
      <PromoImage
        alt="Movie Promo"
        src={props.movie.MoviePromoImage}
      />
    </LinkImage>

    <Content>
      <div>
        <LinkTo to={`/movie/${props.movie.MovieID}`}>
          <h4>{ props.movie.Title }</h4>
        </LinkTo>

        <h6>
          { props.movie.Classification }
          ,&nbsp;
          { props.movie.MovieDuration }
        </h6>

        <h6>
          Release Date:&nbsp;
          { props.movie.OpeningDateString }
        </h6>
      </div>

      <Button to={`/movie/${props.movie.MovieID}`}>SESSIONS</Button>
    </Content>
  </Card>
);

CardMovie.propTypes = {
  movie: PropTypes.shape({
    CinemaID: PropTypes.string.isRequired,
    CinemaName: PropTypes.string.isRequired,
    CinemaUrl: PropTypes.string.isRequired,
    Classification: PropTypes.string.isRequired,
    MovieDuration: PropTypes.string.isRequired,
    MovieID: PropTypes.string.isRequired,
    MoviePromoImage: PropTypes.string.isRequired,
    OpeningDate: PropTypes.string.isRequired,
    OpeningDateString: PropTypes.string.isRequired,
    Sessions: PropTypes.arrayOf(
      PropTypes.shape({
        Date: PropTypes.string.isRequired,
        SessionTimes: PropTypes.arrayOf(
          PropTypes.shape({
            CurrentVistaSessionId: PropTypes.string,
            SessionAttributes: PropTypes.arrayOf(PropTypes.string.isRequired),
            SessionTime: PropTypes.string.isRequired,
          }).isRequired,
        ).isRequired,
      }).isRequired,
    ).isRequired,
    Synopsis: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardMovie;
