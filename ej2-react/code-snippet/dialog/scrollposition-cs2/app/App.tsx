


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public dialogInstance: DialogComponent;
  public handleClick = () => {
      this.dialogInstance.cssClass = 'e-fixed';
  }

  public render() {
    return (
    <div className="App" id='dialog-target'>
    <DialogComponent header='Dialog' width='250px' ref={dialog => this.dialogInstance = dialog!}
    target='#dialog-target' closeOnEscape={false}>
      <button className="e-control e-btn" id="targetButton" role="button" onClick={this.handleClick = this.handleClick}>Prevent Dialog Scroll</button>
    </DialogComponent>
    </div>
    );
  }
}
export default App;



