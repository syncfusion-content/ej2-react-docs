


// import the daterangepicker component
import { DateRangePickerComponent, PresetsModel } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {

    private presets: PresetsModel[] = [
        { label: 'Today', start: new Date(), end: new Date() },
        { label: 'Last Week', start: new Date(new Date().setDate(new Date().getDate() - 7)), end: new Date() }
        ];

    public render() {
        return <DateRangePickerComponent placeholder='Select a range' presets={this.presets} />
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


