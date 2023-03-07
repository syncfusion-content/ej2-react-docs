
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public dialogObj: DialogComponent;
  private buttonRef;
  private buttonElement: HTMLElement | null;
  constructor(props: {}) {
    super(props);
    this.buttonElement = null;
    this.buttonRef = element => {
        this.buttonElement = element;
    };
  }
  public buttons: any = [{
    buttonModel: {
        content: 'Ok',
        isPrimary: true,
    },
    'click': () => {
        this.dialogObj.hide();
    }
  }, {
    buttonModel: {
        content: 'Cancel'
    },
    'click': () => {
        this.dialogObj.hide();
    }
  }];

  
  public onOpen = (args: any): void =>{
      args.preventFocus = true;
  }
  public onOpenDialog = function(): void {
    // Call the show method to open the Dialog
     this.dialogObj.show();
     this.buttonElement.style.display='none';
  };

  public onClose= function():void{
    this.buttonElement.style.display='block';
  }
  
  public render() {
    return (
    <div className="App" id='container'>
        <button className="e-control e-btn" style={{display: "none"}} ref={this.buttonRef} onClick={this.onOpenDialog.bind(this)}>Open dialog</button>
        <DialogComponent id="dialog" width='300px' isModal={true} target='#container' header='Sign In' close={this.onClose} open={this.onOpen} buttons={this.buttons} ref={dialog => this.dialogObj = dialog}>
          <div className='form-group'><label htmlFor='email'>Email:</label>
            <input type='email' className='form-control' id='email' />
          </div>
          <div className='form-group'>
                <label htmlFor='comment'>Password:</label>
                <input type='password' className='form-control' id='password' />
          </div>
         </DialogComponent>
    </div>);
  }
}
export default App;



