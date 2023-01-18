import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let settings = { effect: 'Zoom', duration: 400, delay: 0 };
    let dialogInstance;
    const buttons = [{
            buttonModel: {
                content: 'Ok',
                iconCss: 'e-icons e-ok-icon',
                isPrimary: true,
            },
            'click': () => {
                dialogInstance.hide();
            }
        },
        {
            buttonModel: {
                content: 'No',
                iconCss: 'e-icons e-close-icon',
            },
            'click': () => {
                dialogInstance.hide();
            }
        }
    ];
    function handleClick() {
        dialogInstance.show();
    }
    return (<div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
       <DialogComponent id='dialog' header='Delete Multiple Items' animationSettings={settings} showCloseIcon={true} closeOnEscape={true} width='300px' buttons={buttons} content='Are you sure you want to permanently delete all of these items?' ref={dialog => dialogInstance = dialog} target='#dialog-target'/>
    </div>);
}
export default App;
