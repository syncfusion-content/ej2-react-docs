import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render DropDownButton.
function App() {
    let items = [
        {
            text: 'Cut',
        },
        {
            text: 'Copy',
        },
        {
            text: 'Paste',
        }
    ];
    return (<div>
       <DropDownButtonComponent id="element" items={items}> Clipboard </DropDownButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
