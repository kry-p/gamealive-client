import React from 'react';

import MenuContainer from '../../containers/common/MenuContainer';
import Footer from '../footer/Footer';
import { LeftFloat, MainStyleDesktop } from './PageStyle';
import { HeaderDesktop } from '../Header';

const DesktopPage = ({ history, content }) => {
  return (
    <MainStyleDesktop className={'desktop'}>
      <LeftFloat>
        <HeaderDesktop />
        <MenuContainer history={history} />
      </LeftFloat>
      <div className={'bottom'}>
        {content}
        <Footer />
      </div>
    </MainStyleDesktop>
  );
};

export default DesktopPage;
