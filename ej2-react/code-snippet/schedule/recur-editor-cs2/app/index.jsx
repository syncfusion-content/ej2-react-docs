import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { RecurrenceEditorComponent, RecurrenceEditorChangeEventArgs }
  from '@syncfusion/ej2-react-schedule';
const App = () => {
  const recObject = useRef(null);
  const ruleOutput = useRef(null);
  useEffect(() => {
    let outputElement = ruleOutput.current;
    recObject.current.setRecurrenceRule('FREQ=DAILY;INTERVAL=2;COUNT=8');
    outputElement.innerText = recObject.current.value;
  }, []);
  const onChange = (args) => {
    let outputElement = ruleOutput.current;
    outputElement.innerText = args.value;
  }
  return (<div className='content-wrapper recurrence-editor-wrap'>
    <div style={{ paddingBottom: '15px' }}>
      <label>Rule Output</label>
      <div className='rule-output-container'>
        <div ref={ruleOutput}></div>
      </div>
    </div>
    <div className='RecurrenceEditor'>
      <RecurrenceEditorComponent id='RecurrenceEditor' ref={recObject} change={onChange}></RecurrenceEditorComponent>
    </div>
  </div>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);