

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public position = { X: 'Center' };

  public toastCreated(): void {
    this.toastInstance.show();
  }

  public toastShow() {
    this.toastInstance.show();
  }

  public render() {
    return (
      <div>
        <ButtonComponent cssClass="e-primary" onClick={this.toastShow = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast!} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" position={this.position} created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
}
export default App;


