

import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <ul>
          {/* Small RadioButton. */}
          <li><RadioButtonComponent label="Small" name="size" cssClass="e-small" /></li>

          {/* Default RadioButton. */}
          <li><RadioButtonComponent label="Default"  name="size" /></li>
      </ul>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));


