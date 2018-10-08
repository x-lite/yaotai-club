import React, { Component } from 'react';
import Header from './common/header';

class App extends Component {
  componentDidMount() {
    // console.error('styles', styles.App);
  }
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
