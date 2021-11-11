import React from 'react';

import Card from '../common/Card';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import SettingsIcon from '@mui/icons-material/Settings';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card big>
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
          <ListItemText
            primary="키워드로 검색"
            secondary="게임물명, 신청자 키워드를 통해 검색합니다."
          />
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
          <ListItemText
            primary="날짜로 검색"
            secondary="심의가 진행된 날짜를 입력하여 검색합니다."
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <NightsStayIcon />
          </ListItemIcon>
          <ListItemText
            primary="다크 모드"
            secondary="다크 모드를 설정합니다. (구현 예정)"
          />
          <Switch
            checked={settings.darkmode}
            onChange={onToggleDarkmode}
            size="small"
            inputProps={{ 'aria-label': 'dark mode' }}
          />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary="검색 설정"
            secondary="검색과 관련된 옵션이 들어 있습니다."
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={settings.searchReject}
                    onChange={onToggleRejected}
                    name="searchReject"
                  />
                }
                label="심의 거부된 게임물을 표시"
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={settings.searchCancel}
                    onChange={onToggleCancelled}
                    name="searchCancel"
                  />
                }
                label="심의 취소된 게임물을 표시"
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Card>
  );
};

export default Menu;
