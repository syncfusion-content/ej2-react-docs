


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
    let dialogInstance: DialogComponent;
    const buttons: any = [{
      buttonModel: {
          content: 'Ok',
          isPrimary: true,
      },
      'click': () => {
          dialogInstance.hide();
      }
    }, {
      buttonModel: {
          content: 'Cancel'
      },
      'click': () => {
          dialogInstance.hide();
      }
    }];
  
    function dialogContent(): JSX.Element {
      return (<><div className='form-group'><label htmlFor='email'>Email:</label>
          <input type='email' className='form-control' id='email' />
      </div><div className='form-group'>
              <label htmlFor='comment'>Password:</label>
              <input type='password' className='form-control' id='password' />
          </div></>
      )
    }

    function onOpen (args: any): void {
        args.preventFocus = true;
    }

    return (
      <div className="App" id='container'>  
          <DialogComponent id="dlg-focus" width='300px' isModal={true} target='#container' header='Sign In' open={onOpen} buttons={buttons} ref={dialog => dialogInstance = dialog!}>
           <div>{dialogContent()}</div>
           </DialogComponent>
      </div>
    );
}
export default App;



