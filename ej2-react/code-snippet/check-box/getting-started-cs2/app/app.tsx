

import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);
// To customize CheckBox appearance.
function App() {
  return (
      <ul>
          <li><CheckBoxComponent label="Default" enableRtl={true} /></li>
      </ul>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));


