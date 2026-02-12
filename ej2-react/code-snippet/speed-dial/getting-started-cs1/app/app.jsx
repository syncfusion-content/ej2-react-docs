{ /* Import the Speed Dial. */ }
import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
{ /* To render Speed Dial.*/ }
function App() {
  const items = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];
  return (<div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}>
    {/* Initialize the SpeedDial component. */}
    <SpeedDialComponent id='speeddial' items={items} content='Edit' target="#targetElement"></SpeedDialComponent>
  </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));