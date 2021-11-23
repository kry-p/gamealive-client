import React from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/Header';

import { MainStyle } from './PageStyle';

const MainPage = () => {
  return (
    <>
      <MainStyle>
        <Header />
        여기에 메인 페이지 내용
        <Footer />
      </MainStyle>
    </>
  );
};

export default MainPage;
