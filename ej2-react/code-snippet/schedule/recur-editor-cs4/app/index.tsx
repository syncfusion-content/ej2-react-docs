import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { RecurrenceEditorComponent }
  from '@syncfusion/ej2-react-schedule';

const App = () => {
  const recObject = useRef<RecurrenceEditorComponent>(null);
  const ruleOutput = useRef(null);
  useEffect(() => {
    let dates: number[] = recObject.current.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1', null, 10, null);
    let stringCollection: string = '';
    for (let index: number = 0; index < dates.length; index++) {
      stringCollection += new Date(dates[index]);
      if (index + 1 !== dates.length) {
        stringCollection += '\n';
      }
    }
    let outputElement: HTMLElement = ruleOutput.current;
    outputElement.innerText = stringCollection;
  }, []);
  return (<div className='content-wrapper recurrence-editor-wrap'>
    <div style={{ paddingBottom: '15px' }}>
      <label>Date Collections</label>
      <div className='rule-output-container'>
        <div ref={ruleOutput}></div>
      </div>
    </div>
    <div className='RecurrenceEditor' style={{ display: 'none' }}>
      <RecurrenceEditorComponent id='RecurrenceEditor' ref={recObject}></RecurrenceEditorComponent>
    </div>
  </div>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);