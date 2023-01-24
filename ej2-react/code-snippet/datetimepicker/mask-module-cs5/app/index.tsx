


import { DateTimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

export default class App extends React.Component<{}, {}> {
    private maskPlaceholderValue: object;
    constructor(props: {}) {
    super(props);
    this.maskPlaceholderValue = {day: 'd', month: 'M', year: 'y', hour: 'h', minute: 'm', second: 's'};
    }
    public render() {
       return (
            <div>
                {/* specifies the masked DateTimePicker component without mask placeholder */}
                <DateTimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]} /></DateTimePickerComponent>
                <br />
                <br />

                {/* specifies the masked DateTimePicker component with mask placeholder  */}
                <DateTimePickerComponent  enableMask={true} maskPlaceholder={this.maskPlaceholderValue}><Inject services={[MaskedDateTime]} /></DateTimePickerComponent>
            </div>
        );

    }
}
ReactDOM.render(<App />, document.getElementById('element'));


