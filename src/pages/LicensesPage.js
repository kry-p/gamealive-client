import React from 'react';

import Footer from '../components/footer/Footer';
import { MainStyle } from './PageStyle';
import Header from '../components/Header';

const LicensePage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header history={history} />
        여기에 라이선스 내용
        <Footer />
      </MainStyle>
    </>
  );
};

export default LicensePage;
