

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public settings: any = { effect: 'Zoom', duration: 400, delay: 0 };

public dialogInstance: DialogComponent;

public buttons: any = [{
    buttonModel: {
        content: 'Ok',
        iconCss: 'e-icons e-ok-icon',
        isPrimary: true,
    },
    'click': () => {
        this.dialogInstance.hide();
    }
},
{
    buttonModel: {
        content: 'No',
        iconCss: 'e-icons e-close-icon',
    },
    'click': () => {
        this.dialogInstance.hide();
    }
}
];

public handleClick() {
    this.dialogInstance.show();
}

public render() {
  return (
  <div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
     <DialogComponent id='dialog' header='Delete Multiple Items' animationSettings={this.settings} showCloseIcon={true} closeOnEscape={true}
      width='300px' buttons={this.buttons} content='Are you sure you want to permanently delete all of these items?' ref={dialog => this.dialogInstance = dialog!}
      target='#dialog-target'/>
  </div>);
}
}
export default App;



