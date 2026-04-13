import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';
class App extends React.Component {
    toastInstance;
    position = { X: 'Center' };
    toastCreated() {
        this.toastInstance.show();
    }
    toastShow() {
        this.toastInstance.show();
    }
    render() {
        return (<div>
        <ButtonComponent cssClass="e-primary" onClick={this.toastShow = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" position={this.position} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
export default App;
