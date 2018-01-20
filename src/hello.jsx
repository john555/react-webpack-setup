import React, { Component } from 'react';

import './hello.scss';

export default class extends Component {
  state = {
    name: 'john',
    commits: 0,
  };

  async componentWillMount() {
    this.setState({
      commits: await this.asyncFunc(),
    });
  }

  asyncFunc = () => Promise.resolve(25);

  render() {
    return (
      <div className="hello">
        <h1>Hello, { this.state.name }</h1>
        <div className="age">Commits: {this.state.commits}</div>
      </div>
    );
  }
}

