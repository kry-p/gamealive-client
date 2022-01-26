import React, { useEffect } from 'react';

import styled from 'styled-components';

import Button from '../common/Button';
import palette from '../../lib/styles/palette';

import Kakaotalk from '../../resources/sns/kakaotalk.svg';
import Facebook from '../../resources/sns/facebook.svg';
import Twitter from '../../resources/sns/twitter.svg';
import Blog from '../../resources/sns/blog.svg';
import Link from '../../resources/sns/link.svg';

const TextArea = styled.textarea`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

const urlBuilder = () => {
  return window.location.href;
};

export const KakaoShareButton = () => {
  const sendLink = () => {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API);
    }
    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '게임얼라이브',
        description: '게임물관리위원회에서 공개하는 실시간 심의정보를 한눈에',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <Button
      sns
      kakaotalk
      onClick={sendLink}
      style={{ gridColumn: '1 / span 1`' }}
      aria-label="button-share-kakao"
    >
      <Kakaotalk fill={`${palette.kakaotalk[2]}`} width="16" height="16" />
    </Button>
  );
};

export const FacebookShareButton = () => {
  const onClick = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${urlBuilder()}`);
  };
  return (
    <Button
      sns
      facebook
      style={{ gridColumn: '1 / span 1`' }}
      onClick={onClick}
      aria-label="button-share-facebook"
    >
      <Facebook fill={`${palette.facebook[2]}`} width="16" height="16" />
    </Button>
  );
};

export const TwitterShareButton = () => {
  const onClick = () => {
    window.open(`https://www.twitter.com/intent/tweet?&url=${urlBuilder()}`);
  };
  return (
    <Button
      sns
      twitter
      style={{ gridColumn: '1 / span 1`' }}
      onClick={onClick}
      aria-label="button-share-twitter"
    >
      <Twitter fill={`${palette.twitter[2]}`} width="16" height="16" />
    </Button>
  );
};

export const BlogShareButton = () => {
  const onClick = () => {
    window.open(`http://blog.naver.com/openapi/share?url=${urlBuilder()}`);
  };
  return (
    <Button
      sns
      blog
      style={{ gridColumn: '1 / span 1`' }}
      onClick={onClick}
      aria-label="button-share-naverblog"
    >
      <Blog fill={`${palette.naverblog[2]}`} width="16" height="16" />
    </Button>
  );
};

/*
 * Link share
 *
 * Thanks to 파이어족
 * https://ratelmorning.tistory.com/41
 */
export const LinkShareButton = () => {
  const copyUrlRef = React.useRef();

  const onClick = (e) => {
    if (!document.queryCommandSupported('copy')) {
      return alert('사용 중인 브라우저는 링크 복사를 지원하지 않습니다.');
    }

    copyUrlRef.current.select();
    document.execCommand('copy');
    e.target.focus();

    alert('링크가 복사되었습니다.');
  };
  return (
    <Button
      sns
      link
      style={{ gridColumn: '1 / span 1`' }}
      onClick={onClick}
      aria-label="button-share-link"
    >
      <Link fill={`${palette.link[2]}`} width="16" height="16" />
      <form>
        <TextArea ref={copyUrlRef} value={window.location.href} readOnly />
      </form>
    </Button>
  );
};
