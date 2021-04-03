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
      { label: 'Вчити реакт', id: this.maxId++ },
      { label: 'Вчити Англійський', id: this.maxId++ },
      { label: 'Треніровки', id: this.maxId++ },
    ],
  };
  onDelitedItem = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchPanel />
        <TodoList
          onDelited={this.onDelitedItem}
          todos={this.state.todoAray}
          onTogleImportant={this.onTogleImportant}
        />
        <AddItemPanel />
      </div>
    );
  }
}
