import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import { Root, SessionAttribute, SessionDate, SessionRow, SessionTime } from './Session.styles';

const Session = props => (
  <Root>
    <SessionDate>
      { moment(props.session.Date, 'DD/MM/YYYY').format('ddd DD MMM YYYY') }
    </SessionDate>

    <div>
      { props.session.SessionTimes.map(time => (
        <SessionRow key={time.CurrentVistaSessionId}>
          <SessionTime>{ time.SessionTime }</SessionTime>

          { time.SessionAttributes.map(attribute => (
            <SessionAttribute key={attribute}>
              { attribute }
            </SessionAttribute>
          ))}
        </SessionRow>
      ))}
    </div>
  </Root>
);

Session.propTypes = {
  session: PropTypes.shape({
    Date: PropTypes.string.isRequired,
    SessionTimes: PropTypes.arrayOf(
      PropTypes.shape({
        CurrentVistaSessionId: PropTypes.string,
        SessionAttributes: PropTypes.arrayOf(PropTypes.string.isRequired),
        SessionTime: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default Session;
