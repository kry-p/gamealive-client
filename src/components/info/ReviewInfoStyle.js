import styled from 'styled-components';
import Card from '../common/Card';

// information css
export const ReviewInfoStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: small;
`;

export const CardStyle = styled(Card)`
  padding: 1.25rem;
`;

export const HintStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  font-size: 0.8rem;
`;
