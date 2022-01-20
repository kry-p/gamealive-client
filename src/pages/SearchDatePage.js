import React from 'react';

import Footer from '../components/footer/Footer';
import ReviewlistDateContainer from '../containers/reviews/ReviewListDateContainer';

import { MainStyle } from './PageStyle';
import Header from '../components/Header';
import MenuPopupContainer from '../containers/common/MenuPopupContainer';

const SearchDatePage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header />
        <MenuPopupContainer history={history} />
        <ReviewlistDateContainer />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SearchDatePage;
