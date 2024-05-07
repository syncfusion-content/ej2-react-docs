

// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
//creates a calendar with decade view and navigate up to year view.
    return <CalendarComponent id="calendar" start="Year" />;
}
ReactDOM.render(<App />, document.getElementById('element'));


