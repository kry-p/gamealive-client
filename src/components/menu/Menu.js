import React, { useState } from 'react';

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

const Menu = ({
  history,
  settings,
  onToggleDarkmode,
  onToggleRejected,
  onToggleCancelled,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
            inputProps={{ 'aria-label': 'dark mode' }}
          />
        </ListItem>
      </List>
    </Card>
  );
};

export default Menu;
