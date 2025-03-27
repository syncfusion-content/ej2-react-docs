


import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    private dateValue:Date=new Date();

    public render() {
        return <DateTimePickerComponent id="datetimepicker" value={this.dateValue} format='yyyy-MM-dd hh:mm' inputFormats={['dd/MM/yyyy hh:mm', 'yyyyMMdd hh:mm']} placeholder='Select a date and time' />;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));


