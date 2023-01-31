

import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <ul>
          {/* Small CheckBox. */}
          <li><CheckBoxComponent label="Small" cssClass="e-small" /></li>

          {/* Default CheckBox. */}
          <li><CheckBoxComponent label="Default" /></li>
      </ul>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));


