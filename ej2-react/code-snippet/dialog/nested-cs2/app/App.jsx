import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let dialogInstance;
    let innerDialogInstance;
    function handleClick() {
        dialogInstance.show();
    }
    function nestedbuttonClick() {
        innerDialogInstance.show();
    }
    const effect = { effect: 'None' };
    return (<div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
        <DialogComponent header='Outer Dialog' cssClass="outerDialog" showCloseIcon={true} width='400px' height='300px' ref={dialog => dialogInstance = dialog} target='#dialog-target' closeOnEscape={false} animationSettings={effect}>
            <button className="e-control e-btn" id="innerButton" onClick={nestedbuttonClick} role="button">Open InnerDialog</button>
        </DialogComponent>

        <DialogComponent id='innerDialog' header='Inner Dialog' showCloseIcon={true} width='250px' height='150px' ref={dialog => innerDialogInstance = dialog} animationSettings={effect} closeOnEscape={false} target='.outerDialog'> This is a Nested Dialog </DialogComponent></div>);
}
export default App;
