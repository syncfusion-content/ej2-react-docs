
import {ButtonComponent, CheckBoxComponent} from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState } from 'react';
enableRipple(true);

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEventArgs) => {
    const checked = event.checked ?? false;
    setIsChecked(checked);

    // Add or remove the class on the body element based on the checkbox state
    if (checked) {
      document.body.classList.add('dark');
      document.body.classList.add('e-dark-mode');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.remove('e-dark-mode');
    }
  };
    return (
      <div>
          { /* checkbox - Used to represent checkbox. */ }
          <CheckBoxComponent label="Enable Darkmode" checked={isChecked} change={handleCheckboxChange}/><br/>
          { /* Primary Button - Used to represent a primary action. */ }
          <ButtonComponent cssClass='e-primary'>Button</ButtonComponent>

          { /* Success Button - Used to represent a positive action. */ }
          <ButtonComponent cssClass='e-success'>Button</ButtonComponent>

          { /* Info Button - Used to represent an informative action. */ }
          <ButtonComponent cssClass='e-info'>Button</ButtonComponent>

          { /* Warning Button - Used to represent an action with caution.*/ }
          <ButtonComponent cssClass='e-warning'>Button</ButtonComponent>

          { /* Danger Button - Used to represent a negative action.*/ }
          <ButtonComponent cssClass='e-danger'>Button</ButtonComponent>

      </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));