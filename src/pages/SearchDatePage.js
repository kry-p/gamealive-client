import React from 'react';

import ReviewlistDateContainer from '../containers/reviews/ReviewListDateContainer';

import { Page } from '../components/common/PageStyle';
import DesktopPage from '../components/common/DesktopPage';
import MobilePage from '../components/common/MobilePage';

const SearchDatePage = ({ history }) => {
  const container = <ReviewlistDateContainer />;
  return (
    <Page>
      <DesktopPage history={history} content={container} />
      <MobilePage history={history} content={container} />
    </Page>
  );
};

export default SearchDatePage;
