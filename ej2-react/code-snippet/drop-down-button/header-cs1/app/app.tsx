

import { enableRipple } from '@syncfusion/ej2-base';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {
  let data: Array<{ [key: string]: string; }> = [
    { class: 'data', text: 'Print', id: 'data1', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Save As', id: 'data2', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Update Folder', id: 'data3', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Reply', id: 'data4', category: 'Customize Quick Access Toolbar' }
  ];

  let field: { [key: string]: string; } = { text: 'text', groupBy: 'category' };
  
    return (
      <div>
        <ListViewComponent id="listview" dataSource={data} fields={field} showCheckBox={true}/>
        <DropDownButtonComponent  target='#listview' iconCss='e-icons e-down' cssClass='e-caret-hide'/>
      </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));



