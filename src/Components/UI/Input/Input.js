import React from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    height: 50,
    width: 330,
    marginLeft: 30,
    margin: theme.spacing(0.5),
  },
  red: {
    borderColor: 'red',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedInputs(props) {
  const classes = useStyles();
  const cls = [classes.margin];
  if (props.value === '') {
    cls.push(classes.red);
  }

  return (
    <form className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          onChange={props.onChange}
          value={props.value}
          className={cls.join(' ')}
          label="Додати нове завдання"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
    </form>
  );
}
