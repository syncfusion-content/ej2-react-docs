


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App(){  
  const [status, setStatus] = React.useState({ hideDialog: true });
  let buttons: any = [{
    buttonModel: {
        content: 'OK',
        cssClass: 'e-flat',
        isPrimary: true,
    },
    'click': () => {
        setStatus({ hideDialog: false })
    }
    },
    {
        buttonModel: {
            content: 'Cancel',
            cssClass: 'e-flat'
        },
        'click': () => {
            setStatus({ hideDialog: false })
        }
    }];

  function handleClick() {
    setStatus({ hideDialog: true })
  }

  function dialogClose() {
    setStatus({ hideDialog: false })
  }

  return (
    <div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
        <DialogComponent width='250px' target='#dialog-target' close = {dialogClose} header='Dialog' visible = {status.hideDialog} showCloseIcon={true}  buttons={buttons}>
        This is a Dialog with button and primary button </DialogComponent>
    </div>
  );
}
export default App;



