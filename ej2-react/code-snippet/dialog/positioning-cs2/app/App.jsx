import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    defaultDialogInstance;
    PositioningInstance;
    position;
    constructor(props) {
        super(props);
        this.state = {
            hideDialog: true
        };
        this.position = { X: 'center', Y: 'center' };
    }
    changePosition = (event) => {
        this.defaultDialogInstance.position = { X: event.currentTarget.value.split(" ")[0], Y: event.currentTarget.value.split(" ")[1] };
        this.PositioningInstance.innerHTML = 'Position: {X: "' + event.currentTarget.value.split(" ")[0] + '", Y: "' + event.currentTarget.value.split(" ")[1] + '"}';
        const txt = event.target.parentElement.querySelector('.e-label').innerText.split(" ");
        this.PositioningInstance.innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
    };
    dialogClose = () => {
        this.setState({ hideDialog: false });
    };
    dialogOpen = () => {
        this.setState({ hideDialog: true });
    };
    footerTemplate = () => {
        return (<span id="posvalue"/>);
    };
    render() {
        return (<div className="App" id='dialog-target'>
    <DialogComponent id='defaultDialog' header='Choose a Dialog Position' visible={this.state.hideDialog} showCloseIcon={false} position={this.position} footerTemplate={this.footerTemplate} width='452px' ref={defaultDialog => this.defaultDialogInstance = defaultDialog} target='#dialog-target' open={this.dialogOpen} close={this.dialogClose} closeOnEscape={false}>
          <table id='poschange'>
          <tbody>
              <tr>
              <td><RadioButtonComponent id='radio1' label='Left Top' value='left top' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
              <td><RadioButtonComponent id='radio2' label='Center Top' value='center top' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
              <td><RadioButtonComponent id='radio3' label='Right Top' value='right top' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
            </tr>
            <tr>
              <td><RadioButtonComponent id='radio4' label='Left Center' value='left center' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
              <td><RadioButtonComponent id='radio5' checked={true} label='Center Center' value='center center' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
              <td><RadioButtonComponent id='radio6' label='Right Center' value='right center' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
            </tr>
            <tr>
              <td><RadioButtonComponent id='radio7' label='Left Bottom' value='left bottom' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
              <td><RadioButtonComponent id='radio8' label='Center Bottom' value='center bottom' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
              <td><RadioButtonComponent id='radio9' label='Right Bottom' value='right bottom' name='xy' onClick={this.changePosition = this.changePosition.bind(this)}/></td>
            </tr>
            </tbody>
      </table>
      </DialogComponent>
      </div>);
    }
}
export default App;
