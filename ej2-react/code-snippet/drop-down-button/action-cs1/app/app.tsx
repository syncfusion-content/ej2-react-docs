

import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {

  let items: ItemModel[] = [
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
  <div>
        <DropDownButtonComponent items = {items} iconCss= 'e-cart-icon e-shopping' beforeItemRender={itemBeforeEvent} > Shop By </DropDownButtonComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


