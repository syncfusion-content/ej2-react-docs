


// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    private enable:boolean = false;

    public render() {
        return (
            // specifies the tag for render the DatePicker component
            <DatePickerComponent enabled={this.enable} placeholder="Enter date"/>
        );
     }
 }

ReactDOM.render(<App />, document.getElementById('element'));



