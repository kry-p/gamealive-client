import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Card from '../common/Card';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { alpha, styled as styledMaterial } from '@mui/material/styles';

import { toggleMenuOpen } from '../../modules/option';
import palette from '../../lib/styles/palette';

const Background = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);

  animation: fadein 0.25s;
  -moz-animation: fadein 0.25s;
  /* Firefox */
  -webkit-animation: fadein 0.25s;
  /* Safari and Chrome */
  -o-animation: fadein 0.25s;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  nested: {
    padding: theme.spacing(0),
    paddingLeft: theme.spacing(4),
  },
}));

const ColoredSwitch = styledMaterial(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: palette.logo_base[0],
    '&:hover': {
      backgroundColor: alpha(
        palette.logo_base[0],
        theme.palette.action.hoverOpacity,
      ),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: palette.logo_base[0],
  },
}));

const MenuPopup = ({
  history,
  settings,
  onToggleDarkmode,
  onToggleRejected,
  onToggleCancelled,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.option.menuOpen);

  const onToggleMenuOpen = useCallback(
    () => dispatch(toggleMenuOpen()),
    [dispatch],
  );

  return isOpen ? (
    <>
      <Background />
      <div
        style={{
          display: 'flex',
          position: 'fixed',
          top: '0.75rem',
          flexDirection: 'column',
          zIndex: '2',
        }}
      >
        <div>
          <IconButton onClick={onToggleMenuOpen}>
            <CloseIcon />
          </IconButton>
        </div>
        <Card big>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem
              button
              onClick={() => {
                onToggleMenuOpen();
                history.push('/search/keyword');
              }}
            >
              <ListItemIcon>
                <TextFieldsIcon />
              </ListItemIcon>
              <ListItemText
                primary="키워드로 검색"
                secondary="게임물명, 신청자 키워드를 통해 검색합니다."
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                onToggleMenuOpen();
                history.push('/search/date');
              }}
            >
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText
                primary="날짜로 검색"
                secondary="심의가 진행된 날짜를 입력하여 검색합니다."
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                onToggleMenuOpen();
                history.push('/licenses');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText
                primary="오픈소스 라이선스"
                secondary="라이선스 정보를 확인할 수 있습니다."
              />
            </ListItem>

            <Divider />
            <ListItem button>
              <ListItemIcon>
                <NightsStayIcon />
              </ListItemIcon>
              <ListItemText
                primary="다크 모드"
                secondary="다크 모드를 설정합니다."
              />
              <ColoredSwitch
                checked={settings.darkmode}
                onChange={onToggleDarkmode}
                size="small"
                inputProps={{ 'aria-label': 'dark mode' }}
              />
            </ListItem>
          </List>
        </Card>
      </div>
    </>
  ) : null;
};

export default MenuPopup;
