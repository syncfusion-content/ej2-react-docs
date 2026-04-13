


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useState } from 'react';
import * as React from 'react';

function App() {
  const [name, setName] = useState('');
  const [visibility, setDialogVisibility] = useState(true);
  function handleClick() {
    setDialogVisibility(true);
  }
  function dialogClose() {
    setDialogVisibility(false);
  }
  return (
    <div>
      <div className="control_wrapper" id="control_wrapper">
        <button
          className="e-control e-btn dlgbtn"
          onClick={handleClick}
          id="dialogBtn"
        >
          {' '}
          Open
        </button>
        <DialogComponent
          id="defaultdialog"
          width={"25%"}
          showCloseIcon={true}
          visible={visibility}
          close={dialogClose}
          header="Textbox"
        >
          <div>
            <div>
              <div> Enter your content </div>
            </div>
            <div>
              <div>
                <TextBoxComponent
                  placeholder="Enter Name"
                  value={name}
                  input={(e) => setName(e.value)}
                ></TextBoxComponent>
                <div>Entered content: {name}</div>
              </div>
            </div>
          </div>
        </DialogComponent>
      </div>
    </div>
  );
}
export default App;



