


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
    let dialogInstance: DialogComponent;
    function handleClick (){
        dialogInstance.cssClass = 'e-fixed';
    }
  
    return (
      <div className="App" id='dialog-target'>
        <DialogComponent header='Dialog' width='250px' ref={dialog => dialogInstance = dialog!}
        target='#dialog-target' closeOnEscape={false}>
        <button className="e-control e-btn" id="targetButton" role="button" onClick={handleClick}>Prevent Dialog Scroll</button>
        </DialogComponent>
      </div>
    );
}
export default App;



