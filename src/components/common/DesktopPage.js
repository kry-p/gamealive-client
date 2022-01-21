import React from 'react';

import MenuContainer from '../../containers/common/MenuContainer';
import Footer from '../footer/Footer';
import { MainStyleDesktop } from './PageStyle';
import { HeaderDesktop } from '../Header';

const DesktopPage = ({ history, content }) => {
  return (
    <MainStyleDesktop className={'desktop'}>
      <div
        className={'top'}
        style={{ position: 'sticky', height: '0px', top: '0px' }}
      >
        <HeaderDesktop />
        <MenuContainer history={history} />
      </div>
      <div className={'bottom'}>
        {content}
        <Footer />
      </div>
    </MainStyleDesktop>
  );
};

export default DesktopPage;
