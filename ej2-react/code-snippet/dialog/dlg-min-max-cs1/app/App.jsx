import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    settings = { effect: 'Zoom', duration: 400, delay: 0 };
    dialogInstance;
    isFullScreen;
    dialogOldPositions;
    maxBtn;
    minBtn;
    header() {
        return (<div>
          <span class='title'>Dialog</span><span class='e-icons sf-icon-Maximize' id='max-btn' title='Maximize'></span><span class='e-icons sf-icon-Minimize' id='min-btn' title='Minimize'></span>
      </div>);
    }
    buttons = [{
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
        },
    ];
    handleClick() {
        this.dialogInstance.show();
    }
    onCreate() {
        this.maxBtn = document.getElementById('max-btn');
        this.maxBtn.onclick = (e) => {
            var maximizeIcon;
            if (this.dialogInstance.element.classList.contains('dialog-minimized')) {
                this.dialogInstance.element.querySelector('#min-btn').classList.add('sf-icon-Minimize');
                this.dialogInstance.element.querySelector('#min-btn').classList.remove('sf-icon-Restore');
                this.dialogInstance.element.querySelector('#min-btn').setAttribute('title', 'Minimize');
            }
            if (!this.dialogInstance.element.classList.contains('dialog-maximized') && !this.isFullScreen) {
                maximizeIcon = this.dialogInstance.element.querySelector(".e-dlg-header-content .sf-icon-Maximize");
            }
            else {
                maximizeIcon = this.dialogInstance.element.querySelector(".e-dlg-header-content .sf-icon-Restore");
            }
            if (!this.dialogInstance.element.classList.contains('dialog-maximized')) {
                this.dialogInstance.element.classList.add('dialog-maximized');
                this.dialogInstance.show(true);
                maximizeIcon.classList.add('sf-icon-Restore');
                maximizeIcon.setAttribute('title', 'Restore');
                maximizeIcon.classList.remove('sf-icon-Maximize');
                this.dialogInstance.element.querySelector('.e-dlg-content').classList.remove('hide-content');
                this.isFullScreen = true;
            }
            else {
                this.dialogInstance.element.classList.remove('dialog-maximized');
                this.dialogInstance.show(false);
                maximizeIcon.classList.remove('sf-icon-Restore');
                maximizeIcon.classList.add('sf-icon-Maximize');
                maximizeIcon.setAttribute('title', 'Maximize');
                this.dialogInstance.element.querySelector('.e-dlg-content').classList.remove('hide-content');
                this.dialogInstance.position = this.dialogOldPositions;
                this.dialogInstance.dataBind();
                this.isFullScreen = false;
            }
        };
        this.minBtn = document.getElementById('min-btn');
        this.minBtn.onclick = (e) => {
            var minimizeIcon = this.dialogInstance.element.querySelector(".e-dlg-header-content .sf-icon-Minimize");
            if (!this.dialogInstance.element.classList.contains('e-dlg-fullscreen')) {
                if (!this.dialogInstance.element.classList.contains('dialog-minimized')) {
                    this.dialogOldPositions = { X: this.dialogInstance.position.X, Y: this.dialogInstance.position.Y };
                    this.dialogInstance.element.classList.add('dialog-minimized');
                    this.dialogInstance.element.classList.remove('dialog-maximized');
                    this.dialogInstance.element.querySelector('.e-dlg-content').classList.add('hide-content');
                    this.dialogInstance.position = { X: 'center', Y: 'bottom' };
                    this.dialogInstance.dataBind();
                    minimizeIcon.classList.add('sf-icon-Restore');
                    minimizeIcon.setAttribute('title', 'Restore');
                }
                else {
                    this.dialogInstance.element.classList.remove('dialog-minimized');
                    this.dialogInstance.element.querySelector('.e-dlg-content').classList.remove('hide-content');
                    minimizeIcon.classList.add('sf-icon-Minimize');
                    minimizeIcon.setAttribute('title', 'Minimize');
                    minimizeIcon.classList.remove('sf-icon-Restore');
                    this.dialogInstance.position = this.dialogOldPositions;
                    this.dialogInstance.dataBind();
                }
            }
            else {
                this.dialogInstance.show(false);
                this.dialogInstance.element.classList.remove('dialog-maximized');
                this.dialogInstance.element.classList.add('dialog-minimized');
                this.dialogInstance.element.querySelector('.e-dlg-content').classList.add('hide-content');
                minimizeIcon.classList.remove('sf-icon-Minimize');
                minimizeIcon.removeAttribute('title');
                this.dialogInstance.position = { X: 'center', Y: 'bottom' };
                this.dialogInstance.dataBind();
                this.isFullScreen = true;
            }
        };
    }
    render() {
        return (<div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
     <DialogComponent id='dialog' created={this.onCreate.bind(this)} header={this.header} animationSettings={this.settings} showCloseIcon={true} closeOnEscape={true} width='300px' buttons={this.buttons} content='This is a dialog with minimize and maximize buttons' ref={dialog => this.dialogInstance = dialog} target='#dialog-target'/>
  </div>);
    }
}
export default App;
