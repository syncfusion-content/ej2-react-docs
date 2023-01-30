

import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <ul>
          {/* Label position - Left. */}
          <li><RadioButtonComponent label="Left Side Label" name="position" labelPosition="Before" /></li>

          {/* Label position - Right. */}
          <li><RadioButtonComponent label="Right Side Label" name="position" checked={true} /></li>
      </ul>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));


