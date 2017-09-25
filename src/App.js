// @flow

import React, { Component } from 'react';
import './App.css';

type Props = {
  value: string,
  onChange: (value: string) => mixed,
};
type State = {
  count: number,
}

class App extends Component<Props, State> {
  props: Props;
  state: State = {count: 10};

  render() {
    let clickMe = () => {
      this.setState({
        count: 30,
      });
    }


    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React with Flow and Jest</h2>
        </div>
        <p className="App-intro" onClick={() => clickMe()}>
          To get started, edit <code>{this.state.count}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
