import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
  return (<div>
    <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
    {/* Initialize the SpeedDial component with applied warning style */}
    <SpeedDialComponent id='speeddial' content='Edit' cssClass='e-warning' target="#targetElement"></SpeedDialComponent>
  </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));