// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import invoke from './utils/invoke';
import * as monaco from 'monaco-editor';

const funcName = 'compile-and-run';
const DEFAULT_CODE = `#include <stdio.h>\n
int main() {
  printf("Hello, world!");
  return 0;
}\n`;

// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function(moduleId, label) {
    if (label === 'json') {
      return './json.worker.js';
    }
    if (label === 'css') {
      return './css.worker.js';
    }
    if (label === 'html') {
      return './html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.js';
    }
    return './editor.worker.js';
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: DEFAULT_CODE };
  }

  invoke(code) {
    return invoke(
      funcName,
      JSON.stringify({
        lang: 'c',
        code,
      }),
    );
  }

  click() {
    return this.invoke(this.editor.getValue())
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

  render() {
    setTimeout(() => {
      this.editor = monaco.editor.create(document.getElementById('editor'), {
        value: this.state.code,
        language: 'c',

        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: 'vs-dark',
      });
    });
    const style = {
      height: window.screen.availHeight - 30,
      width: window.screen.availWidth,
    };
    return (
      <div>
        <header style={{ backgroundColor: '#24292d', height: 30 }}>
          <button onClick={this.click.bind(this)}>Run</button>
        </header>
        <div id="editor" style={style} />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

// TODO add https://www.npmjs.com/package/eslint-plugin-jsdoc
