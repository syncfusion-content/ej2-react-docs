import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    settings = { effect: 'Zoom', duration: 400, delay: 0 };
    dialogInstance;
    buttons = [{
            buttonModel: {
                content: 'Close',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            'click': () => {
                this.dialogInstance.hide();
            }
        }];
    handleClick() {
        this.dialogInstance.show();
    }
    componentDidMount() {
        document.onclick = (args) => {
            if (args.target.id === 'dialog-target') {
                this.dialogInstance.hide();
            }
        };
    }
    render() {
        return (<div className="App" id='dialog-target'>
    <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
    <DialogComponent header='Delete Multiple Items' showCloseIcon={true} visible={true} animationSettings={this.settings} width='300px' buttons={this.buttons} closeOnEscape={true} content='Are you sure you want to permanently delete all of these items?' ref={dialog => this.dialogInstance = dialog} target='#dialog-target'/>
    </div>);
    }
}
export default App;
