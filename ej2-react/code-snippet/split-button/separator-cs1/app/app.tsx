

import { enableRipple } from '@syncfusion/ej2-base';
import { ItemModel, SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render SplitButton.
function App() {

  let items: ItemModel[] = [
    {
      iconCss: 'e-sb-icons e-cut',
      text: 'Cut'
    },
    {
      iconCss: 'e-icons e-copy',
      text: 'Copy'
    },
    {
      iconCss: 'e-sb-icons e-paste',
      text: 'Paste'
    },
    {
        separator: true
    },
    {
      iconCss: 'e-sb-icons e-font',
      text: 'Font'
    },
    {
      iconCss: 'e-sb-icons e-paragraph',
      text: 'Paragraph'
    }];
  return (
  <div>
      <SplitButtonComponent items = {items} iconCss= 'e-sb-icons e-paste'>Paste</SplitButtonComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


