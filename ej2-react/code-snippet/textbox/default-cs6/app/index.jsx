import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    return (<TextBoxComponent
        id='default'
        placeholder="Address"
        floatLabelType="Auto"
        multiline="true"
    />);
}
ReactDOM.render(<App />, document.getElementById('input-container'));
