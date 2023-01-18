import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import { useState } from 'react';
function App() {
    const [visibility, setDialogVisibility] = useState(true);
    function onOverlayClick() {
        setDialogVisibility(false);
    }
    function dialogClose() {
        setDialogVisibility(false);
    }
    function handleClick() {
        setDialogVisibility(true);
    }
    return (<div className="App" id="dialog-target">
      <button className="e-control e-btn" id="targetButton1" role="button" onClick={handleClick}> Open</button>
      <DialogComponent width="250px" isModal={true} target="#dialog-target" visible={visibility} close={dialogClose} overlayClick={onOverlayClick}>This is a modal Dialog{' '}</DialogComponent>
    </div>);
}
export default App;
