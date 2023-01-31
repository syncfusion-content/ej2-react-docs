

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App(){
    let dialogInstance: DialogComponent;
    const buttons: any = [{
        buttonModel: {
            content: 'OK',
            cssClass: 'e-flat',
            isPrimary: true,
        },
        'click': () => {
            dialogInstance.hide();
        }
    },
    {
        buttonModel: {
            content: 'Cancel',
            cssClass: 'e-flat'
        },
        'click': () => {
            dialogInstance.hide();
        }
    }];

function handleClick() {
    dialogInstance.show();
}

return (
    <div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
        <DialogComponent width='250px' target='#dialog-target' buttons={buttons} ref={dialog => dialogInstance = dialog!}>
        This is a dialog without header </DialogComponent>
    </div>
);
}
export default App;



