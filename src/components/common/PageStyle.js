import styled from 'styled-components';

export const MainStyleMobile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MainStyleDesktop = styled.div`
  display: grid;

  .top {
    justify-self: end;
  }

  .bottom {
    justify-self: start;
  }

  grid-template-columns: 4fr 5fr;
  grid-gap: 1rem;
`;

export const Page = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  justify-content: center;

  .mobile {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
