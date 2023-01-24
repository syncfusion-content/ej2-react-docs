import { DateTimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
export default class App extends React.Component {
    render() {
        return (<div>
                {/* specifies the masked DateTimePicker component without format */}
                <DateTimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]}/></DateTimePickerComponent>
                <br />
                <br />

                {/* specifies the masked DateTimePicker component with format  */}
                <DateTimePickerComponent format='dd-MM-yyyy hh:mm a' enableMask={true}><Inject services={[MaskedDateTime]}/></DateTimePickerComponent>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
