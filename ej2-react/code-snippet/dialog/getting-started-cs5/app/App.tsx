


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import { useState } from 'react';

function App() {
  const [visibility, setDialogVisibility] = useState(true);

  function dialogClose() {
    setDialogVisibility(false);
  }

  function handleClick() {
    setDialogVisibility(true);
  }

  return (
    <div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick} >Open</button>
        <DialogComponent width='250px' content='This is a Dialog with content' target='#dialog-target' visible = {visibility} close = {dialogClose}/>
    </div>
   );
}

export default App;



