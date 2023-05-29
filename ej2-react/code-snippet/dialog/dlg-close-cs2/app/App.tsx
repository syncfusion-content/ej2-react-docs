

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
    const settings: any = { effect: 'Zoom', duration: 400, delay: 0 };
    let dialogInstance: DialogComponent;
    const buttons: any = [{
        buttonModel: {
            content: 'Close',
            cssClass: 'e-flat',
            isPrimary: true,
        },
        'click': () => {
            dialogInstance.hide();
        }
    }];

    function handleClick() {
        dialogInstance.show();
    }

    function componentDidMount() {
        document.onclick = (args: any) : void => {
            if(args.target.id === 'dialog-target') {
                dialogInstance.hide();
            }
        }
    }

    return (
      <div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
      <DialogComponent header='Delete Multiple Items' showCloseIcon={true} visible={true} animationSettings={settings}
        width='300px' buttons={buttons} closeOnEscape={true}
        content='Are you sure you want to permanently delete all of these items?' ref={dialog => dialogInstance = dialog!}
        target='#dialog-target'/>
    </div>);
}
export default App;



