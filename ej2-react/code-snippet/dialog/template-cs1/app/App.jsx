import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    dialogInstance;
    buttonInstance;
    dialogTextInstance;
    handleClick = () => {
        this.dialogInstance.show();
    };
    header() {
        return (<div>
          <img className="img2" src="https://ej2.syncfusion.com/products/typescript/dialog/template/images/1.png"/>
          <div title="Nancy" className="e-icon-settings dlg-template">Nancy</div>
      </div>);
    }
    footerTemplate() {
        return (<div>
              <input id="inVal" className="e-input" type="text" placeholder="Enter your message here!"/>

              <button id="sendButton" className="e-control e-btn e-primary" data-ripple="true">Send</button>
          </div>);
    }
    dialogClose = () => {
        this.buttonInstance.style.display = 'inline-block';
    };
    dialogOpen = () => {
        this.buttonInstance.style.display = 'none';
    };
    keyDown = (e) => {
        if (e.keyCode === 13) {
            this.updateTextValue();
        }
    };
    updateTextValue = () => {
        const enteredVal = document.getElementById('inVal');
        const dialogTextElement = document.getElementsByClassName('dialogText')[0];
        if (enteredVal.value !== '') {
            dialogTextElement.innerHTML = enteredVal.value;
        }
        enteredVal.value = '';
    };
    componentDidMount() {
        setTimeout(() => {
            document.getElementById('sendButton').onkeydown = (e) => {
                if (e.keyCode === 13) {
                    this.updateTextValue();
                }
            };
            document.getElementById('inVal').onkeydown = (e) => {
                if (e.keyCode === 13) {
                    this.updateTextValue();
                }
            };
            document.getElementById('sendButton').onclick = () => {
                this.updateTextValue();
            };
        });
    }
    render() {
        return (<div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' ref={buttonElement => this.buttonInstance = buttonElement} role='button' onClick={this.handleClick = this.handleClick}>Open</button>
        <DialogComponent width='350px' target='#dialog-target' header={this.header} footerTemplate={this.footerTemplate} showCloseIcon={true} open={this.dialogOpen} close={this.dialogClose} ref={dialog => this.dialogInstance = dialog}>
              <div className="dialogContent">
                      <span className="dialogText">Greetings Nancy! When will you share me the source files of the project?</span>
              </div>
        </DialogComponent>
    </div>);
    }
}
export default App;
