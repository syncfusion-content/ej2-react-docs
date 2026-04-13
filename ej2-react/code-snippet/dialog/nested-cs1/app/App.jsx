import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    dialogInstance;
    innerDialogInstance;
    handleClick() {
        this.dialogInstance.show();
    }
    nestedbuttonClick = () => {
        this.innerDialogInstance.show();
    };
    render() {
        const effect = { effect: 'None' };
        return (<div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
      <DialogComponent header='Outer Dialog' cssClass="outerDialog" showCloseIcon={true} width='400px' height='300px' ref={dialog => this.dialogInstance = dialog} target='#dialog-target' closeOnEscape={false} animationSettings={effect}>
          <button className="e-control e-btn" id="innerButton" onClick={this.nestedbuttonClick} role="button">Open InnerDialog</button>
      </DialogComponent>
  
      <DialogComponent id='innerDialog' header='Inner Dialog' showCloseIcon={true} width='250px' height='150px' ref={dialog => this.innerDialogInstance = dialog} animationSettings={effect} closeOnEscape={false} target='.outerDialog'> This is a Nested Dialog </DialogComponent>
    </div>);
    }
}
export default App;
