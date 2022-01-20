import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import MenuPopupContainer from '../containers/common/MenuPopupContainer';
import { MainStyle } from './PageStyle';

const MainPage = () => {
  const option = useSelector((state) => state.option.menuOpen);

  return (
    <>
      <MainStyle style={{ zIndex: 1 }}>
        <Header />
        <MenuPopupContainer />
        여기에 메인 페이지 내용
        <Footer />
      </MainStyle>
    </>
  );
};

export default MainPage;
