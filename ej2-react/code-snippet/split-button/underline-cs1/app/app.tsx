

import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render SplitButton.
function App() {

  let items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

    function itemRender(args: MenuEventArgs) {
        if (args.item.text === 'Copy') {
            // To underline a particular text.
            args.element.innerHTML = '<u>C</u>opy';
        }
    }
  return (
  <div>
      <SplitButtonComponent items = {items} beforeItemRender={itemRender}>Paste</SplitButtonComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


