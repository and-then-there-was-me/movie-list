import styled from 'styled-components';

export const Card = styled.div`
  align-items: flex-start;
  background-color: ${props => props.theme.variables.primary};
  border-bottom: 1px solid #5b6978;
  display: flex;
  padding: 1rem 0.5rem;

  @media (min-width: 40rem) {
    padding: 1.5rem;
  }
`;

export const Content = styled.div`
  flex: 1;

  @media (min-width: 40rem) {
    margin-left: 1rem;
  }
`;

export const PromoImage = styled.img`
  margin-right: 0.5rem;
  width: 30%;
`;

export const Root = styled.div`
  padding: 3rem 0;

  @media (min-width: 40rem) {
    margin: auto;
    margin-top: 2rem;
    max-width: 60rem;
    padding: 3rem 2rem;
  }
`;

export const SessionsHeader = styled.div`
  padding: 1rem 0.5rem;
`;

export const Cinema = styled.h3`
  margin-top: 1rem;
`;
