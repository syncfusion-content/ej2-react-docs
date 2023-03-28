import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    return <NumericTextBoxComponent value={10}/>;
}
ReactDOM.render(<App />, document.getElementById('numericContainer'));
