import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
    let dialogObj: DialogComponent;
    let buttonElement: HTMLElement;
    let buttonRef: React.Ref<HTMLButtonElement> = (element) => {
        buttonElement = element;
    };
    const buttons: any = [{
      buttonModel: {
          content: 'Ok',
          isPrimary: true,
      },
      'click': () => {
          dialogObj.hide();
      }
    }, {
      buttonModel: {
          content: 'Cancel'
      },
      'click': () => {
          dialogObj.hide();
      }
    }];

    function onOpen (args: any): void {
        args.preventFocus = true;
    }

    function onOpenDialog() {
        dialogObj.show();
        buttonElement.style.display = 'none';
    };

    function onClose(){
        buttonElement.style.display = 'block';
    }

    return (
      <div className="App" id='container'>
        <button className="e-control e-btn" style={{display: "none"}} ref={buttonRef} onClick={onOpenDialog.bind(this)}>Open dialog</button> 
          <DialogComponent id="dialog" close={onClose} width='300px' isModal={true} target='#container' header='Sign In' open={onOpen} buttons={buttons} ref={dialog => dialogObj = dialog}>
            <div className='form-group'><label htmlFor='email'>Email:</label>
                <input type='email' className='form-control' id='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='comment'>Password:</label>
              <input type='password' className='form-control' id='password' />
            </div>
           </DialogComponent>
      </div>
    );
}
export default App;



