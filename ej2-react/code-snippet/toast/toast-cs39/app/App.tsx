

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

class App extends React.Component<{}, {position: any, target: any, width: any}> {
  public toastInstance: ToastComponent;
  public position = { X: 'Right', Y: 'Bottom' };
  public template = (document.getElementById("template_toast_ele") as HTMLElement).innerHTML;

  public toastCreated(): void {
    this.toastInstance.show();
  }

  public toastShow() {
    this.toastInstance.show();
  }

  public render() {
    return (
      <div>
        <ButtonComponent cssClass="e-primary" id='template_toast' onClick={this.toastShow = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent id='template_toast' ref={toast => this.toastInstance = toast!} template={this.template} position={this.position} extendedTimeout={0} timeOut={120000} created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
};
export default App;


