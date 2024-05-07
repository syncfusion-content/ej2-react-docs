


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render ButtonGroup with RTL.
function App() {
  return (
    <div>
      <div className='e-btn-group e-rtl'>
        <ButtonComponent>HTML</ButtonComponent>
        <ButtonComponent>CSS</ButtonComponent>
        <ButtonComponent>Javascript</ButtonComponent>
      </div>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('buttongroup'));



