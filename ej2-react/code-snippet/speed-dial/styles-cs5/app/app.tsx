{% raw %}


{/* Import the Speed Dial. */}
import { SpeedDialComponent, SpeedDialItemModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render Speed Dial.*/}
function App() {

  const items: SpeedDialItemModel[] = [
    { iconCss:'e-icons e-cut', title:'Cut' },
    { iconCss:'e-icons e-copy', title:'Copy' },
    { iconCss:'e-icons e-paste', title:'Paste' }
  ];

  return (
    <div>
      <div id="targetElement" style={{position:'relative', minHeight:'350px', border:'1px solid'}}></div>
      {/* Initialize the SpeedDial component */}
      <SpeedDialComponent id='speeddial' items={items} openIconCss='e-icons e-edit' target='#targetElement'></SpeedDialComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


{% endraw %}