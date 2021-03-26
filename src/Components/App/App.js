import './App.css';
import React, { Component } from 'react';
import Header from '../AppHeader/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import AddItemPanel from '../AddItemPanel/AddItemPanel';

export default class App extends Component {
  maxId = 100;

  state = {
    todoAray: [
      { label: 'Вчити реакт', important: false, id: this.maxId++ },
      { label: 'Вчити Англійський', important: false, id: this.maxId++ },
      { label: 'Треніровки', important: false, id: this.maxId++ },
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
