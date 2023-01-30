import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// Name and Value attribute in form submit.
function App() {
    return (<form>
      <ul>
          <li><CheckBoxComponent name="Sport" value="Cricket" label="Cricket" checked={true}/></li>

          <li><CheckBoxComponent name="Sport" value="Hockey" label="Hockey" checked={true}/></li>

          <li><CheckBoxComponent name="Sport" value="Tennis" label="Tennis" disabled={true}/></li>

          <li><CheckBoxComponent name="Sport" value="Basketball" label="Basketball"/></li>

          <li><ButtonComponent isPrimary={true}>Submit</ButtonComponent></li>
      </ul>
    </form>);
}
export default App;
ReactDom.render(<App />, document.getElementById('check-box'));
