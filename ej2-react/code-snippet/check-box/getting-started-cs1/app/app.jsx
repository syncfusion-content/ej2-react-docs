import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render CheckBox.
function App() {
    return (<CheckBoxComponent label="Default"/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));
