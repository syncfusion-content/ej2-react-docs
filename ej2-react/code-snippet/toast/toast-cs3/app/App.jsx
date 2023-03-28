import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
class App extends React.Component {
    toastInstance;
    position = { X: "Right", Y: "Bottom" };
    buttons = [
        { model: { content: "Ignore" } },
        { model: { content: "reply" } }
    ];
    toastShow() {
        this.toastInstance.show();
    }
    toastCreated() {
        this.toastInstance.show();
    }
    contentTemplate() {
        return <p><img src='./laura.png'/></p>;
    }
    render() {
        return (<div>
        <ButtonComponent cssClass="e-primary" onClick={this.toastShow = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast} title="Anjolie Stokes" content={this.contentTemplate} position={this.position} width='230' height='250' buttons={this.buttons} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
