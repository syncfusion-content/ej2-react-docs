

import { TimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

function App() {
    let maskPlaceholderValue: object;
    maskPlaceholderValue = { hour: 'h', minute: 'm', second: 's' };
       return (
            <div>
                {/* specifies the masked TimePicker component without mask placeholder */}
                <TimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]} /></TimePickerComponent>
                <br />
                <br />

                {/* specifies the masked TimePicker component with mask placeholder  */}
                <TimePickerComponent  enableMask={true} maskPlaceholder={maskPlaceholderValue}><Inject services={[MaskedDateTime]} /></TimePickerComponent>
            </div>
        );
}
ReactDOM.render(<App />, document.getElementById('element'));


