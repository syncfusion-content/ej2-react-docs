

import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  let cMenu: ContextMenuComponent;
  let menuItems: MenuItemModel[] = [
    {
        items: [
          {
            text: 'Large icons'
          },
          {
            text: 'Medium icons'
          },
          {
            text: 'Small icons'
          }
        ],
        text: 'View'
    },
    {
        text: 'Refresh'
    },
    {
        text: 'Paste'
    },
    {
        separator: true
    },
    {
        text: 'New'
    },
    {
        separator: true
    },
    {
        text: 'Personalize'
    }];

  function created(): void {
    cMenu.insertAfter([{text: 'Sort By'}] , 'Refresh');
    cMenu.insertBefore([{text: 'Display Settings'}] , 'Personalize');
    cMenu.removeItems(['Paste']);
  };

  return (
          <div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
              <ContextMenuComponent id="cmenu" ref={(scope) => cMenu = scope as ContextMenuComponent} target='#target' items={menuItems} created={created}/>
          </div>
      );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


