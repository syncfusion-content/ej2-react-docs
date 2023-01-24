

import * as React from "react";
import * as ReactDOM from "react-dom";
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
//import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
//import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

// enable ripple effect
enableRipple(true);

//load the CLDR data files.
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';

loadCldr(numberingSystems, gregorian, numbers);

L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit' }
    }
});
//import the timepickercomponent
function App() {
    return <TimePickerComponent id="time" locale='de'/>
};
ReactDOM.render(<App />, document.getElementById('timer'));


