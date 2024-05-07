


import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SplitButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';

// To render ButtonGroup with SplitButton nesting.
function App() {
    let items: ItemModel[] = [
    {
        text: 'Paste'
    },
    {
        text: 'Paste Text'
    },
    {
        text: 'Paste Special'
    }];

  return (
    <div>
      <div className='e-btn-group'>
          <ButtonComponent>Cut</ButtonComponent>
          <ButtonComponent>Copy</ButtonComponent>
          <SplitButtonComponent id="splitbuttonelement" items={items}> Paste </SplitButtonComponent>
      </div>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('buttongroup'));



