import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background-color: ${props => props.theme.variables.secondary};
  border: 0;
  border-radius: 1rem;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  width: 8rem;

  @media (min-width: 40rem) {
    display: none;
  }
`;

export const Card = styled.div`
  border-bottom: 1px solid #5b6978;
  display: flex;
  padding: 1rem 0.5rem;

  @media (min-width: 40rem) {
    border-bottom: 0;
    flex-direction: column;
    padding: 1.5rem 0 0 1.5rem;
    max-width: 10rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 40rem) {
    margin-top: 0.5rem;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const LinkImage = styled(Link)`
  margin-right: 0.5rem;
  text-decoration: none;
  width: 30%;

  @media (min-width: 40rem) {
    width: 100%;
  }
`;

export const PromoImage = styled.img`
  width: 100%;
`;
