import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    return <MaskedTextBoxComponent mask={'999-999-9999'} promptChar={'#'}/>;
}
ReactDOM.render(<App />, document.getElementById('maskedContainer'));
