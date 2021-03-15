import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    justifyItems: 'center',
    color: 'white',
  },
  button: {
    margin: 0,
    padding: 1,
  },
  iconColor: {
    color: 'green',
    marginRight: 17,
    cursor: 'pointer',
  },
});

export default function TodoListItem({ label }) {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <span>{label}</span>
      <div>
        <PriorityHighIcon className={classes.iconColor} />
        <DeleteIcon color="secondary" style={{ cursor: 'pointer' }} />
      </div>
    </span>
  );
}
