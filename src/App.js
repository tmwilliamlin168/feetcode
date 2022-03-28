import { useState } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/mode/python/python';

import './App.css';

const DEFAULT_CODE = `def twoFeet(lengths):
\treturn any(len >= 24 for len in lengths)`;

function App() {
  const [code, setCode] = useState(DEFAULT_CODE);

  return (
    <div className="App">
      <p className="Header">FeetCode</p>
      <div className="Main">
        <div className="Problem-Pane">
          <p className="Problem-Title">1. Two Feet</p>
          <p className="Problem-Difficulty">Beginner Exercise</p>
          <div className="Problem-Divider"></div>
          <p className="Problem-Description">
            Given an array of positive real numbers{' '}
            <span className="Inline-Code">lengths</span>
            {' '}in inches, determine if any of the lengths are more than two feet long.
          </p>
          <p className="Sample-Title">Sample 1:</p>
          <p className="Sample-Block">
            <b>Input:</b> lengths = [0.01, 4.5, 6.3, 5.7]
            <br />
            <b>Output:</b> false
            <br />
            <b>Explanation:</b> None of the lengths are longer than two feet.
          </p>
          <p className="Sample-Title">Sample 2:</p>
          <p className="Sample-Block">
            <b>Input:</b> lengths = [8.9, 7.4, 24.2]
            <br />
            <b>Output:</b> True
            <br />
            <b>Explanation:</b> The 3rd length is an outlier longer than two feet.
          </p>
        </div>
        <div className="Code-Pane">
          <div className="Code-Subpane">
            <CodeMirror
              value={DEFAULT_CODE}
              options={{
                mode: 'python',
                theme: 'xq-light',
                lineNumbers: true,
                indentWithTabs: true,
                indentUnit: 4,
                viewportMargin: Infinity,
              }}
              onChange={(editor, data, value) => {}}
            />
          </div>
          <div className="Submit-Pane">
            <button className="Submit-Button" onClick={() => alert('hi')}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
