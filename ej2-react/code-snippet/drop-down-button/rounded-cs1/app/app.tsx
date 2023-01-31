

import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
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

    return (
    <div>
      <DropDownButtonComponent items = {items} cssClass='e-round-corner'>Clipboard</DropDownButtonComponent>
      </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));



