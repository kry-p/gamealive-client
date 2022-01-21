import styled from 'styled-components';

export const MainStyleMobile = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MainStyleDesktop = styled.div`
  display: grid;
  .mobile {
    display: none;
  }

  .top {
    justify-self: end;
  }

  .bottom {
    justify-self: start;
  }

  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const Page = styled.div`
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
