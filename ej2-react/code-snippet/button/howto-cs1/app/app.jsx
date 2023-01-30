import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To customize Button appearance.
// Refer the "e-custom" class details in "styles.css".
function App() {
    return (<ButtonComponent cssClass='e-custom'>Custom</ButtonComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
