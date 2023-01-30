import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render DropDownButton.
function App() {
    let items = [
        {
            text: 'Display Settings'
        },
        {
            text: 'System Settings'
        },
        {
            text: 'Additional Settings'
        }
    ];
    return (<div>
      <DropDownButtonComponent items={items} iconCss='e-icons e-image' cssClass='e-caret-hide'/>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
