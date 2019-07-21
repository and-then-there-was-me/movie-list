import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${props => props.theme.variables.primary};
  display: flex;
  flex-direction: column;

  @media (min-width: 40rem) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 1.5rem;
  }
`;

export const Root = styled.div`
  padding: 3rem 0;

  @media (min-width: 40rem) {
    margin: auto;
    max-width: 60rem;
    padding: 3rem 2rem;
  }
`;

export const Toolbar = styled.div`
  background-color: ${props => props.theme.variables.dark};
  padding: 1.5rem 0.5rem;
`;

export const ToolbarTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

export const ToolbarSearch = styled.input`
  border-radius: 1.5rem;
  font-size: 1rem;
  height: 3rem;
  outline: none;
  padding: 0 1.5rem;
  width: 100%;
`;
