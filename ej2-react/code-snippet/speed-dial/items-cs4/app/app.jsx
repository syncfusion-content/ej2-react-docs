import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

function App() {
  const items = [
    { text: 'Cut', disabled: true, title: 'Cut' },
    { text: 'Copy', title: 'Copy' },
    { text: 'Paste', title: 'Paste' }
  ];
  return (<div>
    <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
    <SpeedDialComponent id='speeddial' content='Edit' items={items} target="#targetElement"></SpeedDialComponent>
  </div>);
}
export default App;
createRoot(document.getElementById('button')).render(<App />);