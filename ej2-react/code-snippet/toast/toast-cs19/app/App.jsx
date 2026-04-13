import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
class App extends React.Component {
    toastInstance;
    toasts = [
        { template: '2 Mail has received' },
        { template: 'User Guest Logged in' },
        { template: 'Logging in as Guest' },
        { template: 'Ticket has reserved ' },
        { template: '#templateToast' }
    ];
    toastFlag = 0;
    maxCount = 3;
    timeOutDelay = 600;
    position = { X: 'Right', Y: 'Bottom' };
    toastCreated() {
        this.toastInstance.show(this.toasts[this.toastFlag]);
        ++this.toastFlag;
    }
    toastShow() {
        setTimeout(() => {
            this.toastInstance.show(this.toasts[this.toastFlag]);
            ++this.toastFlag;
            if (this.toastFlag === (this.toasts.length)) {
                this.toastFlag = 0;
            }
        }, this.timeOutDelay);
    }
    btnClick() {
        this.toastShow();
    }
    onClick(e) {
        e.clickToClose = true;
    }
    render() {
        return (<div>
        <div><ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Bottom Position Toast</ButtonComponent></div>
        <ToastComponent click={this.onClick = this.onClick.bind(this)} ref={toast => this.toastInstance = toast} position={this.position} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
