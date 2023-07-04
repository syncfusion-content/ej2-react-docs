import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { RecurrenceEditorComponent }
  from '@syncfusion/ej2-react-schedule';

const App = () => {
  const recObject = useRef(null);
  useEffect(() => {
    recObject.current.endTypes = ['until', 'count'];
  }, []);
  return (<div className='content-wrapper recurrence-editor-wrap'>
    <div className='RecurrenceEditor'>
      <RecurrenceEditorComponent id='RecurrenceEditor' ref={recObject}></RecurrenceEditorComponent>
    </div>
  </div>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);