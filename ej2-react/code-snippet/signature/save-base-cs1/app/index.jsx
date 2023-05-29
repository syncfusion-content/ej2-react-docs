import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { getComponent } from '@syncfusion/ej2-base';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let dialogInstance;
    const animationSettings = { effect: 'Zoom', duration: 400, delay: 0 };
    function getSign() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        dialogInstance.content = signature.getSignature();
        dialogInstance.show();
    }
    return (<div id='container'>
            <div id="signature-control">
                <SignatureComponent id='signature'/>
            </div>
            <ButtonComponent id="save" cssClass='e-primary' content='Save as Base64' onClick={getSign}/>
            <DialogComponent id="defaultdialog" showCloseIcon={true} animationSettings={animationSettings} ref={dialog => dialogInstance = dialog} height='auto' header='Base64 of the signature' visible={false} width='80%'/>
        </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
