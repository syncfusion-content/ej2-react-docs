import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// initializes NumericTextBox component
// sets value to the NumericTextBox
function App() {
    return <NumericTextBoxComponent min={10} max={20} value={16} step={2}/>;
}
ReactDOM.render(<App />, document.getElementById('numericContainer'));
