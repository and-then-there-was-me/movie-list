import { css } from 'styled-components';

export default css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${props => props.theme.variables.dark};
    font-family: Lato, Arial, Sans-Serif;
  }

  h1, h2, h3, h4, h5, h6, label, p, pre, span  {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: white;
    font-size: 1.375rem;
    font-weight: normal;
  }

  h2 {
    color: white;
    font-size: 1.25rem;
    font-weight: normal;
  }

  h3 {
    color: ${props => props.theme.variables.secondary};
    font-size: 1.5rem;
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    font-weight: normal;

    @media (min-width: 40rem) {
      font-size: 0.8rem;
    }
  }

  h5 {
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
  }

  h6 {
    color: #7ec5d0;
    font-size: 0.8rem;
    font-weight: normal;

    @media (min-width: 40rem) {
      font-size: 0.6rem;
    }
  }

  p {
    color: white;
    opacity: 0.83;
  }
`;
