import React from 'react';
import { MainStyleMobile } from './PageStyle';
import { Header } from '../Header';
import MenuPopupContainer from '../../containers/common/MenuPopupContainer';
import Footer from '../footer/Footer';

const MobilePage = ({ history, content }) => {
  return (
    <MainStyleMobile style={{ zIndex: 1 }} className={'mobile'}>
      <Header />
      <MenuPopupContainer history={history} />
      {content}
      <Footer />
    </MainStyleMobile>
  );
};

export default MobilePage;
