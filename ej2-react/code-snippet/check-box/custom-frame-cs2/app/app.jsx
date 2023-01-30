import * as React from 'react';
import * as ReactDom from 'react-dom';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
// To customize CheckBox appearance.
function App() {
    return (<ul>
          <li><CheckBoxComponent label="Buy Groceries" cssClass="e-checkicon" checked={true}/></li>

          <li><CheckBoxComponent label="Pay Rent" cssClass="e-checkicon"/></li>

          <li><CheckBoxComponent label="Make Dinner" cssClass="e-checkicon"/></li>

          <li><CheckBoxComponent label="Finish To-do List Article" cssClass="e-checkicon"/></li>
      </ul>);
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));
