import { enableRipple } from '@syncfusion/ej2-base';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render Switch with checked state.
function App() {
    return (<SwitchComponent checked={true}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));
