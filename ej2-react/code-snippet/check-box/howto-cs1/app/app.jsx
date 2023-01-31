import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To customize CheckBox appearance.
function App() {
    return (<ul>
          {/* Refer the 'e-primary' class details in 'style.css'.*/}
          <li><CheckBoxComponent label="Primary" cssClass="e-primary" checked={true}/></li>

          {/* Refer the 'e-success' class details in 'style.css'.*/}
          <li><CheckBoxComponent label="Success" cssClass="e-success" checked={true}/></li>

          {/* Refer the 'e-info' class details in 'style.css'.*/}
          <li><CheckBoxComponent label="Info" cssClass="e-info" checked={true}/></li>

          {/* Refer the 'e-warning' class details in 'style.css'.*/}
          <li><CheckBoxComponent label="Warning" cssClass="e-warning" checked={true}/></li>

          {/* Refer the 'e-danger' class details in 'style.css'.*/}
          <li><CheckBoxComponent label="Danger" cssClass="e-danger" checked={true}/></li>
      </ul>);
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));
