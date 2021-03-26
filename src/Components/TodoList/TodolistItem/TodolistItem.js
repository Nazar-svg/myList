import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    justifyItems: 'center',
    color: 'black',
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
  label: {
    fontSize: 20,
    fontWeight: 600,
  },
  important: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 600,
  },
  iconColorDisabled: {
    color: 'grey',
    marginRight: 17,
    cursor: 'pointer',
  },
});

export default function TodoListItem({ label }) {
  const classes = useStyles();
  const [important, setImportant] = useState(false);

  let span = <span className={classes.label}>{label}</span>;

  if (important) {
    return (
      <span className={classes.root}>
        <span className={classes.important}>{label}</span>
        <div>
          <PriorityHighIcon
            onClick={() => setImportant(false)}
            className={classes.iconColorDisabled}
          />
          <DeleteIcon color="secondary" style={{ cursor: 'pointer' }} />
        </div>
      </span>
    );
  }

  return (
    <span className={classes.root}>
      {span}
      <div>
        <PriorityHighIcon
          className={classes.iconColor}
          onClick={() => setImportant(true)}
        />

        <DeleteIcon color="secondary" style={{ cursor: 'pointer' }} />
      </div>
    </span>
  );
}
