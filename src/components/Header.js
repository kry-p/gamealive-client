import React from 'react';
import styled, { css } from 'styled-components';

import { RiMenuFill, RiNotification4Line } from 'react-icons/ri';

import Card from './common/Card';
import Responsive from './common/Responsive';
import palette from '../lib/styles/palette';

import IconButton from '@mui/material/IconButton';
import MenuPopupContainer from '../containers/common/MenuPopupContainer';
import { useDispatch } from 'react-redux';
import { toggleMenuOpen } from '../modules/option';
// items css
const Logo = styled.div`
  letter-spacing: 2px;
  text-align: center;
  font-size: 18px;
  font-family: TmoneyRoundWindExtraBold;

  ${(props) =>
    props.colorize &&
    css`
      color: ${palette.logo_base[0]};
    `}
`;

const TextWrappper = styled.div`
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
const Header = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card big header>
        <ContentWrapper>
          <IconButton
            onClick={() => {
              dispatch(toggleMenuOpen());
            }}
          >
            <RiMenuFill />
          </IconButton>

          <TextWrappper>
            <Logo>game</Logo>
            <Logo colorize>alive</Logo>
          </TextWrappper>

          <IconButton
            onClick={() => {
              alert('구현 예정인 기능입니다.');
            }}
          >
            <RiNotification4Line />
          </IconButton>
        </ContentWrapper>
      </Card>
    </>
  );
};

export default Header;
