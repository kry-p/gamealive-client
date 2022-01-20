import React from 'react';

import { MainStyle } from './PageStyle';

import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import ReviewListKeywordContainer from '../containers/reviews/ReviewListKeywordContainer';
import MenuPopupContainer from '../containers/common/MenuPopupContainer';

const SearchKeywordPage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header />
        <MenuPopupContainer history={history} />
        <ReviewListKeywordContainer />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SearchKeywordPage;
