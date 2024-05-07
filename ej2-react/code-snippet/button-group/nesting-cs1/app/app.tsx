


import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';

// To render ButtonGroup with DropDownButton nesting.
function App() {
  let items: ItemModel[] = [
    {
        text: 'Learn SQL'
    },
    {
        text: 'Learn PHP'
    },
    {
        text: 'Learn Bootstrap'
    }];

  return (
    <div>
      <div className='e-btn-group'>
          <ButtonComponent>HTML</ButtonComponent>
          <ButtonComponent>CSS</ButtonComponent>
          <ButtonComponent>Javascript</ButtonComponent>
          <DropDownButtonComponent id="dropdownelement" items={items}> More </DropDownButtonComponent>
      </div>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('buttongroup'));



