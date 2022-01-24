import styled from 'styled-components';

import { makeStyles } from '@mui/styles';
import { Switch } from '@mui/material';
import { alpha, styled as styledMaterial } from '@mui/material/styles';

import palette from '../../lib/styles/palette';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  nested: {
    padding: theme.spacing(0),
    paddingLeft: theme.spacing(4),
  },
}));

export const ColoredSwitch = styledMaterial(Switch)(({ theme }) => ({
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

export const Background = styled.div`
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
