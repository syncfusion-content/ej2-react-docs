

// import the daterangepicker component
import { DateRangePickerComponent, PresetsModel } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App(){
    const presets: PresetsModel[] = [
        { label: 'Today', start: new Date(), end: new Date() },
        { label: 'Last Week', start: new Date(new Date().setDate(new Date().getDate() - 7)), end: new Date() }
        ];

    return <DateRangePickerComponent placeholder='Select a range' presets={presets} />

};
ReactDOM.render(<App />, document.getElementById('element'));


