import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoListItem from './TodolistItem/TodolistItem';

const useStyles = makeStyles({
  root: {
    listStyle: 'none',
    margin: 5,
  },
  li: {
    padding: 12,
    marginBottom: 10,
    marginLeft: -20,
    border: '2px solid black',
  },
});

export default function TodoList({ todos, onDelited }) {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {todos.map((item, id) => {
        return (
          <li key={id} className={classes.li}>
            <TodoListItem {...item} onDelited={() => onDelited(id)} />
          </li>
        );
      })}
    </ul>
  );
}
