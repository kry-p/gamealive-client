import React from 'react';

import ReviewlistKeywordContainer from '../containers/reviews/ReviewListKeywordContainer';

import { Page } from '../components/common/PageStyle';
import DesktopPage from '../components/common/DesktopPage';
import MobilePage from '../components/common/MobilePage';

const SearchDatePage = ({ history }) => {
  const container = <ReviewlistKeywordContainer />;
  return (
    <Page>
      <DesktopPage history={history} content={container} />
      <MobilePage history={history} content={container} />
    </Page>
  );
};

export default SearchDatePage;
