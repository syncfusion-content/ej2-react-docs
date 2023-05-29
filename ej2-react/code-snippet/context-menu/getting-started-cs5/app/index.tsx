

import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  let menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

  function itemBeforeEvent(args: MenuEventArgs) {
      if (args.item.text === 'Copy') {
        args.element.innerHTML = '<u>C</u>opy';
      }
  }

  return (
          <div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target' items={menuItems} beforeItemRender={itemBeforeEvent}/>
          </div>
      );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));



