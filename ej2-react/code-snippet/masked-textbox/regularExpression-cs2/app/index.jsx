import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    return (<MaskedTextBoxComponent mask="[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]" placeholder="IP Address (ex: 212.212.111.222)" floatLabelType="Always"/>);
}
ReactDOM.render(<App />, document.getElementById('masktextbox'));
