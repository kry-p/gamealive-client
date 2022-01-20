import React from 'react';

import Card from '../common/Card';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '../common/Accordion';

import {
  FooterStyle,
  SnsStyle,
  TitleStyle,
  DescriptionStyle,
} from './FooterComponentStyle';

import {
  KakaoShareButton,
  FacebookShareButton,
  TwitterShareButton,
  BlogShareButton,
  LinkShareButton,
} from './ShareButtons';

// SNS share component
const Sns = (
  <>
    <TitleStyle>공유하기</TitleStyle>
    <SnsStyle>
      <KakaoShareButton />
      <FacebookShareButton />
      <TwitterShareButton />
      <BlogShareButton />
      <LinkShareButton />
    </SnsStyle>
  </>
);

// Disclaimer component
const Disclaimer = (
  <>
    <TitleStyle>주의사항</TitleStyle>
    <DescriptionStyle>
      gamealive 는 게임물관리위원회의 심의정보를 수집, 제공하는 웹 사이트입니다.
      <br></br>
      <br></br>민간이 집계한 정보이므로 공식적 근거 자료로 활용할 수 없는 점
      유의 바랍니다.
    </DescriptionStyle>
  </>
);

// Contact component
const Contact = (
  <>
    <TitleStyle>문의하기</TitleStyle>
    <DescriptionStyle>
      <a href="mailto: game.alive.kr@gmail.com">game.alive.kr@gmail.com</a>
    </DescriptionStyle>
  </>
);

// main
const Footer = () => {
  return (
    <Card big>
      <FooterStyle>
        {Disclaimer}
        {Sns}
        {Contact}
      </FooterStyle>
    </Card>
  );
};

export default Footer;
