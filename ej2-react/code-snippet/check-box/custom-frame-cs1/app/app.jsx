import { enableRipple } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To customize CheckBox appearance.
function App() {
    return (<ul>
          <li><CheckBoxComponent label="Buy Groceries" cssClass="e-custom" checked={true}/></li>

          <li><CheckBoxComponent label="Pay Rent" cssClass="e-custom"/></li>

          <li><CheckBoxComponent label="Make Dinner" cssClass="e-custom"/></li>

          <li><CheckBoxComponent label="Finish To-do List Article" cssClass="e-custom"/></li>
      </ul>);
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));
