

import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <ul>
          {/* checked state. */}
          <li><CheckBoxComponent label="Checked State" checked={true} /></li>

          {/* unchecked state. */}
          <li><CheckBoxComponent label="Unchecked State" /></li>

          {/* indeterminate state. */}
          <li><CheckBoxComponent label="Indeterminate State" indeterminate={true} /></li>
      </ul>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));


