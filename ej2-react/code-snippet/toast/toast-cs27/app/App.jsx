import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
class App extends React.Component {
    toastInstance;
    toasts = [
        { title: 'Warning !', content: 'There was a problem with your network connection.', isOpen: false },
        { title: 'Success !', content: 'Your message has been sent successfully.', isOpen: false },
        { title: 'Error !', content: 'A problem has been occurred while submitting your data.', isOpen: false }
    ];
    toastFlag = 0;
    timeOutDelay = 600;
    position = { X: 'Center' };
    toastCreated() {
        this.toastInstance.show(this.toasts[this.toastFlag]);
        ++this.toastFlag;
    }
    onClose(e) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].title === e.options.title) {
                this.toasts[i].isOpen = false;
            }
        }
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
    onBeforeOpen(e) {
        if (this.preventDuplicate(e)) {
            e.cancel = true;
        }
    }
    preventDuplicate(e) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].title === e.options.title && !this.toasts[i].isOpen) {
                this.toasts[i].isOpen = true;
                return false;
            }
        }
        return true;
    }
    render() {
        return (<div>
        <ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast} position={this.position} beforeOpen={this.onBeforeOpen = this.onBeforeOpen.bind(this)} created={this.toastCreated = this.toastCreated.bind(this)} close={this.onClose = this.onClose.bind(this)}/>
      </div>);
    }
}
;
export default App;
