import styled from 'styled-components';

// footer card css
export const FooterStyle = styled.div`
  font-size: 0.8rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 3fr;
  justify-content: center;
  grid-gap: 0.5rem;
  row-gap: 1.5rem;
`;

export const SnsStyle = styled.div`
  display: grid;
  column-gap: 0rem;
  grid-column: 1 / span 3;
  grid-template-columns: repeat(5, 1fr);
  place-items: center center;
`;

export const TitleStyle = styled.div`
  grid-column: 1 / span 3;
  text-align: center;
  font-weight: bold;
  font-size: 0.85rem;
`;

export const DescriptionStyle = styled.div`
  grid-column: 1 / span 3;
  text-align: center;
`;
