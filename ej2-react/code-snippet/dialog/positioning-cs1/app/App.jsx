{% raw %}
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
import { useState, useRef } from 'react';
function App() {
    const [visibility, setDialogVisibility] = useState(true);
    const defaultDialog = useRef(null);
    const positioningInstance = useRef(null);
    const position = { X: 'center', Y: 'center' };
    function changePosition(event) {
        defaultDialog.current.position = {
            X: event.currentTarget.value.split(' ')[0],
            Y: event.currentTarget.value.split(' ')[1],
        };
        positioningInstance.current.innerHTML =
            'Position: {X: "' +
                event.currentTarget.value.split(' ')[0] +
                '", Y: "' +
                event.currentTarget.value.split(' ')[1] +
                '"}';
        const txt = event.target.parentElement
            .querySelector('.e-label')
            .innerText.split(' ');
        positioningInstance.current.innerHTML =
            'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
    }
    function dialogClose() {
        setDialogVisibility(false);
    }
    function dialogOpen() {
        setDialogVisibility(true);
    }
    function footerTemplate() {
        return (<span ref={positioningInstance} style={{ float: 'left', paddingLeft: '15px' }}/>);
    }
    return (<div className="App" id="dialog-target">
      <DialogComponent id="defaultDialog" header="Choose a Dialog Position" visible={visibility} position={position} footerTemplate={footerTemplate} width="402px" ref={defaultDialog} target="#dialog-target" open={dialogOpen} close={dialogClose} closeOnEscape={false}>
        <table id="poschange">
          <tbody>
            <tr>
              <td>
                <RadioButtonComponent id="radio1" label="Left Top" value="left top" name="xy" onClick={changePosition}/>
              </td>
              <td>
                <RadioButtonComponent id="radio2" label="Center Top" value="center top" name="xy" onClick={changePosition}/>
              </td>
              <td>
                <RadioButtonComponent id="radio3" label="Right Top" value="right top" name="xy" onClick={changePosition}/>
              </td>
            </tr>
            <tr>
              <td>
                <RadioButtonComponent id="radio4" label="Left Center" value="left center" name="xy" onClick={changePosition}/>
              </td>
              <td>
                <RadioButtonComponent id="radio5" checked={true} label="Center Center" value="center center" name="xy" onClick={changePosition}/>
              </td>
              <td>
                <RadioButtonComponent id="radio6" label="Right Center" value="right center" name="xy" onClick={changePosition}/>
              </td>
            </tr>
            <tr>
              <td>
                <RadioButtonComponent id="radio7" label="Left Bottom" value="left bottom" name="xy" onClick={changePosition}/>
              </td>
              <td>
                <RadioButtonComponent id="radio8" label="Center Bottom" value="center bottom" name="xy" onClick={changePosition}/>
              </td>
              <td>
                <RadioButtonComponent id="radio9" label="Right Bottom" value="right bottom" name="xy" onClick={changePosition}/>
              </td>
            </tr>
          </tbody>
        </table>
      </DialogComponent>
    </div>);
}
export default App;
{% endraw %}