import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
class App extends React.Component {
    toastInstance;
    toastCreated() {
        this.toastInstance.show();
    }
    render() {
        return (<ToastComponent ref={toast => this.toastInstance = toast} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" created={this.toastCreated = this.toastCreated.bind(this)}/>);
    }
}
;
export default App;
