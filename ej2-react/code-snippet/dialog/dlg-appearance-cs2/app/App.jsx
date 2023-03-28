import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let settings = { effect: 'Zoom', duration: 400, delay: 0 };
    let dialogInstance;
    const buttons = [{
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
    return (<div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
        <DialogComponent id="dlg-button" header='File and Folder Rename' showCloseIcon={true} width='400px' buttons={buttons} animationSettings={settings} closeOnEscape={true} ref={dialog => dialogInstance = dialog} target='#dialog-target'>
          <div>
            <div className='dialog-content'>
            <div className='msg-wrapper  col-lg-12'>
                <span className='e-icons close-icon col-lg-2'/>
                <span className='error-msg col-lg-10'>Can not rename 'pictures' because a file or folder with that name already exists </span>
                </div>
                <div className='error-detail col-lg-8'>
                <span>Specify a different name</span>
                </div>
            </div>
            </div>
        </DialogComponent>
    </div>);
}
export default App;
