import React from 'react';
import styled, { css } from 'styled-components';

import { RiMenuFill, RiNotification4Line } from 'react-icons/ri';

import Card from './common/Card';
import Responsive from './common/Responsive';
import palette from '../lib/styles/palette';

import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { toggleMenuOpen } from '../modules/option';
// items css
const Logo = styled.div`
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.125rem;
  font-family: Montserrat Alternates;
  font-weight: bolder;

  ${(props) =>
    props.colorize &&
    css`
      color: ${palette.logo_base[0]};
    `}
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/*
 * TODO: 상단 버튼 액션 정의
 */
export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Card big header>
      <ContentWrapper>
        <IconButton
          aria-label="button-menu"
          onClick={() => {
            dispatch(toggleMenuOpen());
          }}
        >
          <RiMenuFill />
        </IconButton>

        <TextWrapper>
          <Logo>game</Logo>
          <Logo colorize>alive</Logo>
        </TextWrapper>

        <IconButton
          aria-label="button-notification"
          onClick={() => {
            alert('준비 중입니다.');
          }}
        >
          <RiNotification4Line />
        </IconButton>
      </ContentWrapper>
    </Card>
  );
};

export const HeaderDesktop = () => {
  return (
    <Card small header>
      <TextWrapper>
        <Logo>game</Logo>
        <Logo colorize>alive</Logo>
      </TextWrapper>
    </Card>
  );
};
