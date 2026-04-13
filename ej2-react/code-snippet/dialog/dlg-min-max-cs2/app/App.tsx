

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App(){
  let settings: any = { effect: 'Zoom', duration: 400, delay: 0 };
  let dialogInstance: DialogComponent;
  let isFullScreen: Boolean;
  let dialogOldPositions: any;
  let maxBtn:HTMLElement;
  let minBtn: HTMLElement;
  function header() {
      return (<div>
        <span className='title'>Dialog</span><span className='e-icons sf-icon-Maximize' id='max-btn' title='Maximize'></span><span class='e-icons sf-icon-Minimize' id='min-btn' title='Minimize'></span>
    </div>);
  }
  let buttons: any = [{
      buttonModel: {
          content: 'Ok',
          iconCss: 'e-icons e-ok-icon',
          isPrimary: true,
      },
      'click': () => {
          dialogInstance.hide();
      }
  },
  {
      buttonModel: {
          content: 'No',
          iconCss: 'e-icons e-close-icon',
      },
      'click': () => {
          dialogInstance.hide();
      }
  },
  ];

  function handleClick() {
      dialogInstance.show();
  }

  function onCreate() {
      maxBtn = document.getElementById('max-btn') as HTMLElement;
      maxBtn.onclick = (e: Event) => {
       var maximizeIcon;
      if (dialogInstance.element.classList.contains('dialog-minimized')) {
        dialogInstance.element.querySelector('#min-btn').classList.add('sf-icon-Minimize');
        dialogInstance.element.querySelector('#min-btn').classList.remove('sf-icon-Restore');
        dialogInstance.element.querySelector('#min-btn').setAttribute('title', 'Minimize');
      }
      if (!dialogInstance.element.classList.contains('dialog-maximized') && !isFullScreen) {
        maximizeIcon = dialogInstance.element.querySelector(".e-dlg-header-content .sf-icon-Maximize");
      } else {
        maximizeIcon = dialogInstance.element.querySelector(".e-dlg-header-content .sf-icon-Restore");
      }
      if (!dialogInstance.element.classList.contains('dialog-maximized')) {
        dialogInstance.element.classList.add('dialog-maximized');
        dialogInstance.show(true);
        maximizeIcon.classList.add('sf-icon-Restore');
        maximizeIcon.setAttribute('title', 'Restore');
        maximizeIcon.classList.remove('sf-icon-Maximize');
        dialogInstance.element.querySelector('.e-dlg-content').classList.remove('hide-content');
        isFullScreen = true;
      } else {
        dialogInstance.element.classList.remove('dialog-maximized');
        dialogInstance.show(false);
        maximizeIcon.classList.remove('sf-icon-Restore');
        maximizeIcon.classList.add('sf-icon-Maximize');
        maximizeIcon.setAttribute('title', 'Maximize');
        dialogInstance.element.querySelector('.e-dlg-content').classList.remove('hide-content');
        dialogInstance.position = dialogOldPositions;
        dialogInstance.dataBind();
        isFullScreen = false;
      }
    }
    minBtn = document.getElementById('min-btn') as HTMLElement;
    minBtn.onclick = (e: Event) => {
        var minimizeIcon = dialogInstance.element.querySelector(".e-dlg-header-content .sf-icon-Minimize");
        if (!dialogInstance.element.classList.contains('e-dlg-fullscreen')) {
        if (!dialogInstance.element.classList.contains('dialog-minimized')) {
            dialogOldPositions = { X: dialogInstance.position.X, Y: dialogInstance.position.Y }
            dialogInstance.element.classList.add('dialog-minimized');
            dialogInstance.element.classList.remove('dialog-maximized');
            dialogInstance.element.querySelector('.e-dlg-content').classList.add('hide-content');
            dialogInstance.position = { X: 'center', Y: 'bottom' };
            dialogInstance.dataBind();
            minimizeIcon.classList.add('sf-icon-Restore');
            minimizeIcon.setAttribute('title', 'Restore');
        } else {
            dialogInstance.element.classList.remove('dialog-minimized');
            dialogInstance.element.querySelector('.e-dlg-content').classList.remove('hide-content');
            minimizeIcon.classList.add('sf-icon-Minimize');
            minimizeIcon.setAttribute('title', 'Minimize');
            minimizeIcon.classList.remove('sf-icon-Restore');
            dialogInstance.position = dialogOldPositions;
            dialogInstance.dataBind();
        }
        } else {
        dialogInstance.show(false);
        dialogInstance.element.classList.remove('dialog-maximized');
        dialogInstance.element.classList.add('dialog-minimized');
        dialogInstance.element.querySelector('.e-dlg-content').classList.add('hide-content');
        minimizeIcon.classList.remove('sf-icon-Minimize');
        minimizeIcon.removeAttribute('title');
        dialogInstance.position = { X: 'center', Y: 'bottom' };
        dialogInstance.dataBind();
        isFullScreen = true;
        }
      }
    }
    return (
      <div className="App" id='dialog-target'>
          <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
        <DialogComponent id='dialog' created={onCreate.bind(this)} header={header} animationSettings={settings} showCloseIcon={true} closeOnEscape={true}
          width='300px' buttons={buttons} content='This is a dialog with minimize and maximize buttons' ref={dialog => dialogInstance = dialog!}
          target='#dialog-target'/>
      </div>
    );
}

export default App;



