

import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {
  let items: ItemModel[] = [
    {
        text: 'New tab'
    },
    {
        text: 'New window'
    },
    {
        text: 'New incognito window'
    },
    {
        separator: true
    },
    {
        text: 'Print'
    },
    {
        text: 'Cast'
    },
    {
        text: 'Find'
    }];

    return (
      <div>
        <DropDownButtonComponent items = {items} iconCss='e-icons e-menu' cssClass= 'e-caret-hide'></DropDownButtonComponent>
      </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


