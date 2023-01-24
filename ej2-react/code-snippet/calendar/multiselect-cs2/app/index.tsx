

import { CalendarComponent} from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {

//initialize the values
const values: Date[] = [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')];

return <CalendarComponent id="calendar" isMultiSelection={true} values={values}  />

};
ReactDOM.render(<App />, document.getElementById('element'));


