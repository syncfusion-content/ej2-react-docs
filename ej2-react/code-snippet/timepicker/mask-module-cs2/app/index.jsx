import { TimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
function App() {
    return <TimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]}/></TimePickerComponent>;
}
ReactDOM.render(<App />, document.getElementById('element'));
