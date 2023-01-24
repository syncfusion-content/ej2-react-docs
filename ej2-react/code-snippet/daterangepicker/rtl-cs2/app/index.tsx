

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
import * as heTimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, heTimeZoneNames);

L10n.load({
  'he': {
    'daterangepicker': {
      applyText: 'להחיל טקסט',
      cancelText: 'בטל טקסט',
      customRange: 'טווח מותאם אישית',
      days: 'أימים',
      endLabel: 'ח',
      placeholder: 'בחר טווח',
      selectedDays: 'ימים נבחרים',
      startLabel: 'תווית התחלה'
    }
  }
});
//import the datrangeepicker component
function App() {
    return <DateRangePickerComponent id="daterangepicker" locale='he' enableRtl={true} />
};
ReactDOM.render(<App />, document.getElementById('element'));


