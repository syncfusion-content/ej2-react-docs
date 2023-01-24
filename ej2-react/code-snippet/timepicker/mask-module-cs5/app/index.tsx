


import { TimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

export default class App extends React.Component<{}, {}> {
    private maskPlaceholderValue: object;
    constructor(props: {}) {
    super(props);
    this.maskPlaceholderValue = { hour: 'h', minute: 'm', second: 's' };
    }
    public render() {
       return (
            <div>
                {/* specifies the masked TimePicker component without mask placeholder */}
                <TimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]} /></TimePickerComponent>
                <br />
                <br />

                {/* specifies the masked TimePicker component with mask placeholder  */}
                <TimePickerComponent  enableMask={true} maskPlaceholder={this.maskPlaceholderValue}><Inject services={[MaskedDateTime]} /></TimePickerComponent>
            </div>
        );

    }
}
ReactDOM.render(<App />, document.getElementById('element'));


