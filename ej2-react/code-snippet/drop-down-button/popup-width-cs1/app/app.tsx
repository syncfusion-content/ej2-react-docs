import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {

  let items: ItemModel[] = [
    {
      text: 'Selection',
      iconCss: 'e-icons e-list-unordered'
    },
    {
      text: 'Yes / No',
      iconCss: 'e-icons e-check-box',
    },
    {
      text: 'Text',
      iconCss: 'e-icons e-caption'
    },
    {
      text: 'None',
      iconCss: 'e-icons e-mouse-pointer'
    }];

  return (
    <div>
      <DropDownButtonComponent items={items} popupWidth="200px">
        DropDownButton
      </DropDownButtonComponent>
    </div>
  );
}

export default App;
ReactDom.render(<App />, document.getElementById('button'));