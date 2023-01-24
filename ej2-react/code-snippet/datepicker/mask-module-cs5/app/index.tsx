


import { DatePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

export default class App extends React.Component<{}, {}> {
    private maskPlaceholderValue: object;
    constructor(props: {}) {
    super(props);
    this.maskPlaceholderValue = {day: 'd', month: 'M', year: 'y'};
    }
    public render() {
       return (
            <div>
                {/* specifies the masked DatePicker component without mask placeholder */}
                <DatePickerComponent enableMask={true}><Inject services={[MaskedDateTime]} /></DatePickerComponent>
                <br />
                <br />

                {/* specifies the masked DatePicker component with mask placeholder  */}
                <DatePickerComponent  enableMask={true} maskPlaceholder={this.maskPlaceholderValue}><Inject services={[MaskedDateTime]} /></DatePickerComponent>
            </div>
        );

    }
}
ReactDOM.render(<App />, document.getElementById('element'));


