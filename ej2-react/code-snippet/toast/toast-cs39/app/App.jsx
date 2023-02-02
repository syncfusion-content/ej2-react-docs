import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
class App extends React.Component {
    toastInstance;
    position = { X: 'Right', Y: 'Bottom' };
    template = document.getElementById("template_toast_ele").innerHTML;
    toastCreated() {
        this.toastInstance.show();
    }
    toastShow() {
        this.toastInstance.show();
    }
    render() {
        return (<div>
        <ButtonComponent cssClass="e-primary" id='template_toast' onClick={this.toastShow = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent id='template_toast' ref={toast => this.toastInstance = toast} template={this.template} position={this.position} extendedTimeout={0} timeOut={120000} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
