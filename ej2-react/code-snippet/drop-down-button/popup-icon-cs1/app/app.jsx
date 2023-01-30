import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render DropDownButton.
function App() {
    let items = [
        {
            text: 'Edit',
            iconCss: 'ddb-icons e-edit'
        },
        {
            text: 'Delete',
            iconCss: 'ddb-icons e-delete'
        },
        {
            text: 'Mark As Read',
            iconCss: 'ddb-icons e-read'
        },
        {
            text: 'Like Message',
            iconCss: 'ddb-icons e-like'
        }
    ];
    return (<div>
        <DropDownButtonComponent items={items} iconCss='ddb-icons e-message'> Message </DropDownButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
