import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render DropDownButton.
function App() {
    let items = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }
    ];
    function itemRender(args) {
        if (args.item.text === 'Copy') {
            // To underline a particular text.
            args.element.innerHTML = '<u>C</u>opy';
        }
    }
    return (<div>
      <DropDownButtonComponent items={items} beforeItemRender={itemRender}>Clipboard</DropDownButtonComponent>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
