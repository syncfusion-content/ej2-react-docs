import { DatePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
export default class App extends React.Component {
    render() {
        return (<div>
                {/* specifies the masked DatePicker component without format */}
                <DatePickerComponent enableMask={true}><Inject services={[MaskedDateTime]}/></DatePickerComponent>
                <br />
                <br />

                {/* specifies the masked DatePicker component with format  */}
                <DatePickerComponent format='dd-MM-yyyy' enableMask={true}><Inject services={[MaskedDateTime]}/></DatePickerComponent>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
