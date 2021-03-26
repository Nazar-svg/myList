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

export default function TodoList({ todos }) {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {todos.map((item, index) => {
        return (
          <li key={index} className={classes.li}>
            <TodoListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
}
