import './App.css';
import React, { Component } from 'react';
import Header from '../AppHeader/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import AddItemPanel from '../AddItemPanel/AddItemPanel';

export default class App extends Component {
  state = {
    todoAray: [
      { label: 'Вчити реакт' },
      { label: 'Вчити Англійський' },
      { label: 'Треніровки' },
    ],
  };
  render() {
    return (
      <div className="App">
        <Header />
        <SearchPanel />
        <TodoList todos={this.state.todoAray} />
        <AddItemPanel />
      </div>
    );
  }
}
