

import * as React from "react";
import * as ReactDOM from "react-dom";
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { loadCldr,L10n } from '@syncfusion/ej2-base';

L10n.load({
    'ar-AE': {
      'numerictextbox': { incrementTitle: 'قيمة الزيادة', decrementTitle: 'قيمة تناقص'}
    }
});

// initializes NumericTextBox component
// sets `German` culture using the culture value 'de'
// sets the 'EUR' currency format
function App() {
  return (
    <NumericTextBoxComponent
      locale="ar-AE"
      enableRtl="true"
      floatLabelType="Auto"
      placeholder="أدخل القيمة"
      value={100}
    />
  );
}
ReactDOM.render(<App />, document.getElementById('numericContainer'));


