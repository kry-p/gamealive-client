import React from 'react';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AssignmentIcon from '@mui/icons-material/Assignment';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';

import Card from '../common/Card';
import { useStyles } from './MenuStyle';

const Menu = ({
  history,
  settings,
  onToggleDarkmode,
  onToggleRejected,
  onToggleCancelled,
}) => {
  const classes = useStyles();

  return (
    <Card small>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem
          button
          onClick={() => {
            history.push('/search/keyword');
          }}
        >
          <ListItemIcon>
            <TextFieldsIcon />
          </ListItemIcon>
          <ListItemText primary="키워드로 검색" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            history.push('/search/date');
          }}
        >
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText primary="날짜로 검색" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            history.push('/licenses');
          }}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="오픈소스 라이선스" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <NightsStayIcon />
          </ListItemIcon>
          <ListItemText primary="다크 모드" />
          <Switch
            checked={settings.darkmode}
            onChange={onToggleDarkmode}
            size="small"
            inputProps={{ 'aria-label': 'darkmode' }}
          />
        </ListItem>
      </List>
    </Card>
  );
};

export default Menu;
