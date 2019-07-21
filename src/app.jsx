import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles';
import GlobalStyles from 'styles/global-styles';

const App = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />

      { props.children }
    </>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
