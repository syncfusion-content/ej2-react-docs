import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render Switch.
function App() {
    return (<SwitchComponent onLabel="ON" offLabel="OFF" checked={true}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));
