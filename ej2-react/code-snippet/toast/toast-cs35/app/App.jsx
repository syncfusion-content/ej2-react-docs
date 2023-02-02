import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
class App extends React.Component {
    toastInstance;
    toastLeftInstance;
    timeOutDelay = 600;
    position = { X: 'Right', Y: 'Bottom' };
    leftPosition = { X: 'Right', };
    toastCreated() {
        this.toastShow(this.toastInstance);
        this.toastShow(this.toastLeftInstance);
    }
    toastShow(toastObj) {
        setTimeout(() => {
            toastObj.show();
        }, this.timeOutDelay);
    }
    btnClick() {
        this.toastShow(this.toastInstance);
    }
    btnToastClick() {
        this.toastShow(this.toastLeftInstance);
    }
    onClick(e) {
        e.clickToClose = true;
    }
    render() {
        return (<div id='multiToast'>
        <div><ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Bottom Position Toast</ButtonComponent></div>
        <div><ButtonComponent cssClass="e-primary" onClick={this.btnToastClick = this.btnToastClick.bind(this)}> Show Top Position Toast</ButtonComponent></div>
        <ToastComponent click={this.onClick = this.onClick.bind(this)} ref={toast => this.toastInstance = toast} title='Warning !' content='There was a problem with your network connection.' position={this.position} created={this.toastCreated = this.toastCreated.bind(this)}/>
        <ToastComponent click={this.onClick = this.onClick.bind(this)} ref={toast => this.toastLeftInstance = toast} title='Warning !' content='There was a problem with your network connection.' position={this.leftPosition} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
