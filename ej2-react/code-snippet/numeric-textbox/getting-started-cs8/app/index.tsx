import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// sets currency with 2 numbers of decimal places format
function App() {
  return <NumericTextBoxComponent format="c2" value={10} />;
}

ReactDOM.render(<App />, document.getElementById('numericContainer'));
