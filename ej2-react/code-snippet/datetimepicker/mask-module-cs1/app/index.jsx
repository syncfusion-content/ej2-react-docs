import { DateTimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
export default class App extends React.Component {
    render() {
        return <DateTimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]}/></DateTimePickerComponent>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
