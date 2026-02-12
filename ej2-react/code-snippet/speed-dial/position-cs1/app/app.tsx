import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
  return (
    <div>
      <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
      <SpeedDialComponent id='speeddial' content='Add' position='BottomLeft' target="#targetElement"></SpeedDialComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));