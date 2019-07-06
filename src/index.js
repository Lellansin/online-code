// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import invoke from './utils/invoke';

const funcName = 'compile-and-run';
const DEFAULT_CODE = `#include <stdio.h>
int main() {
  printf("hello C!");
  return 0;
}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: DEFAULT_CODE };
  }

  invoke() {
    return invoke(funcName, JSON.stringify(this.state));
  }

  click() {
    return this.invoke()
      .then(({ headers, data }) => {
        console.log(data);
        if (data.code != 0) {
          alert('Error: ' + data.log);
        } else {
          alert(data.log);
        }
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  handelChange(e) {
    this.setState({
      code: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handelChange.bind(this)}
          defaultValue={this.state.code}
        />
        <button onClick={this.click.bind(this)}>Run</button>
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

// TODO add https://www.npmjs.com/package/eslint-plugin-jsdoc
