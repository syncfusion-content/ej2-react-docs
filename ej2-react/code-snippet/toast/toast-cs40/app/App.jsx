import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
function App() {
    let toastInstance;
    let position;
    let target;
    let width;
    let position = { X: 'Right', Y: 'Bottom' };
    let template = document.getElementById("template_toast_ele").innerHTML;
    function toastCreated() {
        toastInstance.show();
    }
    function toastShow() {
        toastInstance.show();
    }
    return (<div>
      <ButtonComponent cssClass="e-primary" id='template_toast' onClick={toastShow = toastShow.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent id='template_toast' ref={toast => toastInstance = toast} template={template} position={position} extendedTimeout={0} timeOut={120000} created={toastCreated = toastCreated.bind(this)}/>
    </div>);
}
export default App;
