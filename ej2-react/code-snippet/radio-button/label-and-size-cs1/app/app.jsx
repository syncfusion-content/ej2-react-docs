import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    return (<ul>
          {/* checked state. */}
          <li><RadioButtonComponent label="Option 1" name="state" checked={true}/></li>

          {/* unchecked state. */}
          <li><RadioButtonComponent label="Option 2" name="state"/></li>
      </ul>);
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));
