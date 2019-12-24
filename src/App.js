import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/user/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title='Github Finder Study Project' icon='fab fa-github' />
        <UserItem />
        </div>
    );
  }
}

export default App;
