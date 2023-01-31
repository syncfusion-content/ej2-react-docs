

import * as React from "react";
import * as ReactDOM from "react-dom";
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

//load the CLDR data files.
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as deTimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, deTimeZoneNames);

L10n.load({
  'de': {
    'daterangepicker': {
      applyText: 'Sich bewerben',
      cancelText: 'Stornieren',
      customRange: 'benutzerdefinierten Bereich',
      days: 'Tage',
      endLabel: 'Wählen Sie Enddatum',
      placeholder: 'Wählen Sie einen Bereich aus',
      selectedDays: 'Ausgewählte Tage',
      startLabel: 'Wählen Sie Startdatum'
    }
}
});
//import the daterangepicker component
function App() {
      return <DateRangePickerComponent id="daterangepicker" locale='de'/>
};
ReactDOM.render(<App />, document.getElementById('element'));


