import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent } from '@syncfusion/ej2-base';
function App() {
    function undoBtnCreated() {
        document.getElementById('undo').addEventListener('click', undoBtnClick);
    }
    function undoBtnClick() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        if (!signature.disabled && !signature.isReadOnly) {
            signature.undo();
        }
    }
    function redoBtnCreated() {
        document.getElementById('redo').addEventListener('click', redoBtnClick);
    }
    function redoBtnClick() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        if (!signature.disabled && !signature.isReadOnly) {
            signature.redo();
        }
    }
    function clrBtnCreated() {
        document.getElementById('clear').addEventListener('click', clrBtnClick);
    }
    function clrBtnClick() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        if (!signature.disabled && !signature.isReadOnly) {
            signature.clear();
        }
    }
    function disableChange(args) {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        signature.disabled = args.checked;
    }
    function readOnlyChange(args) {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        signature.isReadOnly = args.checked;
    }
    function change(args) {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let undoButton = getComponent(document.getElementById('undo'), 'btn');
        let redoButton = getComponent(document.getElementById('redo'), 'btn');
        let clearButton = getComponent(document.getElementById('clear'), 'btn');
        if (!signature.disabled && !signature.isReadOnly) {
            if (signature.canUndo()) {
                undoButton.disabled = false;
            }
            else {
                undoButton.disabled = true;
            }
            if (signature.canRedo()) {
                redoButton.disabled = false;
            }
            else {
                redoButton.disabled = true;
            }
            if (!signature.isEmpty()) {
                clearButton.disabled = false;
            }
            else {
                clearButton.disabled = true;
            }
        }
    }
    return (<div id='container'>
      <div id="option">
          <table>
              <tr>
                  <td>
                    <ButtonComponent id='undo' cssClass='e-primary' content='UNDO' disabled={true} created={undoBtnCreated.bind(this)}/>
                  </td><td>
                    <ButtonComponent id='redo' cssClass='e-primary' content='REDO' disabled={true} created={redoBtnCreated.bind(this)}/>
                  </td><td>
                    <ButtonComponent id='clear' cssClass='e-primary' content='CLEAR' disabled={true} created={clrBtnCreated.bind(this)}/>
                  </td><td>
                      <div id="checkbox1">
                        <CheckBoxComponent label="Disabled" change={disableChange}/>
                      </div>
                      <div id="checkbox2"><CheckBoxComponent label="ReadOnly" change={readOnlyChange}/></div>
                  </td>
              </tr>
          </table>
      </div>
      <div id="signature-control">
          <SignatureComponent id='signature' change={change}/>
      </div>
  </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
