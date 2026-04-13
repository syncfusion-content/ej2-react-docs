import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
class App extends React.Component {
    toastInstance;
    toasts = [
        { title: 'Warning !', content: 'There was a problem with your network connection.' },
        { title: 'Success !', content: 'Your message has been sent successfully.' },
        { title: 'Error !', content: 'A problem has been occurred while submitting your data.' },
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
    onBeforeOpen(e) {
        if (this.maxCount === this.toastInstance.element.childElementCount) {
            e.cancel = true;
        }
        else {
            e.cancel = false;
        }
    }
    render() {
        return (<div>
        <ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast} position={this.position} beforeOpen={this.onBeforeOpen = this.onBeforeOpen.bind(this)} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
