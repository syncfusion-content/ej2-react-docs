

import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <ul>
          {/* Label position - Left. */}
          <li><CheckBoxComponent label="Left Side Label" labelPosition="Before" /></li>

          {/* Label position - Right. */}
          <li><CheckBoxComponent label="Right Side Label" checked={true} /></li>
      </ul>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));


