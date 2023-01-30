import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    let spinSettings = { position: 'Right', width: 20, template: '<div class="template"></div>' };
    return (<ProgressButtonComponent content='Submit' spinSettings={spinSettings}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));
