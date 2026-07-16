import { SpeedDialComponent, type SpeedDialItemModel, type SpeedDialItemEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

{/* Initialize action items. */ }
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function itemClick(args: SpeedDialItemEventArgs) {
    alert(args.item.text + " is clicked")
  }

  return (
    <div>
      <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
      {/* Initialize the SpeedDial component */}
      <SpeedDialComponent id='speeddial' items={items} content='Edit' target='#targetElement' clicked={itemClick}></SpeedDialComponent>
    </div>
  );
}
export default App;
createRoot(document.getElementById('button')!).render(<App />);