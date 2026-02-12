import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
  const items = [
    { text: 'Cut', disabled: true },
    { text: 'Copy' },
    { text: 'Paste' }
  ];
  return (<div>
    <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
    <SpeedDialComponent id='speeddial' content='Edit' items={items} target="#targetElement"></SpeedDialComponent>
  </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));