import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render RadioButton.
function App() {
    return (<ul>
    <li><RadioButtonComponent label="Option 1" name="default"/></li>
    <li><RadioButtonComponent label="Option 2" name="default"/></li>
    </ul>);
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));
