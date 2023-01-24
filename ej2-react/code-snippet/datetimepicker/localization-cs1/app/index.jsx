import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// load the CLDR data files.
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
    'de': {
        'datetimepicker': {
            placeholder: 'Wählen Sie ein Datum und eine Uhrzeit aus',
            today: 'heute'
        }
    }
});
class App extends React.Component {
    dateValue = new Date("12/11/2017 1:00 AM");
    render() {
        return <DateTimePickerComponent id="datetimepicker" value={this.dateValue} locale='de'/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
