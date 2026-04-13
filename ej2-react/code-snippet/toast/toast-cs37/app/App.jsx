import { ButtonComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
class App extends React.Component {
    toastInstance;
    customFlag;
    checkboxObj;
    dropDownInstance;
    radioInstance1;
    radioInstance;
    radioInstance2;
    radioInstance3;
    timeOutDelay = 600;
    dropdownDB = ['Top Left', 'Top Right', 'Top Center', 'Bottom Left', 'Bottom Right', 'Bottom Center'];
    constructor(props) {
        super(props);
        this.state = {
            position: { X: 'Center', Y: "Bottom" },
            target: document.body,
            width: 300
        };
    }
    toastCreated() {
        this.toastShow(600);
    }
    toastShow(timeOutDelay) {
        setTimeout(() => {
            this.toastInstance.show();
        }, timeOutDelay);
    }
    valueChange(e) {
        this.toastInstance.hide('All');
        this.setToastPosValue(e.value);
        this.toastShow(1000);
    }
    radioChange(e) {
        if (this.radioInstance.element.checked) {
            this.toastInstance.hide('All');
            document.getElementById('dropdownChoose').style.display = 'table-cell';
            document.getElementById('customChoose').style.display = 'none';
            this.setToastPosValue(this.dropDownInstance.value.toString());
            this.customFlag = true;
            this.toastShow(1000);
        }
    }
    radioChange3(e) {
        if (this.radioInstance3.element.checked) {
            this.toastInstance.hide('All');
            this.setState({ target: document.body });
            this.toastShow(1000);
        }
    }
    radioChange2(e) {
        if (this.radioInstance2.element.checked) {
            this.toastInstance.hide('All');
            this.setState({ target: '#toast_pos_target' });
            this.toastShow(1000);
        }
    }
    radioChange1(e) {
        if (this.radioInstance1.element.checked) {
            this.toastInstance.hide('All');
            document.getElementById('dropdownChoose').style.display = 'none';
            document.getElementById('customChoose').style.display = 'table-cell';
            this.setCustomPosValue();
            this.customFlag = true;
            this.toastShow(1000);
        }
    }
    setCustomPosValue() {
        this.setState({
            position: {
                X: parseInt(document.getElementById('xPos').value, 10),
                Y: parseInt(document.getElementById('yPos').value, 10)
            }
        });
    }
    setToastPosValue(value) {
        value = value.toLowerCase().replace(' ', '');
        switch (value) {
            case 'topleft':
                this.setState({ position: { X: 'Left', Y: 'Top' } });
                break;
            case 'topright':
                this.setState({ position: { X: 'Right', Y: 'Top' } });
                break;
            case 'topcenter':
                this.setState({ position: { X: 'Center', Y: 'Top' } });
                break;
            case 'topfullwidth':
                this.setState({ position: { X: 'Center', Y: 'Top' }, width: '100%' });
                break;
            case 'bottomleft':
                this.setState({ position: { X: 'Left', Y: 'Bottom' } });
                break;
            case 'bottomright':
                this.setState({ position: { X: 'Right', Y: 'Bottom' } });
                break;
            case 'bottomcenter':
                this.setState({ position: { X: 'Center', Y: 'Bottom' } });
                break;
            case 'bottomfullwidth':
                this.setState({ position: { X: 'Center', Y: 'Bottom' }, width: '100%' });
                break;
        }
    }
    render() {
        return (<div id="toast_pos_target">
        <div id="toast_full_Position" className='row'>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>
                    <RadioButtonComponent ref={custom => this.radioInstance = custom} checked={true} label='Position' name="position" change={this.radioChange = this.radioChange.bind(this)}/>
                  </div>
                </td>
                <td>
                  <div>
                    <RadioButtonComponent ref={custom => this.radioInstance1 = custom} label='Custom' name="position" change={this.radioChange1 = this.radioChange1.bind(this)}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td id="dropdownChoose" colSpan={2}>
                  <div>
                    <DropDownListComponent ref={drop => this.dropDownInstance = drop} id="ddlelement" dataSource={this.dropdownDB} placeholder="Select a Position" change={this.valueChange = this.valueChange.bind(this)} index='4'/>
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
                    <RadioButtonComponent ref={custom => this.radioInstance2 = custom} checked={true} label='Target' name="toast" change={this.radioChange2 = this.radioChange2.bind(this)}/>
                  </div>
                </td>
                <td>
                  <div>
                    <RadioButtonComponent ref={custom => this.radioInstance3 = custom} checked={true} label='Global' name="toast" change={this.radioChange3 = this.radioChange3.bind(this)}/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ButtonComponent cssClass="e-primary" onClick={this.toastShow = this.toastShow.bind(this, 500)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" target={this.state.target} width={this.state.width} position={this.state.position} created={this.toastCreated = this.toastCreated.bind(this)}/>
      </div>);
    }
}
;
export default App;
