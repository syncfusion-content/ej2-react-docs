


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";

function App() {
  function buttonClick() {
      DialogUtility.confirm({
        title: 'Join Chat Group',
        content:
          '<p>Enter your name:</p><input class="e-input" placeholder="Type here.." />',
        width: '300px',
      });
  }

  return (
    <div className="App" id='dialog-target'>
          <ButtonComponent id="promptBtn" isPrimary onClick={buttonClick.bind(this)}>Prompt</ButtonComponent>
    </div>
  );
}
export default App;



