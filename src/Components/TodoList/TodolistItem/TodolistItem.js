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
    fontSize: 20,
    fontWeight: 600,
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
  done: {
    textDecoration: 'line-through',
  },
});

export default function TodoListItem({ label, onDelited }) {
  const classes = useStyles();
  const cls = [classes];
  const clsBtn = [classes.iconColor];
  const [listItem, setListItem] = useState({
    important: false,
    done: false,
  });

  if (listItem.important) {
    cls.push(classes.important);
    clsBtn.push(classes.iconColorDisabled);
  }
  if (listItem.done) {
    cls.push(classes.done);
  }

  const onToggleImportant = () => {
    setListItem({
      ...listItem,
      important: !listItem.important,
    });
  };
  const onToggleDone = () => {
    setListItem({
      ...listItem,
      done: !listItem.done,
    });
  };

  return (
    <span className={classes.root}>
      <span onClick={onToggleDone} className={cls.join(' ')}>
        {label}
      </span>
      <div>
        <PriorityHighIcon
          className={clsBtn.join(' ')}
          onClick={onToggleImportant}
        />
        <DeleteIcon
          onClick={onDelited}
          color="secondary"
          style={{ cursor: 'pointer' }}
        />
      </div>
    </span>
  );
}
