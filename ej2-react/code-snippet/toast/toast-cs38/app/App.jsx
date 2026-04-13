import { ButtonComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
function App(position, target, width) {
    let toastInstance;
    let customFlag;
    let checkboxObj;
    let dropDownInstance;
    let radioInstance1;
    let radioInstance;
    let radioInstance2;
    let radioInstance3;
    let timeOutDelay = 600;
    let dropdownDB = ['Top Left', 'Top Right', 'Top Center', 'Bottom Left', 'Bottom Right', 'Bottom Center'];
    const [state1, setStatus1] = React.useState({ position: { X: 'Center', Y: "Bottom" } });
    const [state2, setStatus2] = React.useState({ target: document.body });
    const [state3, setStatus3] = React.useState({ width: '300' });
    function toastCreated() {
        toastShow(600);
    }
    function toastShow(timeOutDelay) {
        setTimeout(() => {
            toastInstance.show();
        }, timeOutDelay);
    }
    function valueChange(e) {
        toastInstance.hide('All');
        setToastPosValue(e.value);
        toastShow(1000);
    }
    function radioChange(e) {
        if (radioInstance.element.checked) {
            toastInstance.hide('All');
            document.getElementById('dropdownChoose').style.display = 'table-cell';
            document.getElementById('customChoose').style.display = 'none';
            setToastPosValue(dropDownInstance.value.toString());
            customFlag = true;
            toastShow(1000);
        }
    }
    function radioChange3(e) {
        if (radioInstance3.element.checked) {
            toastInstance.hide('All');
            setStatus2({ target: document.body });
            toastShow(1000);
        }
    }
    function radioChange2(e) {
        if (radioInstance2.element.checked) {
            toastInstance.hide('All');
            setStatus2({ target: '#toast_pos_target' });
            toastShow(1000);
        }
    }
    function radioChange1(e) {
        if (radioInstance1.element.checked) {
            toastInstance.hide('All');
            document.getElementById('dropdownChoose').style.display = 'none';
            document.getElementById('customChoose').style.display = 'table-cell';
            setCustomPosValue();
            customFlag = true;
            toastShow(1000);
        }
    }
    function setCustomPosValue() {
        setStatus1({
            position: {
                X: parseInt(document.getElementById('xPos').value),
                Y: parseInt(document.getElementById('yPos').value)
            }
        });
    }
    function setToastPosValue(value) {
        value = value.toLowerCase().replace(' ', '');
        switch (value) {
            case 'topleft':
                setStatus1({ position: { X: 'Left', Y: 'Top' } });
                break;
            case 'topright':
                setStatus1({ position: { X: 'Right', Y: 'Top' } });
                break;
            case 'topcenter':
                setStatus1({ position: { X: 'Center', Y: 'Top' } });
                break;
            case 'topfullwidth':
                setStatus1({ position: { X: 'Center', Y: 'Top' } });
                setStatus3({ width: '100%' });
                break;
            case 'bottomleft':
                setStatus1({ position: { X: 'Left', Y: 'Bottom' } });
                break;
            case 'bottomright':
                setStatus1({ position: { X: 'Right', Y: 'Bottom' } });
                break;
            case 'bottomcenter':
                setStatus1({ position: { X: 'Center', Y: 'Bottom' } });
                break;
            case 'bottomfullwidth':
                setStatus1({ position: { X: 'Center', Y: 'Bottom' } });
                setStatus3({ width: '100%' });
                break;
        }
    }
    return (<div id="toast_pos_target">
        <div id="toast_full_Position" className='row'>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>
                    <RadioButtonComponent ref={custom => radioInstance = custom} checked={true} label='Position' name="position" change={radioChange.bind(this)}/>
                  </div>
                </td>
                <td>
                  <div>
                    <RadioButtonComponent ref={custom => radioInstance1 = custom} label='Custom' name="position" change={radioChange1.bind(this)}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td id="dropdownChoose" colSpan={2}>
                  <div>
                    <DropDownListComponent ref={drop => dropDownInstance = drop} id="ddlelement" dataSource={dropdownDB} placeholder="Select a Position" change={valueChange.bind(this)} index={4}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td id='customChoose'>
                  <div className='e-row'>
                    <div className='e-float-input'>
                      <input type='text' className='e-input' id='xPos' defaultValue={'50'} required={true}/>
                      <span className='e-float-line'/>
                      <label className="e-float-text">X Position</label>
                    </div>
                  </div>
                  <div className='e-row'>
                    <div className='e-float-input'>
                      <input type='text' className='e-input' id='yPos' defaultValue={'50'} required={true}/>
                      <span className='e-float-line'/>
                      <label className="e-float-text">Y Position</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <RadioButtonComponent ref={custom => radioInstance2 = custom} checked={true} label='Target' name="toast" change={radioChange2.bind(this)}/>
                  </div>
                </td>
                <td>
                  <div>
                    <RadioButtonComponent ref={custom => radioInstance3 = custom} checked={true} label='Global' name="toast" change={radioChange3.bind(this)}/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ButtonComponent cssClass="e-primary" onClick={toastShow.bind(this, 500)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => toastInstance = toast} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" target={state2.target} width={state3.width} position={state1.position} created={toastCreated.bind(this)}/>
      </div>);
}
export default App;
