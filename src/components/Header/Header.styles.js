import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderComponent = styled.header`
  background-color: ${props => props.theme.variables.tertiary};
  padding: 0.75rem 0.5rem;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`;

export const H1 = styled.h1`
  @media (min-width: 40rem) {
    margin: auto;
    max-width: 60rem;
    padding: 0 2rem;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;
