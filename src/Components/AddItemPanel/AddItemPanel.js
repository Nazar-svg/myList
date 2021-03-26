import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '../UI/Input/Input';

const useStyles = makeStyles({
  root: {
    marginTop: 25,
    display: 'flex',
    justifyContent: 'space-between',
  },
  Input: {
    height: 29,
    width: 300,
    marginTop: 5,
    marginLeft: 30,
    minWidth: 150,
    fontSize: 20,
    cursor: 'pointer',
    color: 'green',
  },
  btn: {
    marginTop: 5,
    marginRight: 25,
  },
});

export default function Hook() {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <Input type="text" className={classes.Input} />
      <Button variant="contained" color="primary" className={classes.btn}>
        Додати
      </Button>
    </form>
  );
}
