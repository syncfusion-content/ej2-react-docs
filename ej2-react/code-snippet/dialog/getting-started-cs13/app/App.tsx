


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {hideDialog: boolean;}> {  
  public buttons: any = [{
    buttonModel: {
        content: 'OK',
        cssClass: 'e-flat',
        isPrimary: true,
    },
    'click': () => {
        this.setState({ hideDialog: false })
    }
},
{
    buttonModel: {
        content: 'Cancel',
        cssClass: 'e-flat'
    },
    'click': () => {
        this.setState({ hideDialog: false })
    }
}];

  constructor(props: {}) {
      super(props);
      this.state = {
          hideDialog : true
      };
  }
  
  public handleClick() {
      this.setState({ hideDialog: true })
  }
  
  public dialogClose = () => {
      this.setState({ hideDialog: false })
  }
  
  public render() {
    return (
    <div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
        <DialogComponent width='250px' target='#dialog-target' close = {this.dialogClose} header='Dialog' visible = {this.state.hideDialog}showCloseIcon={true}  buttons={this.buttons}>
        This is a Dialog with button and primary button </DialogComponent>
    </div>);
  }
}
export default App;



