import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

function App() {
  const items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];
  const radialSettings = { direction: 'AntiClockwise' };
  return (<div>
    <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
    <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} mode='Radial' radialSettings={radialSettings} target="#targetElement"></SpeedDialComponent>
  </div>);
}
export default App;
createRoot(document.getElementById('button')).render(<App />);
