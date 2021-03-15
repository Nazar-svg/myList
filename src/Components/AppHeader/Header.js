import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 0,
  },
  h1: {
    marginLeft: 10,
  },
  spanBox: {
    marginTop: 34,
  },
});

export default function Hook() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>МІЙ СПИСОК СПРАВ</h1>
      <span className={classes.spanBox}>
        <span>
          <big>1</big> more to do,{' '}
        </span>
        <span>
          <big>3</big> done
        </span>
      </span>
    </div>
  );
}
