import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import MenuPopupContainer from '../containers/common/MenuPopupContainer';
import { MainStyle } from './PageStyle';

const BlurriedBackground = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.3);
`;

const MainPage = () => {
  const option = useSelector((state) => state.option);
  const [menuOpen, setMenuOpen] = useState(option.menuOpen);

  useEffect(() => {
    if (option.menuOpen) setMenuOpen(true);
    else setMenuOpen(false);
  }, [option]);

  return (
    <>
      <MainStyle style={{ zIndex: 0 }}>
        <Header />
        {menuOpen ? <MenuPopupContainer /> : null}
        여기에 메인 페이지 내용
        <Footer />
        {menuOpen ? <BlurriedBackground /> : null}
      </MainStyle>
    </>
  );
};

export default MainPage;
