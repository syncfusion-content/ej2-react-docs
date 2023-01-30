

import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  let menuItems: MenuItemModel[] = [
    {
        iconCss: 'e-cm-icons e-cut',
        text: 'Cut'
    },
    {
        iconCss: 'e-icons e-copy',
        text: 'Copy'
    },
    {
        iconCss: 'e-cm-icons e-paste',
        text: 'Paste'
    }];

  return (
          <div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target' items={menuItems}/>
          </div>
      );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


