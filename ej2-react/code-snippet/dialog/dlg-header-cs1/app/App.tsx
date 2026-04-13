

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public dialogInstance: DialogComponent;

  public buttons: any = [{
      buttonModel: {
          content: 'OK',
          cssClass: 'e-flat',
          isPrimary: true,
      },
      'click': () => {
          this.dialogInstance.hide();
      }
  },
  {
      buttonModel: {
          content: 'Cancel',
          cssClass: 'e-flat'
      },
      'click': () => {
          this.dialogInstance.hide();
      }
  }];
  
  public handleClick() {
      this.dialogInstance.show();
  }
  
  public render() {
    return (
    <div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
        <DialogComponent width='250px' target='#dialog-target' buttons={this.buttons} ref={dialog => this.dialogInstance = dialog!}>
        This is a dialog without header </DialogComponent>
    </div>);
  }
}
export default App;



