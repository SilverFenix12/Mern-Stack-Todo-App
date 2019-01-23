import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './layout/HeaderComp';

import CreateTodo from './components/CreateTodosComp';
import EditTodo from './components/EditTodosComp';
import TodosList from './components/CreateTodosComp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />

          <h2>MERN-Stack Todo App</h2>
          <Route path="/" exact component ={TodosList} />
          <Route path="/edit/:id" component ={EditTodo} />
          <Route path="/create" component = {CreateTodo} />
          
        </div>
        

      </Router>
    );
  }
}

export default App;
