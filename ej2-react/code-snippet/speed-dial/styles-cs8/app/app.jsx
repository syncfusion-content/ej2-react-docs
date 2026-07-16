import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

function App() {
  return (<div>
    <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
    {/* Initialize the SpeedDial component in disabled state */}
    <SpeedDialComponent id='speeddial' content='Edit' disabled={true} target="#targetElement"></SpeedDialComponent>
  </div>);
}
export default App;
createRoot(document.getElementById('button')).render(<App />);
