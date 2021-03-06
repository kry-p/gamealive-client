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
                primary="???????????? ??????"
                secondary="????????????, ????????? ???????????? ?????? ???????????????."
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
                primary="????????? ??????"
                secondary="????????? ????????? ????????? ???????????? ???????????????."
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
                primary="???????????? ????????????"
                secondary="???????????? ????????? ????????? ??? ????????????."
              />
            </ListItem>

            <Divider />
            <ListItem button>
              <ListItemIcon>
                <NightsStayIcon />
              </ListItemIcon>
              <ListItemText
                primary="?????? ??????"
                secondary="?????? ????????? ???????????????."
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
