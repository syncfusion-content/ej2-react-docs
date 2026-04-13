

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
  let dialogInstance: DialogComponent;
  const [status, setStatus] = React.useState({ hideDialog: false });
  function handleClick() {
    setStatus({ hideDialog: true })
  }
  function dialogClose () {
    setStatus({ hideDialog: false })
  }
  return (
    <div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)} >Open</button>
        <DialogComponent width='250px' content='This is a Dialog with content' target='#dialog-target' visible = {status.hideDialog} close = {dialogClose}/>
    </div>
  );
}
export default App;



