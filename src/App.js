import React from 'react';
import './App.css';
import AddTodo from './components/addTodo/addTodo';
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <List />
    </div>
  );
}

export default App;
