

import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render Button.
function App() {
  return (
    <ButtonComponent>Button</ButtonComponent>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


