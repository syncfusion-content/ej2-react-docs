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
            iconCss: 'e-db-icons e-cut'
        },
        {
            text: 'Copy',
            iconCss: 'e-icons e-copy'
        },
        {
            text: 'Paste',
            iconCss: 'e-db-icons e-paste'
        },
        {
            separator: true
        },
        {
            text: 'Font',
            iconCss: 'e-db-icons e-font'
        },
        {
            text: 'Paragraph',
            iconCss: 'e-db-icons e-paragraph'
        }
    ];
    return (<div>
         <DropDownButtonComponent items={items} iconCss='e-icons e-edit'> Edit </DropDownButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
