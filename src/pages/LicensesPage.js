import React from 'react';

import { Page } from '../components/common/PageStyle';

import Card from '../components/common/Card';
import DesktopPage from '../components/common/DesktopPage';
import MobilePage from '../components/common/MobilePage';

const LicensePage = ({ history }) => {
  const LicenseCard = (
    <Card big licenses>
      <h1>오픈소스 라이선스</h1>
      <br />
      <h2>MIT License Copyright (c) 2022 kry-p</h2>
      <br />
      <h3>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions: The above copyright notice and this permission
        notice shall be included in all copies or substantial portions of the
        Software.
      </h3>
      <br />
      <h3>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </h3>
      <br />
      <h3>
        Icons made by{' '}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </h3>
    </Card>
  );

  return (
    <Page>
      <DesktopPage history={history} content={LicenseCard} />
      <MobilePage history={history} content={LicenseCard} />
    </Page>
  );
};

export default LicensePage;
