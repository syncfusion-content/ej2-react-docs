import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
class App extends React.Component {
    toastInstance;
    toasts = [
        { title: 'Warning !', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning' },
        { title: 'Success !', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success' },
        { title: 'Error !', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger' },
        { title: 'Information !', content: 'Please read the comments carefully.', cssClass: 'e-toast-info' }
    ];
    timeOutDelay = 600;
    toastFlag = 0;
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
    render() {
        return (<div>
        <ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast} position={this.position} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
