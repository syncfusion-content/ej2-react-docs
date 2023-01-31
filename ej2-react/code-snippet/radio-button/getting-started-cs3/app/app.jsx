import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render RadioButton.
function App() {
    let radioInstance1;
    let radioInstance2;
    let radioInstance3;
    function changeOption1() {
        document.getElementById('text').innerText = 'Selected : ' + radioInstance1.label;
    }
    function changeOption2() {
        document.getElementById('text').innerText = 'Selected : ' + radioInstance2.label;
    }
    function changeOption3() {
        document.getElementById('text').innerText = 'Selected : ' + radioInstance3.label;
    }
    return (<ul>
      <li><div id="text">Selected : Option 1</div></li>
      <li><RadioButtonComponent label="Option 1" name="default" checked={true} change={changeOption1} ref={radio1 => radioInstance1 = radio1}/></li>
      <li><RadioButtonComponent label="Option 2" name="default" disabled={true} change={changeOption2} ref={radio2 => radioInstance2 = radio2}/></li>
      <li><RadioButtonComponent label="Option 3" name="default" change={changeOption3} ref={radio3 => radioInstance3 = radio3}/></li>
      </ul>);
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));
