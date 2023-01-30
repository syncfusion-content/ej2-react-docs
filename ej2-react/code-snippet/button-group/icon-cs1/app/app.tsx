

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render ButtonGroup with icons.
function App() {
  return (
    <div>
      <div className='e-btn-group'>
        <ButtonComponent iconCss='e-icons e-left-icon'>HTML</ButtonComponent>
        <ButtonComponent iconCss='e-icons e-middle-icon'>CSS</ButtonComponent>
        <ButtonComponent iconCss='e-icons e-right-icon'>Javascript</ButtonComponent>
      </div>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('buttongroup'));


