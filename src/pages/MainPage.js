import React from 'react';

import { Page } from '../components/common/PageStyle';
import DesktopPage from '../components/common/DesktopPage';
import MobilePage from '../components/common/MobilePage';

const LicensePage = ({ history }) => {
  const LicenseCard = '여기에 메인 페이지 내용';
  return (
    <Page>
      <DesktopPage history={history} content={LicenseCard} />
      <MobilePage history={history} content={LicenseCard} />
    </Page>
  );
};

export default LicensePage;
