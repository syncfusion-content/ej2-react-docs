import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
class App extends React.Component {
    toastInstance;
    toastCreated() {
        this.toastInstance.show();
    }
    render() {
        return (<ToastComponent ref={toast => this.toastInstance = toast} title="Sample Toast Title" content="Sample Toast Content" created={this.toastCreated = this.toastCreated.bind(this)}/>);
    }
}
;
export default App;
