/*
 * Styled Accordions
 * code by Material-UI
 *
 * https://material-ui.com/components/accordion/#accordion
 */

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { withStyles } from '@mui/styles';

export const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 16,
  },
  content: {
    '&$expanded': {
      margin: '0px 0',
    },
    flexGrow: 0,
  },
  expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails);

export const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);
