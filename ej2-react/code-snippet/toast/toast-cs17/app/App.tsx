

import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;

  public toastCreated(): void {
    this.toastInstance.show();
  }

  public render() {
    return (
      <div>
        <div id='#toast_target' />
        <ToastComponent id='toast_target' ref={toast => this.toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
};
export default App;


