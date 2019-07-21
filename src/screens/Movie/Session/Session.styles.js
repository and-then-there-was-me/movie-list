import styled from 'styled-components';

export const Root = styled.div`
  background-color: ${props => props.theme.variables.primary};
  padding-bottom: 0.5rem;
`;

export const SessionAttribute = styled.p`
  color: white;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  width: 2.5rem;
`;

export const SessionRow = styled.div`
  align-items: center;
  display: flex;
  padding: 0.5rem;
`;

export const SessionTime = styled.div`
  background-color: ${props => props.theme.variables.secondary};
  border-radius: 1.25rem;
  color: white;
  line-height: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  text-align: center;
  width: 5.5rem;
`;

export const SessionDate = styled.h5`
  padding: 1rem;
`;
