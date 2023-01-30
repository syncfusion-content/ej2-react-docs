import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To customize RadioButton appearance.
function App() {
    return (<ul>
          {/* Refer the 'e-primary' class details in 'style.css'.*/}
          <li><RadioButtonComponent label="Primary" cssClass="e-primary" name="custom"/></li>

          {/* Refer the 'e-success' class details in 'style.css'.*/}
          <li><RadioButtonComponent label="Success" cssClass="e-success" name="custom"/></li>

          {/* Refer the 'e-info' class details in 'style.css'.*/}
          <li><RadioButtonComponent label="Info" cssClass="e-info" checked={true} name="custom"/></li>

          {/* Refer the 'e-warning' class details in 'style.css'.*/}
          <li><RadioButtonComponent label="Warning" cssClass="e-warning" name="custom"/></li>

          {/* Refer the 'e-danger' class details in 'style.css'.*/}
          <li><RadioButtonComponent label="Danger" cssClass="e-danger" name="custom"/></li>
      </ul>);
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));
