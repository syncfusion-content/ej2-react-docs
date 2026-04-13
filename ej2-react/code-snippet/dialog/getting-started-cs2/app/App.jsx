import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let dialogInstance;
    let buttons = [{
            buttonModel: {
                content: 'Submit',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            'click': () => {
                dialogInstance.hide();
            }
        }];
    function handleClick() {
        dialogInstance.show();
    }
    return (<div className="App" id='dialog-target'>
          <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
  
          <DialogComponent width='400px' target='#dialog-target' header='Feedback' showCloseIcon={true} buttons={buttons} ref={dialog => dialogInstance = dialog}>
          <form>
              <div className='form-group'>
                  <label htmlFor='email'> Email:</label>
                  <input type='email' className='form-control' id='email'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='comment'>Comments:</label>
                  <textarea className='form-control' id='comment'/>
              </div>
          </form>
          </DialogComponent>
      </div>);
}
export default App;
