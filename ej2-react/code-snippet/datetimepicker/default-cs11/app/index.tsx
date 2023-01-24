


import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    private enable:boolean=false;

    public render() {
        return <DateTimePickerComponent id="datetimepicker" enabled={this.enable} placeholder='Select a date and time' />;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));


