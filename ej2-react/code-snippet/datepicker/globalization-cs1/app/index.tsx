

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// load the CLDR data files.
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
    'de': {
        'datepicker': { placeholder: 'Wählen Sie ein Datum aus',
         today: 'heute' }
    }
});
// import the datepickercomponent
class App extends React.Component<{}, {}> {
    render() {
        return <DatePickerComponent id="datepicker" locale='de'/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));


