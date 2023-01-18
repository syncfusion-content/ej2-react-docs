


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public dialogInstance: DialogComponent;
  public buttons: any = [{
    buttonModel: {
        content: 'Ok',
        isPrimary: true,
    },
    'click': () => {
        this.dialogInstance.hide();
    }
  }, {
    buttonModel: {
        content: 'Cancel'
    },
    'click': () => {
        this.dialogInstance.hide();
    }
  }];

  public dialogContent(): JSX.Element {
    return (
        <div className='form-group'><label htmlFor='email'>Email:</label>
            <input type='email' className='form-control' id='email' />
        </div>
        <div className='form-group'>
            <label htmlFor='comment'>Password:</label>
            <input type='password' className='form-control' id='password' />
        </div>
    )
  }
  
  public onOpen = (args: any): void =>{
      args.preventFocus = true;
  }
  
  public render() {
    return (
    <div className="App" id='container'>  
        <DialogComponent id="dlg-focus" width='300px' isModal={true} target='#container' header='Sign In' open={this.onOpen} buttons={this.buttons} ref={dialog => this.dialogInstance = dialog!}>
         <div>{this.dialogContent()}</div>
         </DialogComponent>
    </div>);
  }
}
export default App;



