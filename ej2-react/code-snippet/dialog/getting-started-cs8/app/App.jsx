import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import { useState } from 'react';
function App() {
    const [visibility, setDialogVisibility] = useState(true);
    const buttons = [
        {
            buttonModel: {
                content: 'OK',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            click: () => {
                setDialogVisibility(false);
            },
        },
        {
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat',
            },
            click: () => {
                setDialogVisibility(false);
            },
        },
    ];
    function handleClick() {
        setDialogVisibility(true);
    }
    function dialogClose() {
        setDialogVisibility(false);
    }
    return (<div className="App" id="dialog-target">
      <button className="e-control e-btn" id="targetButton1" role="button" onClick={handleClick}>Open</button>
      <DialogComponent width="250px" target="#dialog-target" visible={visibility} close={dialogClose} header="Dialog" allowDragging={true} showCloseIcon={true} buttons={buttons}>This is a Dialog with drag enabled{' '}</DialogComponent>
    </div>);
}
export default App;
