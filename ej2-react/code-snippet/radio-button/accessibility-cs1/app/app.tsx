

import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render RadioButton.
function App() {
  return (
    <ul>
          <li><RadioButtonComponent  class="radiobutton" label="Option 1" name="state" checked={true} /></li>
          <li><RadioButtonComponent  class="radiobutton" label="Option 2" name="state" /></li>
          <li>
              <RadioButtonComponent  class="radiobutton" label="Option 3" name="state" />
              <RadioButtonComponent  class="radiobutton"label="Option 4" name="state" />
          </li>
      </ul>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));


