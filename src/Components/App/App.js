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
      this.createNewItem('Вчити реакт'),
      this.createNewItem('Вчити Англійський'),
      this.createNewItem('Треніровки'),
    ],
    term: '',
  };
  createNewItem(label) {
    return {
      label,
    };
  }
  onDelitedItem = (id) => {
    this.setState(({ todoAray }) => {
      const index = todoAray.findIndex((el) => el.id === id);
      const newArray = [
        ...todoAray.slice(0, index),
        ...todoAray.slice(index + 1),
      ];

      return {
        todoAray: newArray,
      };
    });
    console.log(id);
  };
  addItemHandler = (text) => {
    console.log('text', text);
    const newItem = this.createNewItem(text);
    this.setState(({ todoAray }) => {
      const newArr = [...todoAray, newItem];
      return {
        todoAray: newArr,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchPanel />
        <TodoList onDelited={this.onDelitedItem} todos={this.state.todoAray} />
        <AddItemPanel addItemHandler={this.addItemHandler} />
      </div>
    );
  }
}
