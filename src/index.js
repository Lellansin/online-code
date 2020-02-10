// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import invoke from './utils/invoke';
import * as monaco from 'monaco-editor';

const funcName = 'compile-and-run';
const DEFAULT_CODE = `/**
 * 标题: C 语言 Hello world
 * 时间: ${getTimeNow()}
 */
#include <stdio.h>

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
    const code = decodeURIComponent(location.hash.slice(1));
    this.state = { code: code || DEFAULT_CODE, href: '' };
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

      this.editor.onDidChangeModelContent((e) => {
        this.updateUrl();
      });
    });
    const style = {
      height: window.screen.availHeight - 30,
      width: window.screen.availWidth,
    };
    return (
      <div>
        <header style={{ backgroundColor: '#24292d', height: 30 }}>
          <button onClick={this.click.bind(this)}>运行</button>
        </header>
        <div id="editor" style={style} />
      </div>
    );
  }

  updateUrl() {
    const code = this.editor.getValue();
    location.hash = '#' + encodeURIComponent(code);
    // TODO 根据注释的标题来设置 document.title
  }
}

function getTimeNow() {
  const d = new Date();
  try {
    return `${d.getYear() + 1900}年${d.getMonth() + 1}月${d.getDate()}日 ${d
      .getHours()
      .toString()
      .padStart(2, '0')}:${d
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${d
      .getSeconds()
      .toString()
      .padStart(2, '0')}`;
  } catch (_) {
    return d.toString();
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

// TODO add https://www.npmjs.com/package/eslint-plugin-jsdoc
