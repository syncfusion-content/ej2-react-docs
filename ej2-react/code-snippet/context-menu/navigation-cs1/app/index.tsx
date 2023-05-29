

import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  let menuItems: MenuItemModel[] = [
    {
        iconCss: 'e-cart-icon e-link',
        text: 'Flipkart',
        url: 'https://www.google.co.in/search?q=flipkart'
    },
    {
        iconCss: 'e-cart-icon e-link',
        text: 'Amazon',
        url: 'https://www.google.co.in/search?q=amazon'
    },
    {
        iconCss: 'e-cart-icon e-link',
        text: 'Snapdeal',
        url: 'https://www.google.co.in/search?q=snapdeal'
    }];

  function itemBeforeEvent(args: MenuEventArgs) {
      args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
  }

  return (
          <div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target' items={menuItems}
            beforeItemRender={itemBeforeEvent}/>
          </div>
      );
  }
export default App;
ReactDom.render(<App />,document.getElementById('element'));


