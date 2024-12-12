import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState } from 'react';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
function App() {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);

    // Add or remove the classes on the body element based on the checkbox state
    const body = document.body;

    if (event.target.checked) {
      body.classList.add('dark');
      body.classList.add('e-dark-mode');
    } else {
      body.classList.remove('dark');
      body.classList.remove('e-dark-mode');
    }
  };
    return (<div>
          {/* Primary Button - Used to represent a primary action. */}
          <CheckBoxComponent label="Enable Darkmode" checked={isChecked} onChange={handleCheckboxChange}/><br/>
          <ButtonComponent cssClass='e-primary'>button</ButtonComponent>

          {/* Success Button - Used to represent a positive action. */}
          <ButtonComponent cssClass='e-success'>button</ButtonComponent>

          {/* Info Button - Used to represent an informative action. */}
          <ButtonComponent cssClass='e-info'>button</ButtonComponent>

          {/* Warning Button - Used to represent an action with caution.*/}
          <ButtonComponent cssClass='e-warning'>button</ButtonComponent>

          {/* Danger Button - Used to represent a negative action.*/}
          <ButtonComponent cssClass='e-danger'>button</ButtonComponent>

      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
