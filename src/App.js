import { useState } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/mode/python/python';

import './App.css';

const DEFAULT_CODE = `def twoFeet(lengths):
\treturn any(x >= 24 for x in lengths)
`;

function App() {
  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const submitCode = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
      setState(true);
    }, 10000);
  };

  return (
    <div className="App">
      { modal &&
        <div className="Modal-Container">
          <div className="Modal-Background"></div>
          <div className="Modal" style={{border: `2px solid ${state ? '#0f0' : '#f00'}`}}>
            <p className="Modal-Text">
              { state ? (
                <p style={{color: '#0f0'}}>
                  Accepted
                </p>
              ) : (
                <p style={{color: '#f00'}}>
                  Wrong Answer
                </p>
              ) }
            </p>
          </div>
        </div>
      }
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
            <b>Input:</b> lengths = [0.01, 4.5, 6.9, 5.7]
            <br />
            <b>Output:</b> false
            <br />
            <b>Explanation:</b> None of the lengths are longer than two feet.
          </p>
          <p className="Sample-Title">Sample 2:</p>
          <p className="Sample-Block">
            <b>Input:</b> lengths = [9.6, 7.4, 24.2]
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
            <button className="Submit-Button" onClick={submitCode}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
