

import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {

  let items: ItemModel[] = [
    {
      iconCss: 'e-db-icons e-cut',
      text: 'Cut'
    },
    {
      iconCss: 'e-icons e-copy',
      text: 'Copy'
    },
    {
      iconCss: 'e-db-icons e-paste',
      text: 'Paste'
    },
    {
        separator: true
    },
    {
      iconCss: 'e-db-icons e-font',
      text: 'Font'
    },
    {
      iconCss: 'e-db-icons e-paragraph',
      text: 'Paragraph'
    }];

  return (
  <div>
      <DropDownButtonComponent items = {items} iconCss= 'e-icons e-edit'> Clipboard </DropDownButtonComponent>

    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));



