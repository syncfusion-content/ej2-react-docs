import { SpeedDialComponent, type SpeedDialItemModel, type SpeedDialAnimationSettingsModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

function App() {
  const items: SpeedDialItemModel[] = [
    { text: 'Cut', iconCss: 'e-icons e-cut', title: 'Cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy', title: 'Copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste', title: 'Paste' }
  ];
  const animation: SpeedDialAnimationSettingsModel =
    { effect: 'Zoom' };

  return (
    <div>
      <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
      <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' content='Edit' items={items} animation={animation} target="#targetElement"></SpeedDialComponent>
    </div>
  );
}
export default App;
createRoot(document.getElementById('button')!).render(<App />);