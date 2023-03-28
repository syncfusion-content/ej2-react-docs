

import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// initializes NumericTextBox component
// sets value to the NumericTextBox
function App() {
  return <NumericTextBoxComponent value={10} />;
}
ReactDOM.render(<App />, document.getElementById('numericContainer'));


