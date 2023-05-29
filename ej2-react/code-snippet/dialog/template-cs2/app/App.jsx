import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let dialogInstance;
    let buttonInstance;
    let dialogTextInstance;
    function handleClick() {
        dialogInstance.show();
    }
    function header() {
        return (<div>
          <img className="img2" src="https://ej2.syncfusion.com/products/typescript/dialog/template/images/1.png"/>
          <div title="Nancy" className="e-icon-settings dlg-template">Nancy</div>
      </div>);
    }
    function footerTemplate() {
        return (<div>
              <input id="inVal" className="e-input" type="text" placeholder="Enter your message here!"/>

              <button id="sendButton" className="e-control e-btn e-primary" data-ripple="true">Send</button>
          </div>);
    }
    function dialogClose() {
        buttonInstance.style.display = 'inline-block';
    }
    function dialogOpen() {
        buttonInstance.style.display = 'none';
    }
    function keyDown(e) {
        if (e.keyCode === 13) {
            updateTextValue();
        }
    }
    function updateTextValue() {
        const enteredVal = document.getElementById('inVal');
        const dialogTextElement = document.getElementsByClassName('dialogText')[0];
        if (enteredVal.value !== '') {
            dialogTextElement.innerHTML = enteredVal.value;
        }
        enteredVal.value = '';
    }
    function componentCreated() {
        setTimeout(() => {
            document.getElementById('sendButton').onkeydown = (e) => {
                if (e.keyCode === 13) {
                    updateTextValue();
                }
            };
            document.getElementById('inVal').onkeydown = (e) => {
                if (e.keyCode === 13) {
                    updateTextValue();
                }
            };
            document.getElementById('sendButton').onclick = () => {
                updateTextValue();
            };
        });
    }
    return (<div className="App" id='dialog-target'>
            <button className='e-control e-btn' id='targetButton1' ref={buttonElement => buttonInstance = buttonElement} role='button' onClick={handleClick}>Open</button>
            <DialogComponent created = {componentCreated} width='350px' target='#dialog-target' header={header} footerTemplate={footerTemplate} showCloseIcon={true} open={dialogOpen} close={dialogClose} ref={dialog => dialogInstance = dialog}>
                <div className="dialogContent">
                        <span className="dialogText">Greetings Nancy! When will you share me the source files of the project?</span>
                </div>
            </DialogComponent>
        </div>);
}
export default App;
