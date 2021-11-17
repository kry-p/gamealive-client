import React from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import MenuContainer from '../containers/common/MenuContainer';
import ThemeProviderContainer from '../containers/common/ThemeProviderContainer';

import { MainStyle } from './PageStyle';

const SettingsPage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header history={history} />
        <MenuContainer history={history} />
        <Footer />
        <ThemeProviderContainer />
      </MainStyle>
    </>
  );
};

export default SettingsPage;
