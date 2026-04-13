import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
class App extends React.Component {
    toastInstance;
    timeOutDelay = 600;
    position = { X: 'Right', Y: 'Bottom' };
    toastCreated() {
        this.toastShow(this.toastInstance);
    }
    toastShow(toastObj) {
        setTimeout(() => {
            toastObj.show();
        }, this.timeOutDelay);
    }
    btnClick() {
        this.toastShow(this.toastInstance);
    }
    onClick(e) {
        e.clickToClose = true;
    }
    render() {
        return (<div>
        <div><ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Bottom Position Toast</ButtonComponent></div>
        <ToastComponent click={this.onClick = this.onClick.bind(this)} ref={toast => this.toastInstance = toast} title='Warning !' content='There was a problem with your network connection.' position={this.position} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
