import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

/* To render Speed Dial.*/
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
createRoot(document.getElementById('button')).render(<App />);