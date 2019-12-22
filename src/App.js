import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = true;
    return (
      <Fragment>
        <h1>My BS App!</h1>
        {loading ? <h4>Loading...</h4> : <h1>Hello From {showName && name }</h1>}
      </Fragment>   
    );
  }
}

export default App;
