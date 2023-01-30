{% raw %}


{/* Import the Speed Dial. */}
import { SpeedDialComponent, SpeedDialItemModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render Speed Dial.*/}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut', disabled: true },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  return (
    <div>
      <div id="targetElement" style={{position:'relative', minHeight:'350px', border:'1px solid'}}></div>
      <SpeedDialComponent id='speeddial' content='Edit' items={items} target="#targetElement"></SpeedDialComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


{% endraw %}