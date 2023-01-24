


// import the datepickercomponent
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {

    private disable:boolean = false;

    public render() {
        return <DateRangePickerComponent placeholder='Select a range' enabled={this.disable} />
    }
};
ReactDOM.render(<App />, document.getElementById('element'));



