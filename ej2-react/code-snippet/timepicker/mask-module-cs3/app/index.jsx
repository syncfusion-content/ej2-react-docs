import { TimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
export default class App extends React.Component {
    render() {
        return (<div>
                {/* specifies the masked TimePicker component without format */}
                <TimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]}/></TimePickerComponent>
                <br />
                <br />

                {/* specifies the masked TimePicker component with format  */}
                <TimePickerComponent format='h:mm a' enableMask={true}><Inject services={[MaskedDateTime]}/></TimePickerComponent>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
