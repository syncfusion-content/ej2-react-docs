{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RecurrenceEditorComponent }
  from '@syncfusion/ej2-react-schedule';

function App() {
  let recObject: RecurrenceEditorComponent;

  React.useEffect(() => {
    let dates: number[] = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1', '20180108T114224Z,20180110T114224Z', 4, new Date(2018, 0, 7));
    let stringCollection: string = '';
    for (let index: number = 0; index < dates.length; index++) {
      stringCollection += new Date(dates[index]);
      if (index + 1 !== dates.length) {
        stringCollection += '\n';
      }
    }
    let outputElement: HTMLElement = document.querySelector('#rule-output') as HTMLElement;
    outputElement.innerText = stringCollection;
  }, []);

  return (<div className='content-wrapper recurrence-editor-wrap'>
    <div style={{ paddingBottom: '15px' }}>
      <label>Date Collections</label>
      <div className='rule-output-container'>
        <div id='rule-output'></div>
      </div>
    </div>
    <div className='RecurrenceEditor' style={{ display: "none" }}>
      <RecurrenceEditorComponent id='RecurrenceEditor' ref={t => recObject = t}></RecurrenceEditorComponent>
    </div>
  </div>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



{% endraw %}