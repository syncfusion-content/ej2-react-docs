


import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent,PositionDataModel } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {  
  let defaultDialogInstance: DialogComponent;
  let PositioningInstance: HTMLElement;
  const [status, setStatus] = React.useState({ hideDialog: true });
  let position: PositionDataModel;
  position = { X: 'center', Y: 'center' };

  function changePosition(event: any): void {
    defaultDialogInstance.position = { X: event.currentTarget.value.split(" ")[0], Y: event.currentTarget.value.split(" ")[1] };
    PositioningInstance.innerHTML = 'Position: {X: "' + event.currentTarget.value.split(" ")[0] + '", Y: "' + event.currentTarget.value.split(" ")[1] + '"}'
    const txt: string[] = event.target.parentElement.querySelector('.e-label').innerText.split(" ");
    PositioningInstance.innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
  }

  function dialogClose (){
    setStatus({ hideDialog: false });
  }

  function dialogOpen() {
    setStatus({ hideDialog: true });
  }

  function footerTemplate (): JSX.Element {
    return (
        <span id="posvalue" />
    )
  }
  return (
    <div className="App" id='dialog-target'>
        <DialogComponent id='defaultDialog' header='Choose a Dialog Position' visible={status.hideDialog} showCloseIcon={false} position={position} footerTemplate={footerTemplate} width='452px' ref={defaultDialog => defaultDialogInstance = defaultDialog!}
            target='#dialog-target' open={dialogOpen} close={dialogClose} closeOnEscape={false}>
            <table id ='poschange'>
            <tbody>
                <tr>
                <td><RadioButtonComponent id='radio1'  label='Left Top' value='left top' name='xy' onClick = {changePosition.bind(this)} /></td>
                <td><RadioButtonComponent id='radio2'  label='Center Top' value='center top' name='xy' onClick={changePosition.bind(this)}/></td>
                <td><RadioButtonComponent id='radio3'  label='Right Top' value='right top' name='xy' onClick={changePosition.bind(this)}/></td>
                </tr>
                <tr>
                <td><RadioButtonComponent id='radio4'  label='Left Center' value='left center' name='xy' onClick={changePosition.bind(this)} /></td>
                <td><RadioButtonComponent id='radio5' checked = {true} label='Center Center' value='center center' name='xy' onClick={changePosition.bind(this)} /></td>
                <td><RadioButtonComponent id='radio6'  label='Right Center' value='right center' name='xy' onClick={changePosition.bind(this)} /></td>
                </tr>
                <tr>
                <td><RadioButtonComponent id='radio7'  label='Left Bottom' value='left bottom' name='xy' onClick={changePosition.bind(this)} /></td>
                <td><RadioButtonComponent id='radio8'  label='Center Bottom' value='center bottom' name='xy' onClick={changePosition.bind(this)} /></td>
                <td><RadioButtonComponent id='radio9'  label='Right Bottom' value='right bottom' name='xy' onClick={changePosition.bind(this)} /></td>
                </tr>
                </tbody>
        </table>
    </DialogComponent>
    </div>
  );
}
export default App;



