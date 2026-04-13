import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';
class App extends React.Component {
    toastInstance;
    position = { X: 'Center' };
    toastCreated() {
        this.toastShow();
    }
    toastShow() {
        setTimeout(() => {
            this.toastInstance.show();
        }, 600);
    }
    render() {
        return (<div>
        <ButtonComponent cssClass="e-primary" onClick={this.toastShow = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast} title="File Downloading" content="<div class='progress'><span style='width: 80%'></span></div>" position={this.position} showCloseButton='true' target="#toast_target" newestOnTop='true' showProgressBar='true' progressDirection='Ltr' created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
export default App;
