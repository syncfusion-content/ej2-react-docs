


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
  let dialogInstance: DialogComponent;
  let buttonInstance: HTMLElement;
  let dialogTextInstance: HTMLSpanElement;

  function handleClick () {
      dialogInstance.show();
  }

  function header(): JSX.Element {
      return (
      <div>
          <img className="img2" src="https://ej2.syncfusion.com/products/typescript/dialog/template/images/1.png"/>
          <div title="Nancy" className="e-icon-settings dlg-template">Nancy</div>
      </div>
      )
  }

  function footerTemplate(): JSX.Element {
      return (
          <div>
              <input id="inVal" className="e-input" type="text"  placeholder="Enter your message here!"/>

              <button id="sendButton" className="e-control e-btn e-primary" data-ripple="true">Send</button>
          </div>
      )
  }

  function dialogClose () {
      buttonInstance.style.display='inline-block';
  }

  function dialogOpen () {
      buttonInstance.style.display='none';
  }

  function keyDown (e: any) {
        if (e.keyCode === 13) { updateTextValue(); }
  }

  function updateTextValue() {
      const enteredVal: HTMLInputElement = document.getElementById('inVal') as HTMLInputElement;
      const dialogTextElement: HTMLElement = document.getElementsByClassName('dialogText')[0] as HTMLElement;
      if ( enteredVal.value !== '') {
          dialogTextElement.innerHTML = enteredVal.value;
      }
      enteredVal.value = '';

  }

  function componentDidMount() {
      setTimeout(() => {
          (document as any).getElementById('sendButton').onkeydown = (e: any) => {
              if (e.keyCode === 13) {updateTextValue(); }
          };

          (document as any).getElementById('inVal').onkeydown = (e: any) => {
              if (e.keyCode === 13) {updateTextValue(); }
          };

          (document as any).getElementById('sendButton').onclick = (): void => {
              updateTextValue();
          };
      });
  }

    return (
        <div className="App" id='dialog-target'>
            <button className='e-control e-btn' id='targetButton1' ref={buttonElement => buttonInstance = buttonElement!} role='button' onClick={handleClick}>Open</button>
            <DialogComponent width='350px' target='#dialog-target' header={header} footerTemplate={footerTemplate } showCloseIcon={true}
            open= {dialogOpen} close= {dialogClose}
            ref={dialog => dialogInstance = dialog!}>
                <div className="dialogContent">
                        <span className="dialogText">Greetings Nancy! When will you share me the source files of the project?</span>
                </div>
            </DialogComponent>
        </div>
    );
}
export default App;



