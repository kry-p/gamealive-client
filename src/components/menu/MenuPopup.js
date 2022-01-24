import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../common/Card';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AssignmentIcon from '@mui/icons-material/Assignment';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { toggleMenuOpen } from '../../modules/option';
import { useStyles, ColoredSwitch, Background } from './MenuStyle';

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

  const onToggleMenuOpen = useCallback(() => {
    dispatch(toggleMenuOpen());
  }, [dispatch]);

  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'unset');

  return isOpen ? (
    <>
      <Background />
      <div
        style={{
          display: 'flex',
          position: 'fixed',
          top: '1rem',
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
            aria-labelledby="menu-popup"
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
