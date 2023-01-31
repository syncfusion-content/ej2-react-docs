

import { DatePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

function App() {
    let maskPlaceholderValue: object;
    maskPlaceholderValue = {day: 'd', month: 'M', year: 'y'};
       return (
            <div>
                {/* specifies the masked DatePicker component without mask placeholder */}
                <DatePickerComponent enableMask={true}><Inject services={[MaskedDateTime]} /></DatePickerComponent>
                <br />
                <br />

                {/* specifies the masked DatePicker component with mask placeholder  */}
                <DatePickerComponent  enableMask={true} maskPlaceholder={maskPlaceholderValue}><Inject services={[MaskedDateTime]} /></DatePickerComponent>
            </div>
        );
}
ReactDOM.render(<App />, document.getElementById('element'));


