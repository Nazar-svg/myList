import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BtnGrup from '../UI/BtnGrup/BtnGrup';

const useStyles = makeStyles({
  root: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  Input: {
    height: 35,
    width: 250,
    marginTop: 5,
    marginLeft: 30,
    minWidth: 150,
    fontSize: 20,
    cursor: 'pointer',
    color: 'green',
  },
});

export default function Hook() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input type="text" className={classes.Input} />
      <BtnGrup />
    </div>
  );
}
